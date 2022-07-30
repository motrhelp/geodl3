import { Box } from "@mui/material";
import GuessCountryScreen from "./GuessCountryScreen";

export default function GameScreen() {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "450px",
                height: "900px",
            }}
        >
            <GuessCountryScreen />
        </Box >
    );
}