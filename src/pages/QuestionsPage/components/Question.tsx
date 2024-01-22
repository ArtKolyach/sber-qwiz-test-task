import React, { type FC } from 'react'
import { Answer } from './Answer'

export interface RawQuestions {
  response_code: number
  results: QuestionType[]
}
export interface QuestionType {
  type: string
  difficulty: string
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export const Question: FC<QuestionType> = ({
  difficulty,
  category,
  question,
  correct_answer,
  incorrect_answers
}) => {
  const allAnswers: string[] = [...incorrect_answers, correct_answer]

  const shuffledAnswers: string[] = allAnswers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return (
        <div>
            <h1>{question}</h1>
            <h2>{`${category} | ${difficulty}`}</h2>
          <ul>
            {shuffledAnswers.map(answer => <Answer key={answer} question={question}>{answer}</Answer>)}
          </ul>
        </div>
  )
}
