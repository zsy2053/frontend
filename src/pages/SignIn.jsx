import React, { useEffect } from "react";
import styles from "../style";
import { LandingNav } from "../components";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const googleLogin = (idToken, email, navigate) => {
    //get expiry_date 1 hour later
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + 60 * 60 * 1000); // Adding 1 hour (60 minutes * 60 seconds * 1000 milliseconds) to current time
    const isoString = futureDate.toISOString();

    const data = {
        "email": email,
        "token": idToken,
        "expiry_date": isoString,
    }
    axios({
        method: 'post',
        url: `${import.meta.env.VITE_API_URL}/api/users/google_sso`,
        data,
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => {
        localStorage.setItem('jwt', res.data['access_token']);
        localStorage.setItem('refresh', res.data['refresh_token']);
        if(localStorage.getItem('jwt')){
            navigate("/home");
        }
    }).catch((err) => {
        window.alert(err.message);
        console.log(err);
    });
}

function Sigin() {
    const navigate = useNavigate()
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`w-full xl:max-w-[1920px]`}>
                    <LandingNav />
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(/images/rock.svg)` }}
                className={
                    "bg-no-repeat bg-local lg:bg-[center_top_5rem] bg-[right_top_25rem] min-h-screen"
                }
            >
                <div className={`${styles.flexCenter}`}>
                    <div className="mx-[12px] rounded-[38px] h-[714px] w-[762px] max-h-[70vh] max-w-[762px] bg-white drop-shadow-lg mt-[10vh] flex flex-col justify-center items-center">
                        <div>
                            <p className="text-[30px] font-[600] text-[#1c1c1c] mb-[36px]">
                                Welcome to StyleUp
                            </p>

                            <GoogleLogin
                                onSuccess={(credentialResponse) => {
                                    googleLogin(credentialResponse.credential, jwt_decode(credentialResponse.credential)['email'], navigate);
                                }}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                                size="large"
                                width="300"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className={"mt-[100px] text-[14px] font-[400] text-[#555555] text-center"}
                >
                    By joining, you agree to our{" "}
                    <a href="/terms">
                        <u>Terms of Service</u>
                    </a> and{" "}
                    <a href="/privacy">
                        <u> Privacy Policy</u>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Sigin;
