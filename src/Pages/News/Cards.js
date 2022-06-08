import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    styled,
    Typography,
} from "@mui/material";

import {useEffect} from "react";
import {connect} from "react-redux";
import {getAll, setCurrent} from "../../store/reducer/book";
import Toolbar from "@mui/material/Toolbar";
import {NavLink} from "react-router-dom";
import Header from "../../components/Header";

const Item = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

function BasicGrid({books, getAll, setCurrent, limit}) {

    const basePath = 'http://50.116.20.197:9095/file/1?filename='

    function changeDirection(item) {
        setCurrent(item)
        localStorage.setItem('currentBook', item.id)
    }

    useEffect(() => {
        getAll()
    }, [])
    return (
        <Box sx={{flexGrow: 1}} className='mb-5'>
            <Header/>
            <Toolbar/>
            <Grid container spacing={2}>
                {
                    books.map((i, index) => {
                        if (limit > index)
                            return <Grid item xs={12} sm={6} md={3} key={index}>
                                <Item>
                                    <CardActionArea className={'border rounded rounded-1'}>
                                        <Card sx={{maxWidth: 345, maxHeight: 300, minHeight: 300}}>
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image={basePath+i.file_path}
                                                alt="green iguana"
                                            />
                                            <NavLink to={'/new'} className='text-decoration-none text-black'
                                                     onClick={() => changeDirection(i)}>
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div">
                                                        {i.name}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {i.short_info}
                                                    </Typography>
                                                </CardContent>
                                            </NavLink>
                                        </Card>
                                    </CardActionArea>
                                </Item>
                            </Grid>
                    })
                }
            </Grid>
        </Box>
    );
}

export default connect(({book: {books}}) => ({books}), {getAll, setCurrent})(BasicGrid)