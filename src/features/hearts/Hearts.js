import { Grid } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from "react-redux";
import { maxHearts, selectHearts, resetHearts } from "./heartsSlice";

export default function Hearts() {

    const hearts = useSelector(selectHearts);
    const dispatch = useDispatch();

    return (
        <Grid container>
            <Grid item xs={3}
            />
            {[...Array(hearts)].map((_, index) => (
                <Grid item xs={1} key={index}>
                    <FavoriteIcon />
                </Grid>
            ))}
            {[...Array(maxHearts - hearts)].map((_, index) => (
                <Grid item xs={1} key={index}>
                    <FavoriteBorderIcon
                        onClick={() =>
                            dispatch(resetHearts())
                        } />
                </Grid>
            ))}
            <Grid item xs={3} />
        </Grid>
    );
}