import './index.scss'
import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from './routes/App.jsx'
import AddMovie from "./routes/AddMovie/AddMovie.jsx";
import Credits from "./routes/Credits.jsx";
import {MovieResourceProvider} from "./context/MovieResourceContext.jsx";

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
    {
        path: '/credits',
        element: <Credits/>,
        errorElement: <ErrorPage/>
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <MovieResourceProvider>
            <RouterProvider router={router}/>
        </MovieResourceProvider>
    </StrictMode>
);