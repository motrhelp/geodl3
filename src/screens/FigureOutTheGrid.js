import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import WrapperBox from "../layout/WrapperBox";

export default function FigureOutTheGrid() {
    return (
        <Container maxWidth="xs">
            <Grid container spacing={1}
                direction="column"
                columns={20}
                sx={{
                    height: '100vh',
                }}
            >
                <Grid item xs={3}>
                    <WrapperBox>
                        <Typography variant="h5">
                            Header
                        </Typography>
                    </WrapperBox>
                </Grid>
                <Grid item xs={5}>
                    <WrapperBox>
                        <Typography variant="h5">
                            Flag
                        </Typography>
                    </WrapperBox>
                </Grid>
                <Grid item xs={6}>
                    <WrapperBox>
                        <Typography variant="h5">
                            Guesses
                        </Typography>
                    </WrapperBox>
                </Grid>
                <Grid item container xs={2} spacing={2}>
                    <Grid item xs={9}>
                        <WrapperBox>
                            <Typography variant="h5">
                                Input field
                            </Typography>
                        </WrapperBox>
                    </Grid>
                    <Grid item xs={3} >
                        <WrapperBox>
                            <Typography variant="h5">
                                Guess
                            </Typography>
                        </WrapperBox>
                    </Grid>
                </Grid>
                <Grid item xs={2}>
                    <WrapperBox>
                        <Typography variant="h5">
                            After text
                        </Typography>
                    </WrapperBox>
                </Grid>
            </Grid>
        </Container>
    )
}