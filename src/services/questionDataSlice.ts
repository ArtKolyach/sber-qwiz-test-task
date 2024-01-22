import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QuestionListState {
  currentQuestion: number
}

const initialState: QuestionListState = {
  currentQuestion: 0
}

export const questionDataSlice = createSlice({
  name: 'questionData',
  initialState,
  reducers: {
    increment: (state) => {
      state.currentQuestion += 1
    },
    decrement: (state) => {
      state.currentQuestion -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.currentQuestion += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = questionDataSlice.actions

export default questionDataSlice.reducer
