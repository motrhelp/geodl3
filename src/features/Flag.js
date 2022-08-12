import { Box, Grid, Paper } from "@mui/material";
import { countryList } from "../data/CountryList";
import WrapperBox from "../layout/WrapperBox";
import { gameNumber } from "./GameNumber";

export default function Flag() {

    console.log(countryList[gameNumber])

    const flagUrl = "https://flagcdn.com/h240/"
        + countryList[gameNumber].code.toLowerCase()
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