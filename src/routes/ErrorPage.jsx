import {useRouteError} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar.jsx";

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <Navbar/>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </>
    );
}