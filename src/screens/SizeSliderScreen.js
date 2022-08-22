import { Box, Button, Fade, Grid, Link, Slider, Typography } from "@mui/material";
import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import countryArea from "../data/CountryArea";
import { countryList } from "../data/CountryList";
import { gameNumber } from "../features/GameNumber";
import Header from "../features/header/Header";
import { selectLevel } from "../features/level/levelSlice";

export default function SizeSliderScreen() {

    const level = useSelector(selectLevel);

    const [value, setValue] = React.useState(6);
    const [valueFormatted, setValueFormatted] = React.useState();
    const [attempting, setAttempting] = React.useState(false);

    const [correct, setCorrect] = useState(null);
    const [incorrect, setIncorrect] = useState(null);

    // const country = countryList[gameNumber];
    const country = countryList[76];

    function formatValue(value) {
        const units = ['km²', 'thousand km²', 'million km²'];

        let unitIndex = 0;
        let scaledValue = value;

        while (scaledValue >= 1000 && unitIndex < units.length - 1) {
            unitIndex += 1;
            scaledValue /= 1000;
        }

        return scaledValue.toFixed(0) + ' ' + units[unitIndex];
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
                return 150000;
            case 6:
                return 300000;
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
            setValueFormatted(formatValue(calculateValue(newValue)));
        }
    };

    const onPressGuess = () => {
        // Convert slider step to km², compare slider value to country area
        let calculatedValue = calculateValue(value);    
        let differenceToCurrent = Math.abs(calculatedValue - countryArea.get(country.code));  
        
        // Find next closest value, find difference to closest value
        let closestValue = calculatedValue < countryArea.get(country.code) ? value + 1 : value - 1;
        let differenceToClosest = Math.abs(calculateValue(closestValue) - countryArea.get(country.code));

        // Find out if difference is closer to current value or closest value
        if (differenceToCurrent < differenceToClosest) {
            setCorrect(true);
            setAttempting(false);
        } else {
            setIncorrect(valueFormatted);
        }
    }

    return (
        <React.Fragment>
            <Header />
            <Grid container spacing={5} mt={8}>
                {/* Header */}
                <Grid item xs={12}>
                    <Typography variant={'body'} textAlign="center" >
                        It covers an area of&nbsp;
                        {attempting || correct ?
                            <Link underline="none" color={correct ? 'success.main' : incorrect === valueFormatted ? 'error.main' : 'primary'}>
                                {valueFormatted}
                            </Link>
                            :
                            <Link color={incorrect ? 'error.main' : 'primary'}>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12} my={2} container spacing={2}
                    alignContent={"center"}
                    justifyContent={"center"}
                >
                    <Box sx={{
                        // Fix Slider left margin overflow bug
                        width: '100%',
                        marginLeft: 2
                    }}>
                        <Slider
                            value={value}
                            min={1}
                            step={1}
                            max={12}
                            scale={calculateValue}
                            getAriaValueText={formatValue}
                            valueLabelFormat={formatValue}
                            onChange={handleChange}
                            valueLabelDisplay={attempting ? "on" : "off"}
                            color={correct ? "success" : "primary"}
                        />
                    </Box>
                </Grid>
                <Grid item xs={12} alignContent={"flex-start"}>
                    {correct ?
                        <Fade in={correct}>
                            <Button variant="contained" color="success"
                                sx={{
                                    width: "100%",
                                }}
                            >
                                {valueFormatted}
                            </Button>
                        </Fade>
                        :
                        <Fade in={attempting}>
                            <Button variant="contained" color={incorrect === valueFormatted ? 'error' : 'primary'}
                                sx={{
                                    width: "100%",
                                }}
                                onClick={onPressGuess}
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