import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import img1 from '../../images/pic/img1.jpeg'
import img2 from '../../images/pic/img2.jpg'
import img3 from '../../images/pic/img3.jpg'
import img4 from '../../images/pic/img4.jpg'
import {Card, CardActionArea, CardContent, CardMedia, ImageList, ImageListItem, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";

const Item = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
}));

const itemData = [
    {
        img: img1,
        title: '?'
    },
    {
        img: img2,
        title: '?'
    },
    {
        img: img3,
        title: '?'
    },
    {
        img: img4,
        title: '?'
    },
]


export default function BasicGrid() {
    return (
        // <ImageList sx={{width: 1200, height: 500}} cols={4} rowHeight={400} className='mb-0'>
        //     {
        //         itemData.map((item, index) => (
        //             <Grid item xs={12} sm={6} md={3} key={index}>
        //                 <Item>
        //                     <ImageListItem key={item.img} className='mx-2'>
        //                         <img
        //                             src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        //                             srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        //                             alt={item.title}
        //                             loading="lazy"
        //                         />
        //                     </ImageListItem>
        //                 </Item>
        //             </Grid>
        //         ))
        //     }
        // </ImageList>
        <Box sx={{flexGrow: 1}}>
            <Grid container spacing={2}>
                {
                    itemData.map((i, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Item>
                                        <CardActionArea className={'border rounded rounded-1'}>
                                            <Card sx={{maxWidth: 345, maxHeight: 300, minHeight: 200}}>
                                                <CardMedia
                                                    component="img"
                                                    height="300"
                                                    image={i.img}
                                                    alt="Ops! Something went wrong"
                                                />
                                            </Card>
                                        </CardActionArea>
                                    </Item>
                                </Grid>
                            );
                    })}
            </Grid>
        </Box>
    );
}
