import React from 'react'
import {Typography} from "@mui/material";


function Map() {
    return (
            <div>
                <div className="row p-5 pb-0 pt-0 mt-1 mx-5 mt-5">
                    <Typography
                        sx={{
                            fontSize: "35px",
                            fontWeight: "400",
                            lineHeight: "42px",
                            my: 4,
                            mt: 8,
                        }}
                    >
                        3D Sayohat
                    </Typography>
                </div>
                <div className="row px-sm-4 px-md-4 px-4 px-lg-4 mb-1">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!4v1650702491340!6m8!1m7!1sCAoSLEFGMVFpcE0zM1lyaWpLRkNfTkdNUVpoQVZFdkN6SkhlbWZ6S1ViUTNMM2hW!2m2!1d41.30386299999999!2d69.23971499999993!3f10.520562135177846!4f-4.065184604189767!5f0.7820865974627469"
                            style={{border: "none", height:500}} className="w-100 map" allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"/>
                </div>
            </div>
    )
}
export default Map