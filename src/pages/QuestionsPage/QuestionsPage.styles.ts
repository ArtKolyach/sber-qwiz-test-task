import styled from 'styled-components'

export const QuestionTitle = styled.h1`
  `

export const QuestionSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
  `

const colors = {
  easy: '#4caf50',
  medium: '#ff9800',
  hard: '#f44336',
}

export const DifficultyWrapper = styled.p<{ difficulty: 'easy' | 'medium' | 'hard' }>`
  background-color: ${(props,) => colors[props.difficulty]};
  color: white;
  border-radius: 20px;
  margin: 0 0 0 10px;
  padding: 2px 8px;
`

export const CategoryWrapper = styled.p`
  margin: 0;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  `

export const NavigationButton = styled.button`
  `

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  flex: 2;
`
