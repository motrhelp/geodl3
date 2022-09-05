import { Paper } from "@mui/material";
import { countryList } from "../data/CountryList";

import image from "../data/shapes/de/vector.svg"
import shapes from "../data/shapes/Shapes";
import { gameNumber } from "./GameNumber";

export default function Shape() {

    const shapeFilename = shapes.get(countryList[gameNumber].code.toLowerCase());

    return (
        <Paper elevation={0}
            component="img"
            src={shapeFilename.default}
            sx={{
                width: '300px',
                display: "flex",
                margin: "auto",
            }}
        />
    );
}