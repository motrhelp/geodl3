import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Hearts from "../features/hearts/Hearts";
import CountryAutocomplete from "../features/countryAutocomplete/CountryAutocomplete";
import Flag from "../features/Flag";

export default function GuessCountryScreen() {

    return (
        <Grid container
            align="center"
            sx={{
                height: "100%",
            }}
        >
            <Grid item xs={12}>
                <Flag />
            </Grid>
            <Grid item xs={12}>
                <Hearts />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4">
                    Guesses
                </Typography>
            </Grid>
            <Grid item xs={12} >
                <CountryAutocomplete />
            </Grid>

        </Grid>
    );
}