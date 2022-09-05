import { Avatar, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import React from "react";
import WrapperBox from "../../layout/WrapperBox";

import { selectCountryGuessList } from "./countryGuessListSlice";
import { useDispatch, useSelector } from "react-redux";

import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from "@mui/icons-material/NorthEast";
import EastIcon from "@mui/icons-material/East";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthIcon from '@mui/icons-material/South';
import SouthWestIcon from "@mui/icons-material/SouthWest";
import WestIcon from "@mui/icons-material/West";
import NorthWestIcon from "@mui/icons-material/NorthWest";
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import CheckIcon from '@mui/icons-material/Check';

function CountryGuessItem({ country, distance, code, direction, innerRef }) {

    const flag = "https://flagcdn.com/" + code?.toLowerCase() + ".svg";

    function directionToArrow(direction) {
        switch (direction) {
            case "N":
                return <NorthIcon fontSize="large" />;
            case "S":
                return <SouthIcon fontSize="large" />;
            case "E":
                return <EastIcon fontSize="large" />;
            case "W":
                return <WestIcon fontSize="large" />;
            case "NE":
                return <NorthEastIcon fontSize="large" />;
            case "SE":
                return <SouthEastIcon fontSize="large" />;
            case "NW":
                return <NorthWestIcon fontSize="large" />;
            case "SW":
                return <SouthWestIcon fontSize="large" />;
            case "Y":
                return <CheckIcon fontSize="large" />;
            default:
                return <QuestionMarkIcon fontSize="large" />;
        }
    }

    return (
        <ListItem
            secondaryAction={
                directionToArrow(direction)
            }
            ref={innerRef}
        >
            <ListItemAvatar>
                <Avatar src={flag} />
            </ListItemAvatar>
            <Grid container spacing={1} mr={2}>
                <Grid item xs={8}>
                    <ListItemText
                        primary={country}
                        align="center"
                    />
                </Grid>
                <Grid item xs={4}>
                    <ListItemText
                        align="center"
                        primary={distance + " km"}
                    />
                </Grid>
            </Grid>
        </ListItem >
    )
}

export default function CountryGuessList() {

    const countryGuessList = useSelector(selectCountryGuessList);

    // Create last item reference
    const lastItemRef = React.useRef();

    // Scroll to last item every time countryGuessList changes
    React.useEffect(() => {
        if (lastItemRef.current) {
            lastItemRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [countryGuessList]);

    return (
        <List
            sx={{
                width: "350px",
            }}>
            {[...countryGuessList].map((guess, index) => (
                <CountryGuessItem key={index}
                    country={guess.country}
                    distance={guess.distance}
                    direction={guess.direction}
                    code={guess.code}
                    innerRef={lastItemRef}
                />
            ))}
        </List>
    );
}