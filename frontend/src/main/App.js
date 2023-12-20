import './App.css';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import ArticleList from '../components/ArticleList';
import Header from './Header';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Header />
      <div class="container">
        <br></br>
        <h2 class="border-bottom border-dark">
          News for Today
        </h2>
        <br></br>
        <QueryClientProvider client={queryClient}>
          <ArticleList />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
