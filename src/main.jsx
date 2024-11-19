import './index.scss'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from './routes/App/App.jsx'
import Credits from "./routes/Credits.jsx";
import Cat from "./routes/Cat/Cat.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/cat',
        element: <Cat/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/credits',
        element: <Credits/>,
        errorElement: <ErrorPage/>
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);