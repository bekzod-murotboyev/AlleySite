import * as React from "react";
import {styled} from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";
import img1 from '../../images/pic/img1.jpeg'
import img2 from '../../images/pic/img2.jpg'
import img3 from '../../images/pic/img3.jpg'
import img4 from '../../images/pic/img4.jpg'
import {ImageList, ImageListItem} from "@mui/material";

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
        <ImageList sx={{width: 1200, height: 500}} cols={4} rowHeight={400} className='mb-0'>
            {itemData.map((item) => (
                <ImageListItem key={item.img} className='mx-2'>
                    <img
                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
