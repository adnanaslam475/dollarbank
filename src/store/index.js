import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { stepper: 0, value: 0 };
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        handleNext(state) {
            state.stepper++;
        },
        handlerBack(state) {
            state.stepper--;
        },
        sliderValue(state, action) {
            state.value = action.payload;
        }
    }
})


const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})
export const counterAction = counterSlice.actions;
export default store;