import { createSlice } from "@reduxjs/toolkit";
import countryStories from "../../data/CountryStories";

export const minLevel = 0;
export const maxLevel = countryStories[0]?.levels.length ?? 1;

const initialState = {
    value: minLevel,
    state: "idle",
}

export const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        decrementLevel: (state) => {
            if (state.value > minLevel) {
                state.value -= 1;
            }
        },
        incrementLevel: (state) => {
            if (state.value < 3) {
                state.value += 1;
            }
        },
    }
});

export const { decrementLevel, incrementLevel } = levelSlice.actions;

export const selectLevel = (state) => state.level.value;

export default levelSlice.reducer;