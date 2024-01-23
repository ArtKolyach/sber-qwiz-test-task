import type { PayloadAction } from '@reduxjs/toolkit';
interface ResultAnswers {
    chosenAnswer?: string | null;
    correctAnswer: string;
    difficulty: 'easy' | 'medium' | 'hard';
}
export interface QuestionListState {
    currentQuestion: number;
    chosenAnswers: Record<string, ResultAnswers>;
}
interface ChosenAnswer {
    questionId: number;
    answer: ResultAnswers;
}
export declare const questionDataSlice: import("@reduxjs/toolkit").Slice<QuestionListState, {
    increment: (state: import("immer/dist/internal").WritableDraft<QuestionListState>) => void;
    decrement: (state: import("immer/dist/internal").WritableDraft<QuestionListState>) => void;
    incrementByAmount: (state: import("immer/dist/internal").WritableDraft<QuestionListState>, action: PayloadAction<number>) => void;
    saveAnswer: (state: import("immer/dist/internal").WritableDraft<QuestionListState>, { payload: { questionId, answer: { chosenAnswer, correctAnswer, difficulty, }, }, }: PayloadAction<ChosenAnswer>) => void;
}, "questionData">;
export declare const increment: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"questionData/increment">, decrement: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<"questionData/decrement">, saveAnswer: import("@reduxjs/toolkit").ActionCreatorWithPayload<ChosenAnswer, "questionData/saveAnswer">;
declare const _default: import("redux").Reducer<QuestionListState>;
export default _default;
