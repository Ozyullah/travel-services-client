import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Header from '../Pages/FixedPages/HeaderPage/Header';

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Header></Header>
            }
        ]
    }
])