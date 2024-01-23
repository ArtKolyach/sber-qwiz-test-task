import React, { useMemo, type FC, useCallback, } from 'react'
import { useGetAllQuestionsQuery, } from '../../services/questions/questionsSlice'
import { Question, } from './components/Question'
import { useDispatch, useSelector, } from 'react-redux'
import { type RootState, } from '../../store/store'
import { decrement, increment, saveAnswer as saveAnswerToStore, } from '../../services/questionDataSlice'
import { PageWrapper, } from '../../components/PageWapper/PageWrapper'
import { useNavigate, } from 'react-router'

const QUESTIONS_AMOUNT = 3

export const QuestionsPage: FC = () => {
  const { data, } = useGetAllQuestionsQuery(QUESTIONS_AMOUNT,)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currQuestionIndex = useSelector((state: RootState,) => state.questionData.currentQuestion,)
  const chosenAnswer = useSelector((state: RootState,) => {
    if (state.questionData.chosenAnswers[currQuestionIndex] !== undefined) {
      return state.questionData.chosenAnswers[currQuestionIndex].chosenAnswer
    }
  },)

  const currQuestion = useMemo(() => {
    if (data !== undefined) {
      return data[currQuestionIndex]
    }
  }, [data, currQuestionIndex,],)

  const handleAnswerChange = useCallback((chosenAnswer: string,) => {
    if (currQuestion !== undefined) {
      dispatch(saveAnswerToStore({
        questionId: currQuestion.id,
        answer: {
          chosenAnswer,
          correctAnswer: currQuestion.correctAnswer,
          difficulty: currQuestion.difficulty,
        },
      },),)
    }
  }, [currQuestion,],)

  const handleNextClick = (): void => {
    if (data !== undefined && currQuestionIndex < data?.length - 1) {
      dispatch(increment(),)
    }
  }

  const handlePrevClick = (): void => {
    if (currQuestionIndex > 0) {
      dispatch(decrement(),)
    }
  }

  const handleEndClick = (): void => {
    navigate('../final',)
  }

  return (
        <PageWrapper>
            {currQuestion !== undefined && data !== undefined && (
                  <>
                      <Question
                        {...currQuestion}
                        onChange={handleAnswerChange}
                        chosenAnswer={chosenAnswer}
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
                    {currQuestionIndex === data.length - 1 && (
                      <button onClick={handleEndClick}>
                        Завершить
                      </button>
                    )}
                  </>
            )}
        </PageWrapper>
  )
}
