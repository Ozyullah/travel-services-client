import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Home from '../Pages/SharedPages/HomePage/Home';
import Services from '../Pages/SharedPages/ServicesPage/Services/Services';
import ServicesDetails from '../Pages/SharedPages/ServicesPage/ServicesDetails/ServicesDetails';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: () =>fetch('http://localhost:5000/systems')
            },
            {
                path:'/services',
                element:<Services></Services>,
                loader:()=>fetch('http://localhost:5000/services')
            },
            {
                path:'/services/:id',
                element:<ServicesDetails></ServicesDetails>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])


export default router;