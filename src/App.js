import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './RouterPage/FairRouter';


function App() {
  return (
    <div className="">
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </div>
  );
}

export default App;