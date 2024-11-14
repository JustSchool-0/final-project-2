import {useNavigate} from "react-router-dom";

export default function Credits() {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>Back</button>
            <h1>Credits</h1>
            <p>My cat wrote all of this. I take no credit.</p>
        </div>
    );
}