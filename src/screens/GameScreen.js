import { Games } from "@mui/icons-material";
import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { persistor } from "../app/store";
import countryStories from "../data/CountryStories";
import { gameNumber } from "../features/GameNumber";
import Header from "../features/header/Header";
import { resetLastPlayed, selectLastPlayed } from "../features/lastPlayed/lastPlayedSlice";
import { selectLevel } from "../features/level/levelSlice";
import CountryStoryScreen from "./CountryStoryScreen";
import GuessCountryScreen from "./GuessCountryScreen";
import SizeSliderScreen from "./SizeSliderScreen";

export default function GameScreen() {

    const lastPlayed = useSelector(selectLastPlayed);
    const level = useSelector(selectLevel);
    const dispatch = useDispatch();

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
            {countryStories[0].levels[level - 1].type === "flag" ?
                <GuessCountryScreen />
                :
                countryStories[0].levels[level - 1].type === "textOptions" ?
                    <CountryStoryScreen />
                    :
                    countryStories[0].levels[level - 1].type === "sizeSlider" ?
                        <SizeSliderScreen />
                        :
                        <Header />

            }
        </Container>
    );
}