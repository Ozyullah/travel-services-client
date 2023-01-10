import { createBrowserRouter } from 'react-router-dom';
import Main from '../LayOut/Main';
import Login from '../Pages/SecurityPage/LoginPage/Login';
import SignIn from '../Pages/SecurityPage/SignInPage/SignIn';
import Home from '../Pages/SharedPages/HomePage/Home';
import Myreview from '../Pages/SharedPages/ReviewSector/Reviewer/PersonReiew/Myreview';
import Review from '../Pages/SharedPages/ReviewSector/Reviewer/Review';
import Services from '../Pages/SharedPages/ServicesPage/Services/Services';
import ServicesDetails from '../Pages/SharedPages/ServicesPage/ServicesDetails/ServicesDetails';
import ProtectRouter from './ProtectRouter';

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
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/review/:id',
                element:<Review></Review>,
                loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/myreview',
                element:<ProtectRouter><Myreview></Myreview></ProtectRouter>
            }
        ]
    }
])


export default router;