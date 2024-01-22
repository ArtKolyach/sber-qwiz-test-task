import React, { useMemo, type FC } from 'react'
import { useGetAllQuestionsQuery } from '../../services/questions/questionsSlice'
import { Question } from './components/Question'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../app/store'
import { decrement, increment } from '../../services/questionDataSlice'
import { PageWrapper } from '../../components/PageWrapper'

export const QuestionsPage: FC = () => {
  const { data } = useGetAllQuestionsQuery(10)

  const dispatch = useDispatch()

  const currQuestionIndex = useSelector((state: RootState) => state.questionData.currentQuestion)
  const currQuestion = useMemo(() => {
    if (data !== undefined) {
      return data[currQuestionIndex]
    }
  }, [data, currQuestionIndex])

  const handleNextClick = (): void => {
    if (data !== undefined && currQuestionIndex < data?.length - 1) {
      dispatch(increment())
    }
  }

  const handlePrevClick = (): void => {
    if (currQuestionIndex > 0) {
      dispatch(decrement())
    }
  }

  return (
        <PageWrapper>
            {currQuestion !== undefined && data !== undefined && (
                  <>
                      <Question
                        {...currQuestion}
                      />
                      {currQuestionIndex !== 0 && (
                        <button onClick={handlePrevClick}>
                          Назад
                        </button>
                      )}
                      {currQuestionIndex !== data.length - 1 && (
                        <button onClick={handleNextClick}>
                          Далее
                        </button>
                      )}
                  </>
            )}
        </PageWrapper>
  )
}
