import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    state: "idle",
}

export const countryGuessListSlice = createSlice({
    name: 'countryGuessList',
    initialState,
    reducers: {
        addCountryGuess: (state, action) => {
            state.value.push(action.payload);
        }
    }
});

export const { addCountryGuess } = countryGuessListSlice.actions;

export const selectCountryGuessList = (state) => state.countryGuessList.value;

export default countryGuessListSlice.reducer;