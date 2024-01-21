import React, { type FC } from 'react'
import { useGetAllQuestionsQuery } from '../../services/questions/questionsSlice'
import { Question, type QuestionType } from './components/Question'

export const QuestionsPage: FC = () => {
  const { data, isLoading } = useGetAllQuestionsQuery(10)
  console.log(data)

  return (
        <div>
          { isLoading
            ? null
            : data.results.map((question: QuestionType) =>
              <Question
                  key={question.question}
                  type={question.type}
                  difficulty={question.difficulty}
                  category={question.category}
                  question={question.question}
                  correct_answer={question.correct_answer}
                  incorrect_answers={question.incorrect_answers}
              />
            )}
        </div>
  )
}
