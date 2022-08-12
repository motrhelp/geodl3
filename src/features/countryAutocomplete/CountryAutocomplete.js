import { Autocomplete, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { countryList } from "../../data/CountryList";
import WrapperBox from "../../layout/WrapperBox";

export default function CountryAutocomplete() {

    const dispatch = useDispatch();

    return (
            <Autocomplete
                options={countryList.map(country => country.name)}
                renderInput={(params) => <TextField {...params} label="Country" />}
            />
    )
}