import { Button, Fade, Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import countryStories from "../data/CountryStories";
import { gameNumber } from "../features/GameNumber";
import Header from "../features/header/Header";
import { selectLevel } from "../features/level/levelSlice";
import WrapperBox from "../layout/WrapperBox";

export default function CountryStoryScreen() {

    const level = useSelector(selectLevel);

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

    return (
        <React.Fragment>
            <Header />
            <Grid container spacing={5} mt={8}>
                {/* Header */}
                <Grid item xs={12}>
                    <Typography variant={'body'} textAlign="center">
                        {text}
                        {correct == null && highlighted == null ?
                            <Link>&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                            :
                            correct != null ?
                                <Link underline="none" color="success.main">
                                    {countryStoryLevel.options[correct]}
                                </Link>
                                :
                                <Link underline="none"
                                    color={incorrect == highlighted ? "error.main" : "primary"}>
                                    {countryStoryLevel.options[highlighted]}
                                </Link>
                        }
                    </Typography>
                </Grid>
                <Grid item xs={12} container spacing={2} alignContent={"center"} overflow="auto">
                    {countryStoryLevel.options.map((option, index) => (
                        <Grid item xs={12} key={index}>
                            <Button
                                variant={index == highlighted || index == incorrect || index == correct ? "contained" : "outlined"}
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
                <Grid item xs={12} alignContent={"flex-start"}>
                    {/* Confirm message  */}
                    <Fade in={highlighted != null && highlighted != incorrect} >
                        <Typography variant={'h6'} textAlign="center" color={"primary"}>
                            Press again to confirm
                        </Typography>
                    </Fade>

                    {/* Error message  */}
                    <Fade in={highlighted != null && highlighted == incorrect} >
                        <Typography variant={'h6'} textAlign="center" color={"error"}>
                            Wrong answer.
                        </Typography>
                    </Fade>
                    {incorrect != null && correct == null &&
                        <Fade in={incorrect != null && correct == null} timeout={3000}>
                            <Typography variant={'h6'} textAlign="center" color={"error"}>
                                Last try!
                            </Typography>
                        </Fade>
                    }

                    {/* Success message  */}
                    {correct != null &&
                        <Fade in={correct != null} >
                            <Typography variant={'h6'} textAlign="center" color={"success.main"}>
                                Well done!
                            </Typography>
                        </Fade>
                    }
                </Grid>
            </Grid >
        </React.Fragment>
    );
}