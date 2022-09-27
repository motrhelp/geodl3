import { Button, Fade, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { countryList } from "../data/CountryList";
import countryOfficialNameList from "../data/CountryOfficialNameList";
import { gameNumber } from "../features/GameNumber";

export default function GuessCountryNameScreen() {

    const countryToGuess = countryList[gameNumber];
    const countryOfficialName = countryOfficialNameList.get(countryToGuess.code);

    const [highlighted, setHighlighted] = useState(null);
    const [correct, setCorrect] = useState(null);
    const [incorrect, setIncorrect] = useState(null);

    // Bottom of the screen reference
    const bottomRef = React.useRef(null);

    const onOptionPress = (index) => {
        setHighlighted(index);
    }

    const onPressGuess = () => {
        if (highlighted != null) {
            if (countryOfficialName.options[highlighted] == countryOfficialName.name) {
                setCorrect(highlighted);
            } else {
                setIncorrect(highlighted);
            }
        }
    }

    return (
        <Grid container align="center">
            <Grid item xs={12} >
                <Typography variant="h6">
                    <Link underline="none" color="success.main">{countryToGuess.name}</Link>
                    , officialy known as&nbsp;
                    {highlighted == null ?
                        <Link>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        :
                        <Link underline="none"
                            color={incorrect == highlighted ? "error.main" : "primary"}
                        >
                            {countryOfficialName.options[highlighted]}
                        </Link>
                    }
                </Typography>
            </Grid>
            <Grid item xs={12} container
                spacing={2}
                alignContent={"center"}
                overflow="auto"
                py={5}
            >
                {countryOfficialName.options.map((option, index) => (
                    <Grid item xs={12} key={index}>
                        <Button
                            variant={index == highlighted
                                || index == incorrect || index == correct
                                ? "contained" : "outlined"}
                            color={index == correct ? "success" : index == incorrect ? "error" : "primary"}
                            sx={{
                                width: '100%',
                            }}
                            onClick={() => onOptionPress(index)}
                        >
                            {option}
                        </Button>
                    </Grid>
                ))}
            </Grid>
            {incorrect != null &&
                <Fade in={incorrect != null} timeout={3000}
                    onEnter={() =>
                        // Scroll to the bottom of the screen
                        bottomRef.current.scrollIntoView({ behavior: "smooth" })
                    }
                >
                    <Grid item xs={12} pb={5}>
                        <Typography variant={"h6"} color={"error"}>Last try</Typography>
                    </Grid>
                </Fade>
            }
            <Grid item xs={12} pb={5}>
                <Button
                    variant={highlighted != null ? "contained" : "outlined"}
                    // color={index == correct ? "success" : index == incorrect ? "error" : "primary"}
                    sx={{
                        width: '100%',
                    }}
                    onClick={() => { onPressGuess() }}
                    ref={bottomRef}
                >
                    Guess
                </Button>
            </Grid>
        </Grid>
    )
}