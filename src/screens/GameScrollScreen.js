import { Grid, Typography } from "@mui/material";
import React, { useRef } from "react";
import Flag from "../features/Flag";
import Header from "../features/header/Header";
import Shape from "../features/Shape";

export default function GameScrollScreen() {

    return (
        <React.Fragment>
            <Header />
            <Grid container mt={10}>

                {/* Guess shape */}
                <Shape />


            </Grid>
        </React.Fragment>
    )

}