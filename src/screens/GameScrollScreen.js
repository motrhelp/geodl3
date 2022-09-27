import { Grid } from "@mui/material";
import React from "react";
import CountryAutocomplete from "../features/countryAutocomplete/CountryAutocomplete";
import CountryGuessList from "../features/countryGuesses/CountryGuessList";
import Header from "../features/header/Header";
import Shape from "../features/Shape";
import GuessShapeScreen from "./GuessShapeScreen";
import CountryStoryScreen from "./CountryStoryScreen";
import GuessCountryNameScreen from "./GuessCountryNameScreen";
import { useSelector } from "react-redux";
import { selectCountryVictory } from "../features/level/countryVictorySlice";

export default function GameScrollScreen() {

    const countryVictory = useSelector(selectCountryVictory);

    return (
        <React.Fragment>
            <Header />
            <Grid container mt={10}>

                {/* Guess shape */}
                <GuessShapeScreen />

                {/* Guess country official name */}
                {countryVictory &&
                    <GuessCountryNameScreen />
                }

            </Grid>
        </React.Fragment>
    )

}