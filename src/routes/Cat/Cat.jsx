import Navbar from "../../components/Navbar.jsx";
import "./cat.scss";

export default function Cat() {
    return (
        <div className="container">
            <Navbar/>
            <h1>Cat</h1>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" alt="cat_image"/>
        </div>
    );
}