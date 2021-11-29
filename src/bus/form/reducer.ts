// Core
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// Interfaces
import {IForm} from './interface';

declare global {
  type State<T> = { [key: string]: T };
}

const initialState: IForm = {
  text: '',
  price: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeValue(state: State<string>, action: PayloadAction<{ type: string, value: string }>) {
      const {type, value} = action.payload;
      state[type] = value;
    },
    clearForm(state) {
      state.text = '';
      state.price = '';
    }
  }
});

export const {clearForm, changeValue} = formSlice.actions;
export default formSlice.reducer;
