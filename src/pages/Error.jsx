import { useRouteError, Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import {
  LandingFooter,
  LandingNav,
} from "../components";
import styles from "../style";

export default function Error() {
  return (
    <div className='w-full overflow-hidden h-full'>
      <div className={`${styles.paddingX} flex justify-center`}>
        <div className={`flex-1 xl:max-w-[1920px]`}>
          <LandingNav />
        </div>
      </div>
      <div className='mt-52 mb-52 flex justify-center items-center px-4'>
        <div className={`w-full xl:max-w-[1920px]`}>
          <section id='description1' className={`flex sm:flex-row flex-col items-center w-full text-black justify-center`}>
            <div className='flex flex-col justify-center items-center'>
              <div className="text-purple-600 text-opacity-95 text-[80px] font-semibold text-center">404</div>
              <div class="max-w-[567px] text-neutral-600 text-[24px] font-medium mb-12">Oops! This page decided to go on vacation and didn't leave a forwarding address. While we track it down, you might want to check the URL or go back to the homepage.</div>
              <Link to='/'>
                <button className="bg-black text-white px-2 py-1 rounded-xl">Take me back</button>
              </Link>
            </div>
            <div className='lg:ml-[180px] ml-[45px] mt-4'>
              <img src='/images/404.png'></img>
            </div>
          </section>
        </div>
      </div>
      {/* footer */}
      <div className='w-full'>
        <LandingFooter />
      </div>
    </div>
  );
}
