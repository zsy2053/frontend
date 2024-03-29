import { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const getGoogleCred = (code, setStatus, navigate) => {
    axios({
        method: 'get',
        url: `${import.meta.env.VITE_API_URL}/api/bots/authorize_session?code=${code}`
    }).then((res) => {
        console.log(res);
        localStorage.setItem('googleCred', res.data.data);
        setStatus(true);
        navigate("/app");
    }).catch((err) => {
        window.alert(err.message);
        setStatus(false);
        console.log(err);
        // navigate(-1);
    });
}

const renderMessage = (isSuccess) => {
    if (isSuccess) {
        return "Google Signin Success!"

    } else {
        return "Google Signin Failed!";
    }
}

function GoogleSignInSuccess() {
    const [isSuccess, setStatus] = useState(false);
    const navigate = useNavigate()
    useEffect(() => {
        var urlParams = new URLSearchParams(window.location.search)
        const code = urlParams.get('code');
        console.log(code);
        getGoogleCred(code, setStatus, navigate);
    }, []);

    return (
        <div>
            {renderMessage(isSuccess)}
        </div>
    );
}

export default GoogleSignInSuccess
