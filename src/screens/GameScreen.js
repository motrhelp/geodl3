import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../app/store";
import { gameNumber } from "../features/GameNumber";
import { resetLastPlayed, selectLastPlayed } from "../features/lastPlayed/lastPlayedSlice";
import GuessCountryScreen from "./GuessCountryScreen";

export default function GameScreen() {

    const lastPlayed = useSelector(selectLastPlayed);
    const dispatch = useDispatch();

    console.log("lastPlayed: ", lastPlayed);


    // On page load
    useEffect(() => {
        // Check if the user has played today
        if (lastPlayed != gameNumber) {
            // If not, purge the store and reload the page.
            persistor.purge();
            dispatch(resetLastPlayed());
            window.location.reload();
        }
    }, []);

    return (
        <Container maxWidth="xs">
            <GuessCountryScreen />
        </Container>
    );
}