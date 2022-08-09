import { Box } from "@mui/material";

export default function WrapperBox(props) {
    return (
        <Box sx={{
            height: '100%',
            border: '1px dashed grey',
        }}>
            {props.children}
        </Box>
    )
}