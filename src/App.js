import { AllRoutes } from './routes/AllRoutes';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App bg-gray-100 dark:bg-gray-800">
      <Header/>
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
