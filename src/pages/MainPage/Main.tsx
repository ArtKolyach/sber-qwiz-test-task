import React, { type FC, } from 'react'
import { useNavigate, } from 'react-router'
import { PageWrapper, } from '../../components/PageWapper/PageWrapper'
import { StartButton, ButtonWrapper, } from './MainPage.styles'

export const MainPage: FC = () => {
  const navigate = useNavigate()

  const handleStartButtonClick = (): void => {
    navigate('questions',)
  }

  return (
      <PageWrapper>
        <ButtonWrapper>
          <StartButton
            onClick={handleStartButtonClick}
          >
            Старт
          </StartButton>
        </ButtonWrapper>
      </PageWrapper>
  )
}
