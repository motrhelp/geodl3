import { Box, Container } from "@mui/material";
import FigureOutTheGrid from "./FigureOutTheGrid";
import GuessCountryScreen from "./GuessCountryScreen";

export default function GameScreen() {
    return (
        <Container maxWidth="xs">
            <GuessCountryScreen />
        </Container>
    );
}