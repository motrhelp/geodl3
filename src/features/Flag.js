import { Box, Grid, Paper } from "@mui/material";
import { countryList } from "../data/CountryList";
import WrapperBox from "../layout/WrapperBox";

export default function Flag() {
    return (
        <Paper elevation={3}
            component="img"
            src={"https://flagcdn.com/h240/sk.png"}
            sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                margin: "auto",
            }}
        />
    );
}