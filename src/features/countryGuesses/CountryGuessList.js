import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import WrapperBox from "../../layout/WrapperBox";
import SouthEastIcon from '@mui/icons-material/SouthEast';
function CountryGuessItem({ country, distance, code }) {

    const flag = "https://flagcdn.com/" + code + ".svg";

    return (
        <ListItem
            secondaryAction={
                <SouthEastIcon fontSize="large" />
            }
        >
            <ListItemAvatar>
                <Avatar src={flag} />
            </ListItemAvatar>
            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <ListItemText
                        primary={country}
                        align="center"
                    />
                </Grid>
                <Grid item xs={4}>
                    <ListItemText
                        align="center"
                        primary={distance}
                    />
                </Grid>
            </Grid>
        </ListItem >
    )
}

export default function CountryGuessList() {
    return (
        <List>
            <CountryGuessItem country={"Slovakia"} code="sk" distance="0 km" />
            <CountryGuessItem country={"South Sudan"} code="ss" distance="2500 km" />
            <CountryGuessItem country={"USA"} code="us" distance="155 km" />
            <CountryGuessItem country={"Saint Vincent and the Grenadines"} code="vc" distance="20000 km" />
            <CountryGuessItem country={"South Africa"} code="za" distance="1 km" />
        </List>
    );
}