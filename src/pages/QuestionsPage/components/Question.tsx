import React, { type FC, } from 'react'
import { Answer, } from './Answer/Answer'
import { type QuestionType, } from '../../../services/questions/questionsSlice'
import {
  QuestionTitle,
  QuestionSubtitle,
  QuestionWrapper,
  DifficultyWrapper,
  CategoryWrapper,
} from '../QuestionsPage.styles'

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
  chosenAnswer,
},) => {
  const handleChange = (text: string,): void => {
    onChange?.(text,)
  }

  return (
        <QuestionWrapper>
            <QuestionTitle>{question}</QuestionTitle>
          <QuestionSubtitle>
            <CategoryWrapper>
              {category}
            </CategoryWrapper>
            <DifficultyWrapper
              difficulty={difficulty}
            >
              {difficulty}
            </DifficultyWrapper>
          </QuestionSubtitle>
          <div>
            {shuffledAnswers.map((answer, index,) =>
                <Answer
                    key={answer}
                    questionText={question}
                    text={answer}
                    onChange={handleChange}
                    checked={chosenAnswer === answer}
                >
                    {answer}
                </Answer>,)}
          </div>
        </QuestionWrapper>
  )
}
