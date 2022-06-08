import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import {useState, useEffect} from "react";
import {connect} from "react-redux";
import {get} from "../../store/reducer/book";
import Header from "../../components/Header";


function SingleCard({current, get}) {

    const basePath = 'http://50.116.20.197:9095/file/1?filename='

    useEffect(() => {
        get(localStorage.getItem('currentBook'))
    }, [])


    return (
        current ? <div>
            <Header/>
            <Toolbar/>
            <div className="row p-5">
                <div className="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                    <Card>
                        <CardMedia
                            component="img"
                            image={basePath+current.file_path}
                            alt="green iguana"
                            className='w-100 h-100'/>
                    </Card>
                </div>
                <div className="col-sm-12 col-12 col-md-6 col-lg-6 col-xl-6">
                    <CardContent className='text-center'>
                        <Typography gutterBottom variant="h6" component="div">
                            {current.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {current.short_info}
                        </Typography>
                    </CardContent>
                </div>
            </div>

        </div> : ''
    );
}

export default connect(({book: {current}}) => ({current}), {get})(SingleCard);
