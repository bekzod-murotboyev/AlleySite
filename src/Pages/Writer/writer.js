import {Box, Typography} from "@mui/material";
import WriterCard from "./swiper";
import {NavLink} from "react-router-dom";

function Writers({limit}) {

    return (
        <Box
            sx={{
                py: 8,
                px: 13,
                borderTop: "1px solid grey",
                borderBottom: "1px solid grey",
            }}
        >
            <NavLink to={'/writers'} className='text-decoration-none text-black'>
                <Typography
                    sx={{
                        fontSize: "35px",
                        lineHeight: "42px",
                        mb: 5,
                        fontWeight: "500",

                    }}
                >
                    Adiblar
                </Typography>
            </NavLink>

            <WriterCard limit={limit}/>
        </Box>
    );
}

export default Writers;
