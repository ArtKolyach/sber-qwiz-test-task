import { createApi } from '@reduxjs/toolkit/query/react'
import { axiosBaseQuery } from '../baseQuery'

export const questionsApi = createApi({
  reducerPath: 'questionsApi',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://opentdb.com/'
  }),
  endpoints (build) {
    return {
      getAllQuestions: build.query({
        query: (amount: number) => ({
          url: `api.php?amount=${amount}&type=multiple`,
          method: 'get'
        })
      })
    }
  }
})

export const { useGetAllQuestionsQuery, reducer, reducerPath, middleware } = questionsApi
