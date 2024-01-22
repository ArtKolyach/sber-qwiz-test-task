import React, { type FC } from 'react'
import styled from 'styled-components'
import backgroundImage = require('../assets/images/background.jpg')
import { Window } from './Window'

export const PageWrapper: FC = ({ children }) => {
  const Background = styled.div`
      width: 100vw;
      height: 100vh;
      background-color: greenyellow;
      padding: 0;
      margin: 0;
      background-image: url(${backgroundImage});
      background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    `

  return (
        <Background>
            <Window>
                {children}
            </Window>
        </Background>
  )
}
