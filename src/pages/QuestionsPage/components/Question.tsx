import React, { type FC } from 'react'
import { Answer } from './Answer/Answer'
import { type QuestionType } from '../../../services/questions/questionsSlice'

interface QuestionComponentProps extends Omit<QuestionType, 'incorrectAnswers' | 'correctAnswer' | 'type'> {
  onChange?: (answer: string) => void
  chosenAnswer?: string | null
}

export const Question: FC<QuestionComponentProps> = ({
  id,
  question,
  difficulty,
  category,
  shuffledAnswers,
  onChange,
  chosenAnswer
}) => {
  const handleChange = (text: string): void => {
    onChange?.(text)
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
