import React, { ReactElement, } from 'react'
import { render, screen, cleanup, } from '@testing-library/react'
import { AnswerWrapper, AnswerRadio, } from '../components/Answer/Answer.styles'

test('test AnswerWrapper', () => {
  render(<AnswerWrapper data-testid='1'/>,)
  const wrapper = screen.getAllByTestId('1',)
  expect(wrapper,).toContain(<AnswerRadio/>,)
},)
