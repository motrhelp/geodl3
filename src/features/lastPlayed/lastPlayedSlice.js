import { createSlice } from "@reduxjs/toolkit";
import { gameNumber } from "../GameNumber";

const initialState = {
    value: gameNumber,
    state: "idle",
}

export const lastPlayedSlice = createSlice({
    name: 'lastPlayed',
    initialState,
    reducers: {
        resetLastPlayed: (state) => {
            state.value = gameNumber;
        }
    }
});

export const { resetLastPlayed } = lastPlayedSlice.actions;

export const selectLastPlayed = (state) => state.lastPlayed.value;

export default lastPlayedSlice.reducer;