import {Box, Typography} from "@mui/material";
import Title from "./title";
import {NavLink} from "react-router-dom";
import BasicGrid from "./Cards";
import Header from "../../components/Header";
import Toolbar from "@mui/material/Toolbar";

function News({limit}) {
    return (
        <div>
            <Header/>
            <Toolbar/>
            <Box sx={{pb: 5, px: 13,}} id={"news"}>
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
                    <BasicGrid limit={limit}/>
                </Box>
            </Box>
        </div>
    );
}

export default News;
