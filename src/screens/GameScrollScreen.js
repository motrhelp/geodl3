import { Grid } from "@mui/material";
import React from "react";
import CountryAutocomplete from "../features/countryAutocomplete/CountryAutocomplete";
import CountryGuessList from "../features/countryGuesses/CountryGuessList";
import Header from "../features/header/Header";
import Shape from "../features/Shape";
import GuessShapeScreen from "./GuessShapeScreen";

export default function GameScrollScreen() {

    return (
        <React.Fragment>
            <Header />
            <Grid container mt={10}>

                {/* Guess shape */}
                <GuessShapeScreen />

            </Grid>
        </React.Fragment>
    )

}