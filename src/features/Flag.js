import { Box, Grid, Paper } from "@mui/material";
import { useSelector } from "react-redux";
import { countryList } from "../data/CountryList";
import countryStories from "../data/CountryStories";
import WrapperBox from "../layout/WrapperBox";
import { gameNumber } from "./GameNumber";
import { selectLevel } from "./level/levelSlice";

export default function Flag() {

    const level = useSelector(selectLevel);
    
    const flagUrl = "https://flagcdn.com/h240/"
        // + countryStories[gameNumber].levels[level].code
        + "de"
        + ".png";

    return (
        <Paper elevation={3}
            component="img"
            src={flagUrl}
            sx={{
                maxWidth: '100%',
                maxHeight: "100%",
                display: "flex",
                margin: "auto",
            }}
        />
    );
}