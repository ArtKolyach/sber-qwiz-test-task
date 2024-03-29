import { combineReducers, configureStore, } from '@reduxjs/toolkit'
import { reducer as questionsReducer, reducerPath, middleware, } from '../services/questions/questionsSlice'
import questionDataReducer from '../services/questionDataSlice'

const reducers = {
  [reducerPath]: questionsReducer,
  questionData: questionDataReducer,
}

const reducer = combineReducers(reducers,)

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware,) => [...getDefaultMiddleware(), middleware,],
},)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
