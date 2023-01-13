import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { moviesApi } from './services/movies'

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    movie: movieReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware)
})

setupListeners(store.dispatch)
