import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CountryAutocomplete from "../features/countryAutocomplete/CountryAutocomplete";
import CountryGuessList from "../features/countryGuesses/CountryGuessList";
import Shape from "../features/Shape";
import { selectCountryVictory } from "../features/level/countryVictorySlice";

export default function GuessShapeScreen() {

    const countryVictory = useSelector(selectCountryVictory);

    return (
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
                {!countryVictory &&
                    <CountryAutocomplete />
                }
            </Grid>
        </React.Fragment>
    )

}