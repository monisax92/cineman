import { useSearchParams } from 'react-router-dom';
import { MovieCard } from '../components/MovieCard';
import { useFetch } from '../hooks/useFetch';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const Search = ({api}) => {

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data: movies } = useFetch(api, queryTerm);

  useDocumentTitle(`Search results for '${queryTerm}'`);

  return (
    <main>
      <section>
        <p className="text-3xl tezt-gray-700 dark:text-white py-7 px-4">
          {movies.length === 0 ? `No results found for '${queryTerm}'` : `Results for '${queryTerm}':`}
        </p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-center lg:justify-start flex-wrap">
        {
        movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie}/>
        ))}
      </div>
    </section> 
    </main>
  )
}

