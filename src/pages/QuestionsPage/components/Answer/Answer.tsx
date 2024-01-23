import React, { type FC, } from 'react'
import {AnswerRadio, AnswerWrapper,} from './Answer.styles'

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
                name={questionText}
                id={text}
                onChange={handleChange}
                checked={checked}
            />
            <label></label>
            <p>{children}</p>
        </AnswerWrapper>
  )
}
