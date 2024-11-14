import './index.scss'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from './routes/App.jsx'
import AddMovie from "./routes/AddMovie/AddMovie.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>
    },
    {
        path: '/addmovie',
        element: <AddMovie/>,
        errorElement: <ErrorPage/>
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
);