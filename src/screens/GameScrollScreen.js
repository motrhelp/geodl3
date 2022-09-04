import { Grid, Box, Typography, Paper, backdropClasses } from "@mui/material";
import React, { useRef } from "react";
import CountryAutocomplete from "../features/countryAutocomplete/CountryAutocomplete";
import CountryGuessList from "../features/countryGuesses/CountryGuessList";
import Flag from "../features/Flag";
import Header from "../features/header/Header";
import Shape from "../features/Shape";
import WrapperBox from "../layout/WrapperBox";

export default function GameScrollScreen() {

    return (
        <React.Fragment>
            <Header />
            <Grid container mt={10}>

                {/* Guess shape */}
                <React.Fragment>
                    <Shape />
                    <Grid item mb={10}>
                        <CountryGuessList />
                    </Grid>
                    <Grid item
                        sx={{
                            width: "350px",
                            position: "fixed",
                            bottom: "10px",
                            backgroundColor: "white",
                        }}
                    >
                        <CountryAutocomplete />
                    </Grid>
                </React.Fragment>


            </Grid>
        </React.Fragment>
    )

}