import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";

import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                >
                    <ShareIcon />
                </IconButton>
                <Grid container direction={"row"}>
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
                            Level 1
                        </Typography>
                    </Grid>
                </Grid>
                <IconButton
                    color="inherit"
                    edge="end"
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}