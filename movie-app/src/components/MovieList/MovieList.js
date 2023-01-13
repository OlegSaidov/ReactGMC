import React from 'react'
import { StyledMovieList } from './MovieList.styled'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllMoviesByLimitQuery } from '../app/services/movies'

function MovieList () {
  const dispatch = useDispatch()
  const movies = useSelector(state => state.movies)
  console.log('movies', movies)
  const { data, error, isLoading } = useGetAllMoviesByLimitQuery(20)

  console.log('data', data)
  console.log('error', error)
  console.log('isLoading', isLoading)

  return <StyledMovieList>

    </StyledMovieList>
}

export default MovieList
