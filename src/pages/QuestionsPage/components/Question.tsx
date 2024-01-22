import React, { type FC } from 'react'
import { Answer } from './Answer/Answer'
import { type QuestionType } from '../../../services/questions/questionsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../../app/store'
import { saveAnswer } from '../../../services/questionDataSlice'

interface QuestionComponentProps extends Omit<QuestionType, 'incorrectAnswers' | 'type'> {}

export const Question: FC<QuestionComponentProps> = ({
  id,
  question,
  difficulty,
  category,
  shuffledAnswers,
  correctAnswer
}) => {
  const chosenAnswer = useSelector((state: RootState) => state.questionData.chosenAnswers[id]?.chosenAnswer)
  const dispatch = useDispatch()

  const handleChange = (text: string): void => {
    dispatch(saveAnswer({
      questionId: id,
      answer: {
        chosenAnswer: text,
        correctAnswer
      }
    }))
  }

  return (
        <div>
            <h1>{question}</h1>
            <h2>{`${category} | ${difficulty}`}</h2>
          <ul>
            {shuffledAnswers.map((answer, index) =>
                <Answer
                    key={answer}
                    questionText={question}
                    text={answer}
                    onChange={handleChange}
                    checked={chosenAnswer === answer}
                >
                    {answer}
                </Answer>)}
          </ul>
        </div>
  )
}
