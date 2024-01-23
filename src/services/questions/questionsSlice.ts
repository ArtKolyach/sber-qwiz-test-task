import { createApi, } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery, } from '../baseQuery'

export interface RawQuestionsResponse {
  response_code: number
  results: QuestionResponseType[]
}

export interface QuestionResponseType {
  type: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface QuestionType extends Omit<QuestionResponseType, 'correct_answer' | 'incorrect_answers'> {
  id: number
  shuffledAnswers: string[]
  incorrectAnswers: string[]
  correctAnswer: string
}

const shuffleAnswers = (incorrectAnswers: string[], correctAnswer: string,): string[] => {
  const answersAmount = incorrectAnswers.length + 1
  const random = Math.floor(Math.random() * answersAmount,)
  const shuffledArray = [...incorrectAnswers,]

  shuffledArray.splice(random, 0, correctAnswer,)

  return shuffledArray
}

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://opentdb.com/',
  },),
  endpoints (build,) {
    return {
      getAllQuestions: build.query<QuestionType[], number>({
        query: (amount: number,) => ({
          url: `api.php?amount=${amount}&type=multiple`,
          method: 'get',
        }),
        transformResponse: (response: RawQuestionsResponse,) =>
          response.results.map((curr, index,) => {
            return {
              ...curr,
              id: index,
              correctAnswer: curr.correct_answer,
              incorrectAnswers: curr.incorrect_answers,
              shuffledAnswers: shuffleAnswers(curr.incorrect_answers, curr.correct_answer,),
            }
          },),
      },),
    }
  },
},)

export const { useGetAllQuestionsQuery, reducer, reducerPath, middleware, useLazyGetAllQuestionsQuery, } = questionsApi
