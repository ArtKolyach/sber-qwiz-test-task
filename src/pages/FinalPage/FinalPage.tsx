import React, { type FC, useCallback, useMemo } from 'react'
import { PageWrapper } from '../../components/PageWapper/PageWrapper'
import { useSelector } from 'react-redux'
import { type RootState } from '../../store/store'
import { useNavigate } from 'react-router'

export const FinalPage: FC = () => {
  const chosenAnswers = useSelector((state: RootState) => state.questionData.chosenAnswers)
  const navigate = useNavigate()

  const handleReturnClick = useCallback(() => {
    navigate('..')
  }, [navigate])

  const answersStats = useMemo(() => {
    let stats = {
      easy: 0,
      medium: 0,
      hard: 0
    }

    for (const answer in chosenAnswers) {
      const { chosenAnswer, correctAnswer, difficulty } = chosenAnswers[answer]
      if (chosenAnswer === correctAnswer) {
        stats = {
          ...stats,
          [difficulty]: stats[difficulty] + 1
        }
      }
    }

    return stats
  }, [chosenAnswers])

  return (
    <PageWrapper>
      <p>Correct easy questions: {answersStats.easy}</p>
      <p>Correct medium questions: {answersStats.medium}</p>
      <p>Correct hard questions: {answersStats.hard}</p>
      <button onClick={handleReturnClick}>На главную</button>
    </PageWrapper>
  )
}
