import React, { ReactElement, } from 'react'
import { render, screen, cleanup, } from '@testing-library/react'
import { MainPage, } from '../Main'
import { StartButton, } from '../MainPage.styles'

test('test', () => {
  render(<MainPage/>,)
  const startButton = screen.getAllByAltText('Старт',)
  expect(startButton,).toBe(1,)
},)
