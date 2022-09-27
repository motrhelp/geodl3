import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
    state: "idle",
}

export const countryVictorySlice = createSlice({
    name: 'countryVictory',
    initialState,
    reducers: {
        registerCountryVictory: (state) => {
            state.value = true;
        }
    }
});

export const { registerCountryVictory } = countryVictorySlice.actions;

export const selectCountryVictory = (state) => state.countryVictory.value;

export default countryVictorySlice.reducer;