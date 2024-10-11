import { Routes, Route} from "react-router-dom";
import { MoviesList, MovieDetails, Search, PageNotFound } from "../pages";

import React from 'react'

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path="" element={<MoviesList api="movie/now_playing" title="Home"/>} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="movies/popular" element={<MoviesList api="movie/popular" title="Popular"/>} />
        <Route path="movies/top" element={<MoviesList api="movie/top_rated" title="Top rated"/>} />
        <Route path="movies/upcoming" element={<MoviesList api="movie/upcoming" title="Upcoming"/>} />
        <Route path="search" element={<Search />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </main>
  )
}

