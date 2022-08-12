import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import WrapperBox from "../layout/WrapperBox";

import Header from "../features/header/Header";
import Flag from "../features/Flag";
import CountryGuessList from "../features/countryGuesses/CountryGuessList";
import CountryAutocomplete from "../features/countryAutocomplete/CountryAutocomplete";

export default function GuessCountryScreen() {

    return (
        <Grid container spacing={1}
            direction="column"
            columns={20}
            sx={{
                height: '100vh',

                /* mobile viewport bug fix */
                minHeight: '-webkit-fill-available',
                maxHeight: '-webkit-fill-available',
            }}
        >

            {/* Header */}
            <Grid item xs={2}>
                <Header />
            </Grid>
            <Grid item xs={7} overflow={"hidden"}>
                <Flag />
            </Grid>
            <Grid item xs={8} overflow={"auto"}>
                <CountryGuessList />
            </Grid>
            <Grid item xs={2}>
                <CountryAutocomplete />
            </Grid>
        </Grid >
    );
}