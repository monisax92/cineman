import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import backupImg from '../assets/images/backup.jpg';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const MovieDetails = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchMovie () {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.REACT_APP_API_AUTH
        }
      };

      const resp = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options);
      const json = await resp.json();
      setMovie(json);
    }
    fetchMovie();
  }, [params.id])

  useDocumentTitle(movie.title);

   
  const poster = movie.poster_path ? `https://image.tmdb.org/t/p/original/${movie.poster_path}` : backupImg;
  const daysFromRelease = (new Date() - new Date(movie.release_date)) / 1000 / 60 / 60 / 24;
  const fullYearsFromRelease = Math.floor(daysFromRelease / 365);

  return (
    <main>
      <section className='flex justify-around flex-wrap py-5'>
        <div className='max-w-sm'>
          <img className="rounded" src={poster} alt={movie.title} />
        </div>

        <div className='max-w-xl text-gray-700 text-lg dark:text-white'>
          <h1 className="text-4xl font-bold my-3 text-center lg:text-left">
            {movie.title}
          </h1>
          <p className="my-4">
            {movie.overview}
          </p>
          { movie.genres ? (
            <p className='flex flex-wrap gap-2 my-7'>
              { movie.genres.map(genre => (
                <span className='mr-2 border border-gray-200 rounded dark:border-gray-600 p-2' key={genre.id}>{genre.name}</span>
              ))}
            </p>
            ) : ""}

          <div className="flex items-center">
              <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
              <p className="ms-2 text-gray-900 dark:text-white">{movie.vote_average ? `${movie.vote_average.toFixed(1)}/10` : ""}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-gray-900  dark:text-white">{movie.vote_count} reviews</span>
          </div>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Runtime:</span>
            <span>{ (movie.runtime / 60).toFixed(0) }h { movie.runtime % 60 }min.</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Budget:</span>
            <span> ${ movie.budget }</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Revenue:</span>
            <span> ${ movie.revenue }</span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>Release date:</span>
            <span> { movie.release_date } (
              {
                (daysFromRelease < 0) ?
                `in ${((-1)*daysFromRelease).toFixed(0)} days`:
                (daysFromRelease === 0) ?
                "today":
                (daysFromRelease < 365) 
                ? (Math.floor(daysFromRelease) === 0) ? "today" :
                `${daysFromRelease.toFixed(0)} day${daysFromRelease > 1 ? "s" : ""} ago` 
                : `over ${fullYearsFromRelease} year${fullYearsFromRelease > 1 ? "s" : ""} ago`
              }
              )
            </span>
          </p>

          <p className='my-4'>
            <span className='mr-2 font-bold'>IMDB code:</span>
            <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noreferrer" className='underline hover:no-underline'> 
            { movie.imdb_id }
            </a>
          </p>

        </div>
      </section>
    </main>
  )
}
