import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchCount } from './counterApi';

interface CounterState {
  countNum: number;
  status: string;
}

const initialState: CounterState = {
  countNum: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk('counter/fetchCount', async (amount: number) => {
  const response: any = await fetchCount(amount);
  return response.data;
});

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.countNum += 1;
    },
    decrement: (state) => {
      state.countNum -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.countNum += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.countNum += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
