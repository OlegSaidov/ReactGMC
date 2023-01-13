import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const moviesApi = createApi({
  reducerPath: 'moviesAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/' }),
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => 'movies'
    }),

    getAllMoviesByLimit: builder.query({
      query: (limit) => `movies?limit=${limit}`
    }),

    getAllMoviesSortBy: builder.query({
      query: (field) => `movies?sortBy=${field}`
    }),

    getAllMoviesSortOrder: builder.query({
      query: (direction) => `moview?sortOrder=${direction}`
    }),

    getAllMoviesSearch: builder.query({
      query: (term) => `moview?search=${term}`
    }),

    getAllMoviesSearchBy: builder.query({
      query: (titleOrGenre) => `moview?sortOrder=${titleOrGenre}`
    }),

    getAllMoviesFilter: builder.query({
      query: (genre) => `moview?sortOrder=${genre}`
    })

  })
})

export const {
  useGetAllMoviesQuery,
  useGetAllMoviesByLimitQuery,
  useGetAllMoviesSortByQuery,
  useGetAllMoviesSortOrderQuery,
  useGetAllMoviesSearchQuery,
  useGetAllMoviesSearchByQuery,
  useGetAllMoviesFilterQuery
} = moviesApi
