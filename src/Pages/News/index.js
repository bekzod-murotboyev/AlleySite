import {Box, Typography} from "@mui/material";
import Title from "./title";
import {NavLink} from "react-router-dom";
import BasicGrid from "./Cards";

function News({limit}) {
    return (
        <Box sx={{py: 5, px: 13}} id={"news"}>
            <Title/>
            <Box>
                <NavLink to={'/news'} className='text-decoration-none text-black'>
                    <Typography
                        sx={{
                            fontSize: "35px",
                            fontWeight: "400",
                            lineHeight: "42px",
                            my: 4,
                            mt: 8,
                        }}
                    >
                        Maqolalar
                    </Typography>
                </NavLink>
                <BasicGrid limit={4}/>
            </Box>
        </Box>
    );
}

export default News;
