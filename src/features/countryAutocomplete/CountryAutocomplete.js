import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { countryList } from "../../data/CountryList";

export default function CountryAutocomplete() {

    const dispatch = useDispatch();

    return (
        <Grid container
            direction="row"
            alignItems="center"
        >
            <Grid item xs={1} />
            <Grid item xs={7}>
                <Autocomplete
                    options={countryList.map(country => country.name)}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" size="large">Guess</Button>
            </Grid>
            <Grid item xs={1} />
        </Grid>
    )
}