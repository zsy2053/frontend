import React, { useEffect } from "react";
import styles from "../style";
import { LandingNav } from "../components";
import { rock } from "../assets";
import { GoogleLogin } from "@react-oauth/google";

function Sigin() {
    return (
        <div className="w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`w-full xl:max-w-[1920px]`}>
                    <LandingNav />
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${rock})` }}
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
                                    console.log(credentialResponse);
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
