import React, { type FC } from 'react'
import { useNavigate } from 'react-router'
import { PageWrapper } from '../components/PageWapper/PageWrapper'

export const MainPage: FC = () => {
  const navigate = useNavigate()

  const handleStartButtonClick = (): void => {
    navigate('questions')
  }

  return (
      <PageWrapper>
          <button
              onClick={handleStartButtonClick}
          >
              Старт
          </button>
      </PageWrapper>
  )
}
