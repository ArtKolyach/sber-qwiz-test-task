import React, { type FC, } from 'react'
import { Window, } from '../Window'
import { Background, } from './PageWrapper.styles'

export const PageWrapper: FC = ({ children, },) => {
  return (
        <Background>
            <Window>
                {children}
            </Window>
        </Background>
  )
}
