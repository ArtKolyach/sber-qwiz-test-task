import React, { type FC, } from 'react'
import styled from 'styled-components'

const WindowWrapper = styled.div`
    min-width: 700px;
      width: 40%;
      height: 50%;
      background-color: antiquewhite;
      border: 1px solid blue;
      display: flex;
      flex-direction: column;
    @media (max-width: 700px) {
      min-width: 200px;
      width: 95%;
  }
    `
const WindowTitle = styled.div`
  width: 100%;
  height: 30px;
  background-color: blue;
  color: white;
  padding: 5px 7px;
  box-sizing: border-box;
  font-weight: bold;
`

const WindowBody = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`

export const Window: FC = ({ children, },) => {
  return (
        <WindowWrapper>
            <WindowTitle>Oprosnik XP</WindowTitle>
            <WindowBody>{children}</WindowBody>
        </WindowWrapper>
  )
}
