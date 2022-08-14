import { Autocomplete, Button, Grid, Popper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countryList } from "../../data/CountryList";
import { selectCountryGuessList, addCountryGuess } from "../countryGuesses/countryGuessListSlice";
import { calculateBearing, calculateDistance } from "../DistanceCalculator";
import { gameNumber } from "../GameNumber";

export default function CountryAutocomplete() {

    const [value, setValue] = React.useState(null);

    const countryGuessList = useSelector(selectCountryGuessList);
    const dispatch = useDispatch();

    const countryToGuess = countryList[gameNumber];

    const getDirection = () => {
        let bearing = calculateBearing(value, countryToGuess);
        let directionIndex = Math.round(bearing / 45);
        return ["E", "SE", "S", "SW", "W", "NW", "N", "NE"][directionIndex];
    }

    const createGuessFromAutocomplete = () => {
        let newGuess = null;
        if (value) {
            let distance = calculateDistance(value, countryToGuess);
            let direction = distance > 0 ? getDirection() : "Y";
            newGuess = {
                country: value.name,
                code: value.code,
                distance: distance,
                direction: direction
            }
            setValue(null); // reset value
        }

        

        return newGuess;
    }

    const PopperMy = function (props) {
        return (<Popper {...props} placement='top' disablePortal={false} />)
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={9}>
                <Autocomplete
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    options={countryList}
                    getOptionLabel={(country) => country.name}
                    getOptionDisabled={(country) => countryGuessList.some(guess => guess.country === country.name)}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    PopperComponent={PopperMy}
                />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" sx={{
                    height: '100%',
                    width: '100%',
                }}
                    onClick={() => {
                        const newGuess = createGuessFromAutocomplete();
                        if (newGuess != null) {
                            dispatch(addCountryGuess(newGuess));
                        }
                    }}
                >
                    Guess
                </Button>
            </Grid>
        </Grid >
    )
}