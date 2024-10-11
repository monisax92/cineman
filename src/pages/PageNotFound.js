import { Link } from 'react-router-dom';
import PageNotFoundImg from '../assets/images/pageNotFound.png';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

export const PageNotFound = () => {

useDocumentTitle("Page Not Found");

  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-2'>
          <p className='text-7xl text-gray-700 font-bold my-8 dark:text-white'>404, Oops!</p>
          <div className="max-w-lg">
            <img className="rounded" src={PageNotFoundImg} alt="404 Page Not Found" />
          </div>
        </div>
        <div className='flex justify-center my-4'>
          <Link to="/">
            <button className='rounded-lg p-2 w-64 text-xl bg-gradient-to-r from-fuchsia-600 via-fuchsia-400 to-fuchsia-800 text-slate-100 font-bold uppercase hover:bg-gradient-to-l'>
              Back to Home
            </button>
          </Link>
        </div>
      </section>
    </main>
  )
}
