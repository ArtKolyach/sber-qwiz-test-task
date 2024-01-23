import React, { type FC, } from 'react'
import {AnswerRadio, AnswerText, AnswerWrapper,} from './Answer.styles'
import {escapeHtml} from "../../../../utils/escapeSpecialCharacters";

interface AnswerType {
  questionText: string
  text: string
  onChange: (text: string) => void
  checked: boolean
}
export const Answer: FC<AnswerType> = ({ children, questionText, text, onChange, checked, },) => {
  const handleChange = (): void => {
    onChange(text,)
  }

  return (
        <AnswerWrapper>
            <AnswerRadio
                type={'radio'}
                name={escapeHtml(questionText)}
                id={text}
                onChange={handleChange}
                checked={checked}
            />
            <AnswerText>{children}</AnswerText>
        </AnswerWrapper>
  )
}
