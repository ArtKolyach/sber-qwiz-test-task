import React, { type FC } from 'react'
import { useNavigate } from 'react-router'

export const MainPage: FC = () => {
  const navigate = useNavigate()

  const handleStartButtonClick = (): void => {
    navigate('../questions')
  }

  return (
        <button
            onClick={handleStartButtonClick}
        >
          Старт
        </button>
  )
}
