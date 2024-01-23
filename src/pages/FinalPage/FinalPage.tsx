import React, { type FC, useCallback, useMemo, } from 'react'
import { PageWrapper, } from '../../components/PageWapper/PageWrapper'
import { useSelector, } from 'react-redux'
import { type RootState, } from '../../store/store'
import { useNavigate, } from 'react-router'
import { useGetAllQuestionsQuery, } from '../../services/questions/questionsSlice'
import { QUESTIONS_AMOUNT, } from '../QuestionsPage/QuestionsPage'
import { StatTitle, } from './FinalPage.styles'

export const FinalPage: FC = () => {
  const chosenAnswers = useSelector((state: RootState,) => state.questionData.chosenAnswers,)
  const { data, isLoading, } = useGetAllQuestionsQuery(QUESTIONS_AMOUNT,)
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
          {allQuestions.easy !== 0 &&
            (<StatTitle>Correct easy questions: {answersStats.easy}/{allQuestions.easy}</StatTitle>)
          }
          {allQuestions.medium !== 0 &&
            (<StatTitle>Correct medium questions: {answersStats.medium}/{allQuestions.medium}</StatTitle>)
          }
          {allQuestions.hard !== 0 &&
            (<StatTitle>Correct hard questions: {answersStats.hard}/{allQuestions.hard}</StatTitle>)
          }
        </>
      ) }
      <button onClick={handleReturnClick}>На главную</button>
    </PageWrapper>
  )
}
