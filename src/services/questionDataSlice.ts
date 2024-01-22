import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface QuestionListState {
  currentQuestion: number
  chosenAnswers: Record<string, ResultAnswers>
}

interface ChosenAnswer {
  questionId: number
  answer: ResultAnswers
}

interface ResultAnswers {
  chosenAnswer: string
  correctAnswer: string
}

const initialState: QuestionListState = {
  currentQuestion: 0,
  chosenAnswers: {}
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
    },
    saveAnswer: (state, { payload: { questionId, answer: { chosenAnswer, correctAnswer } } }: PayloadAction<ChosenAnswer>) => {
      state.chosenAnswers[questionId] = {
        chosenAnswer,
        correctAnswer
      }
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, saveAnswer } = questionDataSlice.actions

export default questionDataSlice.reducer
