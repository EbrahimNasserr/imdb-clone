'use client'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://movies-api14.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('x-rapidapi-key', 'eace46c993msh2e9805e32aabfdcp1f556djsndc5e3c5e4446');
            headers.set('x-rapidapi-host', 'movies-api14.p.rapidapi.com');
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getMovies: builder.query({
            query: () => 'movies',
            transformResponse: (response) => response.movies, // Adjust based on actual response structure
        }),
        getMovieById: builder.query({
            query: (id) => `movie/${id}`,
        }),
        searchMovies: builder.query({
            query: (query) => `search?query=${query}`,
        }),
    }),
});

export const { useGetMoviesQuery, useGetMovieByIdQuery, useSearchMoviesQuery } = moviesApi;
export default moviesApi;
