import React, { type FC, useCallback, useMemo, } from 'react'
import { PageWrapper, } from '../../components/PageWapper/PageWrapper'
import { useSelector, } from 'react-redux'
import { type RootState, } from '../../store/store'
import { useNavigate, } from 'react-router'
import {useGetAllQuestionsQuery, useLazyGetAllQuestionsQuery,} from '../../services/questions/questionsSlice'

export const FinalPage: FC = () => {
  const chosenAnswers = useSelector((state: RootState,) => state.questionData.chosenAnswers,)
  const { data, isLoading, } = useGetAllQuestionsQuery(3,)
  const navigate = useNavigate()

  const allQuestions = useMemo(() => {
    if (data !== undefined) {
      console.log(data,)
      return data.reduce((acc, curr,) => ({ ...acc, [curr.difficulty]: acc[curr.difficulty] + 1, })
        , {
          easy: 0,
          medium: 0,
          hard: 0,
        },)
    }
  }, [data, isLoading,],)

  const handleReturnClick = useCallback(() => {
    navigate('..',)
  }, [navigate,],)

  const answersStats = useMemo(() => {
    let stats = {
      easy: 0,
      medium: 0,
      hard: 0,
    }

    for (const answer in chosenAnswers) {
      const { chosenAnswer, correctAnswer, difficulty, } = chosenAnswers[answer]
      if (chosenAnswer === correctAnswer) {
        stats = {
          ...stats,
          [difficulty]: stats[difficulty] + 1,
        }
      }
    }

    return stats
  }, [chosenAnswers,],)

  return (
    <PageWrapper>
      { allQuestions !== undefined && (
        <>
          <p>Correct easy questions: {answersStats.easy}/{allQuestions.easy}</p>
          <p>Correct medium questions: {answersStats.medium}/{allQuestions.medium}</p>
          <p>Correct hard questions: {answersStats.hard}/{allQuestions.hard}</p>
        </>
      ) }
      <button onClick={handleReturnClick}>На главную</button>
    </PageWrapper>
  )
}
