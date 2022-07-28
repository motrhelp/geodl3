import { createSlice } from "@reduxjs/toolkit";

export const maxHearts = 6;

const initialState = {
    value: maxHearts,
    state: "idle",
}

export const heartsSlice = createSlice({
    name: 'hearts',
    initialState,
    reducers: {
        decrementHearts: (state) => {
            state.value -= 1;
        },
        resetHearts: (state) => {
            state.value = maxHearts;
        }
    }
});

export const { decrementHearts, resetHearts } = heartsSlice.actions;

export const selectHearts = (state) => state.hearts.value;

export default heartsSlice.reducer;