import { Button, Fade, Grid, Link, Slider, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import countryStories from "../data/CountryStories";
import { gameNumber } from "../features/GameNumber";
import Header from "../features/header/Header";
import { selectLevel } from "../features/level/levelSlice";
import WrapperBox from "../layout/WrapperBox";

export default function SizeSliderScreen() {

    const level = useSelector(selectLevel);

    const [value, setValue] = React.useState(6);
    const [valueFormatted, setValueFormatted] = React.useState();
    const [attempting, setAttempting] = React.useState(false);

    const [highlighted, setHighlighted] = useState(null);
    const [correct, setCorrect] = useState(null);
    const [incorrect, setIncorrect] = useState(null);

    // Previous levels
    let text = "";
    for (let i = 0; i < level - 1; i++) {
        let countryStoryLevel = countryStories[gameNumber].levels[i];
        countryStoryLevel.beforeText ? text += countryStoryLevel.beforeText : text += "";
        text += countryStoryLevel.text;
    }

    // Current level
    const countryStoryLevel = countryStories[gameNumber].levels[level - 1];
    countryStoryLevel.beforeText ? text += countryStoryLevel.beforeText : text += "";

    const onOptionPress = (index) => {
        if (correct == undefined) {
            if (incorrect == index) {
                setHighlighted();
            } else {
                if (highlighted == index) {
                    // Check whether the selected option is correct
                    if (countryStoryLevel.options[index] == countryStoryLevel.text) {
                        setCorrect(index);
                        setHighlighted();
                    } else {
                        setIncorrect(index);
                    }
                } else {
                    setHighlighted(index);
                }
            }
        }
    }

    function valueLabelFormat(value) {
        const units = ['km²', 'thousand km²', 'million km²'];

        let unitIndex = 0;
        let scaledValue = value;

        while (scaledValue >= 1000 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 1000;
        }

        let scaledValueFormatted = scaledValue.toFixed(0) + ' ' + units[unitIndex];
        setValueFormatted(scaledValueFormatted);
        return scaledValueFormatted;
    }

    function calculateValue(value) {
        switch (value) {
            case 1:
                return 1000;
            case 2:
                return 15000;
            case 3:
                return 30000;
            case 4:
                return 80000;
            case 5:
                return 130000;
            case 6:
                return 275000;
            case 7:
                return 450000;
            case 8:
                return 800000;
            case 9:
                return 2000000;
            case 10:
                return 5000000;
            case 11:
                return 10000000;
            case 12:
                return 17000000;

        }
    }

    const handleChange = (event, newValue) => {
        if (!correct) {
            if (!attempting) {
                setAttempting(true);
            }
            if (typeof newValue === 'number') {
                setValue(newValue);
            }
        }
    };

    return (
        <React.Fragment>
            <Header />
            <Grid container spacing={5} mt={8}>
                {/* Header */}
                <Grid item xs={12}>
                    <Typography variant={'body'} textAlign="center">
                        {text}
                        {attempting || correct ?
                            <Link underline="none" color={correct ? 'success.main' : "primary"}>
                                {valueFormatted}
                            </Link>
                            :
                            <Link>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12} mt={10} container spacing={2} alignContent={"center"}>
                    <Slider
                        value={value}
                        min={1}
                        step={1}
                        max={12}
                        scale={calculateValue}
                        getAriaValueText={valueLabelFormat}
                        valueLabelFormat={valueLabelFormat}
                        marks={
                            [
                                {
                                    value: 1,
                                    label: 'Vatican City',
                                },
                                {
                                    value: 12,
                                    label: 'Russia',
                                }
                            ]
                        }
                        onChange={handleChange}
                        valueLabelDisplay={attempting ? "on" : "off"}
                        color={correct ? "success" : "primary"}
                    />
                </Grid>
                <Grid item xs={12} alignContent={"flex-start"}>
                    {correct ?
                        <Fade in={correct}>
                            <Button variant="contained" color="success"
                                sx={{
                                    width: "100%",
                                }}
                                onClick={() => {
                                    setAttempting(false);
                                }}
                            >
                                {valueFormatted}
                            </Button>
                        </Fade>
                        :
                        <Fade in={attempting}>
                            <Button variant="contained" color="primary"
                                sx={{
                                    width: "100%",
                                }}
                                onClick={() => {
                                    setAttempting(false);
                                    setCorrect(true);
                                }}
                            >
                                {valueFormatted}
                            </Button>
                        </Fade>
                    }
                </Grid>
            </Grid >
        </React.Fragment>
    );
}