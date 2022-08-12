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
            }}
        >

            {/* Header */}
            <Grid item xs={2}>
                <Header />
            </Grid>
            <Grid item xs={5}>
                <Flag />
            </Grid>
            <Grid item xs={7} overflow={"auto"}>
                <CountryGuessList />
            </Grid>
            <Grid item container xs={1} spacing={2}>
                <Grid item xs={9}>
                    <CountryAutocomplete />
                </Grid>
                <Grid item xs={3} >
                    <WrapperBox>
                        <Typography variant="h5">
                            Guess
                        </Typography>
                    </WrapperBox>
                </Grid>
            </Grid>
            <Grid item xs={1}>
                <WrapperBox>
                    <Typography variant="h5">
                        After text
                    </Typography>
                </WrapperBox>
            </Grid>
        </Grid >
    );
}