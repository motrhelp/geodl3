import { createSlice } from "@reduxjs/toolkit";

export const minLevel = 1;
export const maxLevel = 3;

const initialState = {
    value: minLevel,
    state: "idle",
}

export const levelSlice = createSlice({
    name: 'level',
    initialState,
    reducers: {
        decrementLevel: (state) => {
            if (state.value > 1) {
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