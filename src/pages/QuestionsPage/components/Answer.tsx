import React, { type FC } from 'react'
import styled from 'styled-components'

interface AnswerType {
  question: string
}

export const Answer: FC<AnswerType> = ({ children, question }) => {
  const AnswerWrapper = styled.div`
      display: flex;
    `

  return (
        <AnswerWrapper className={'answer_wrapper'}>
            <input type={'radio'} name={question}/>
            <p>{children}</p>
        </AnswerWrapper>
  )
}
