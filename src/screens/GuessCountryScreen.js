import React from "react";
import { Grid, Typography } from "@mui/material";
import Hearts from "../features/hearts/Hearts";
import { useDispatch } from 'react-redux';
import { decrementHearts } from "../features/hearts/heartsSlice";

export default function GuessCountryScreen() {

    const dispatch = useDispatch();

    return (
        <Grid container align="center"
            sx={{
                height: "100vh",
            }}
        >
            <Grid item xs={12}>
                <Typography variant="h4">
                    Title
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Hearts />
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4">
                    Guesses
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography variant="h4"
                    onClick={() =>
                        dispatch(decrementHearts())
                    }>
                    Enter
                </Typography>
            </Grid>
        </Grid>
    );
}