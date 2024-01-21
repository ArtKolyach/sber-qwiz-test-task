import React, { type FC } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { MainPage } from './pages/Main'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'
import { QuestionsPage } from './pages/QuestionsPage/QuestionsPage'

const App: FC = () => {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='' element={<MainPage/>}/>
                  <Route path='/questions' element={<QuestionsPage/>}/>
              </Routes>
              <MainPage/>
          </BrowserRouter>
      </Provider>
  )
}

document.body.innerHTML = '<div id="root"></div>'
// eslint-disable-next-line react/no-deprecated
ReactDOM.render(<App />, document.querySelector('#root'))
