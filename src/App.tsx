import React, { type FC, } from 'react'
import ReactDOM from 'react-dom'
import { Provider, } from 'react-redux'
import { store, } from './store/store'
import { MainPage, } from './pages/MainPage/Main'
import {
  HashRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { QuestionsPage, } from './pages/QuestionsPage/QuestionsPage'
import { FinalPage, } from './pages/FinalPage/FinalPage'
import { createGlobalStyle, } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App: FC = () => {
  return (
      <Provider store={store}>
        <GlobalStyle/>
          <HashRouter>
              <Routes>
                <Route path='' element={<MainPage/>}/>
                <Route path='/questions' element={<QuestionsPage/>}/>
                <Route path='/final' element={<FinalPage/>}/>
              </Routes>
          </HashRouter>
      </Provider>
  )
}

document.body.innerHTML = '<div id="root"></div>'
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.querySelector('#root',),)
