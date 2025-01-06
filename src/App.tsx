import { QueryClient, QueryClientProvider } from 'react-query'
import './App.scss'
import { RouterProvider } from 'react-router-dom';
import router from './router/router';
import LoaderComponent from './core/shared/loader/loader.component';
import { useStore } from './store/store.config';

function App() {
  const queryClient = new QueryClient();
  const loader = useStore('loader')
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className='App'>
          <RouterProvider router={router} />
          {loader ? <LoaderComponent/> : null}
        </div>
      </QueryClientProvider>
    </>
  )
}

export default App
