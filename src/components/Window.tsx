import React, { type FC } from 'react'
import styled from 'styled-components'

const WindowWrapper = styled.div`
    min-width: 500px;
      width: 40%;
      height: 50%;
      background-color: antiquewhite;
      border: 1px solid blue;
    `
const WindowTitle = styled.div`
  width: 100%;
  height: 30px;
  background-color: blue;
  color: white;
`

export const Window: FC = ({ children }) => {
  return (
        <WindowWrapper>
            <WindowTitle>Заголок</WindowTitle>
            <div>{children}</div>
        </WindowWrapper>
  )
}
