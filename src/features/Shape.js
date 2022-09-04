import { Paper } from "@mui/material";

import image from "../data/shapes/de/vector.svg"
import shapes from "../data/shapes/Shapes";

export default function Shape() {

    const code = "th";
    const shapeFilename = shapes.get(code);

    return (
        <Paper elevation={0}
            component="img"
            src={shapeFilename.default}
            sx={{
                maxWidth: '100%',
                maxHeight: "100%",
                display: "flex",
                margin: "auto",
            }}
        />
    );
}