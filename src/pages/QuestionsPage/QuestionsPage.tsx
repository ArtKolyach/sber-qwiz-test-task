import React, { type FC } from 'react'
import { useGetAllQuestionsQuery } from '../../services/questions/questionsSlice'
import { Question } from './components/Question'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../app/store'
import { decrement, increment } from '../../services/questionDataSlice'

export const QuestionsPage: FC = () => {
  const { data, isLoading } = useGetAllQuestionsQuery(10)
  console.log(data)

  const dispatch = useDispatch()
  const currQuestion = useSelector((state: RootState) => state.questionData.currentQuestion)
  const handleNextClick = (): void => {
    if (currQuestion < data.results.length - 1) dispatch(increment())
  }
  const handlePrevClick = (): void => {
    if (currQuestion > 0) dispatch(decrement())
  }

  return (
        <div>
            <div>
                { isLoading
                  ? null
                  : <Question
                            key={data.results[currQuestion].question}
                            type={data.results[currQuestion].type}
                            difficulty={data.results[currQuestion].difficulty}
                            category={data.results[currQuestion].category}
                            question={data.results[currQuestion].question}
                            correct_answer={data.results[currQuestion].correct_answer}
                            incorrect_answers={data.results[currQuestion].incorrect_answers}
                    />
                  }
            </div>
            <button onClick={handleNextClick}>Далее</button>
            <button onClick={handlePrevClick}>Назад</button>
        </div>
  )
}
