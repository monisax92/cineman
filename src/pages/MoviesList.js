import { MovieCard } from '../components/MovieCard'
import { useFetch } from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const MoviesList = ({api, title}) => {

  const { data: movies } = useFetch(api);

  useDocumentTitle(title);

  return (
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-center xl:justify-start flex-wrap">
        {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </section> 
  )
}
