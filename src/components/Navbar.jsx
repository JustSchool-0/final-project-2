export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <button onClick={() => navigate('/')}>Home</button>
            <button onClick={() => navigate('/credits')}>Credits</button>
            <button onClick={() => navigate('/cat')}>Cat</button>
        </div>
    );
}

import {useNavigate} from "react-router-dom";