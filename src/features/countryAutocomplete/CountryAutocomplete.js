import { Autocomplete, Button, Grid, Popper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { countryList } from "../../data/CountryList";
import WrapperBox from "../../layout/WrapperBox";

export default function CountryAutocomplete() {

    const dispatch = useDispatch();

    const PopperMy = function (props) {
        return (<Popper {...props} placement='top' disablePortal={false} />)
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={9}>
                <Autocomplete
                    options={countryList.map(country => country.name)}
                    renderInput={(params) => <TextField {...params} label="Country" />}
                    PopperComponent={PopperMy}
                />
            </Grid>
            <Grid item xs={3}>
                <Button variant="contained" sx={{
                    height: '100%',
                    width: '100%',
                }}>
                    Guess
                </Button>
            </Grid>
        </Grid>
    )
}