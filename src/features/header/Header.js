import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIos from '@mui/icons-material/ArrowBackIos';
import { useDispatch, useSelector } from "react-redux";
import { decrementLevel, incrementLevel, maxLevel, minLevel, selectLevel } from "../level/levelSlice";
import WrapperBox from "../../layout/WrapperBox";

export default function Header() {

    const level = useSelector(selectLevel);
    const dispatch = useDispatch();

    return (
        <AppBar position="fixed">
            <Toolbar >
                <Grid container>
                    <Grid item container alignContent="center" xs={4}>
                        <Grid item xs={2}>
                            {level > minLevel ?
                                <IconButton
                                    color="inherit"
                                    edge="start"
                                    onClick={() => dispatch(decrementLevel())}
                                >
                                    <ArrowBackIos />
                                </IconButton>
                                : null}

                        </Grid>
                        <Grid item xs={2}>
                            <IconButton
                                color="inherit"
                            >
                                <ShareIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid item container xs={4}>
                        <Grid item xs={12}>
                            <Typography variant="h6" sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                            }}>
                                GEODLE
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                            }}>
                                Level {level}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} container alignContent="center" align={'right'}>
                        <Grid item xs={12}>
                            {level < maxLevel ?
                                <IconButton
                                    color="inherit"
                                    edge="end"
                                    onClick={() => dispatch(incrementLevel())}
                                    disabled={level >= maxLevel}
                                >
                                    <ArrowForwardIosIcon />
                                </IconButton>
                                : null}
                        </Grid>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar >
    )
}