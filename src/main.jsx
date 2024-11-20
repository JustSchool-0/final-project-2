import './index.scss'
import {createRoot} from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import App from './routes/App/App.jsx'
import Credits from "./routes/Credits.jsx";
import Favorites from "./routes/Favorites/Favorites.jsx";
import {StrictMode} from "react";
import Home from "./routes/Home.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/favorites',
                element: <Favorites/>
            },
        ]
    },
    {
        path: '/credits',
        element: <Credits/>,
        errorElement: <ErrorPage/>
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);