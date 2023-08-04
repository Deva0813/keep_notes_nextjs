'use client'
import clsx from "clsx";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { useEffect, useState } from "react";


const title = Ubuntu({
  weight: ["500","300","400","700"],
  subsets: ['latin']
})

export default function NavBarComp() {

  const [logedIn, setLogedIn] = useState(false);
  var loginTxt;

  useEffect(() => {
    if (sessionStorage.getItem("logedIn")) {
      setLogedIn(true);
    }
  }, []);

  if (logedIn) {
    loginTxt = "Logout";
  } else {
    loginTxt = "Login";
  };
  
  function loginHandler() {
    if (logedIn) {
      sessionStorage.clear();
      window.location.href = "/";
    } else {
      window.location.href = "/login";
    }
  };

  return (
    <header className=' z-20 container-fluid bg-header text-header_text min-h-header sticky top-0'>

      <div className="container flex flex-row mobile:mx-0 mobile:px-3 mobile:min-w-full sm:m-auto sm:p-4 sm:min-w-min justify-between mobile: items-center p-4 mx-auto text-lg sm:text-lg mobile:text-sm">
        <h1 className={clsx(" font-bold text-2xl ", title.className)} ><Link href={"/"} className="pointer">Keep Notes</Link></h1>

        <div className=" flex gap-0 font-semibold sm:gap-5 mobile:invisible sm:visible ">
          <button className=" hover:text-header_text/75 pointer" > <Link className="pointer" href={"/about"} >About</Link></button>
          <button><Link className="pointer  hover:text-header_text/75" href={logedIn?"/notes":"/login"} >Notes</Link></button>
          <button className=" hover:text-header_text/75 pointer"><Link className="pointer" href={logedIn?"/account":"/login"} >Account</Link></button>
          <button className="pointer  hover:text-header_text/75" onClick={loginHandler} >{loginTxt}</button>
        </div>

        {/* Toggel button */}
        <div className="flex sm:hidden">
          <button className="mobile:text-3xl" onClick={() => { document.querySelector(".mobile-nav")?.classList.toggle("hidden") }} >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mobile:h-8 mobile:w-8" fill="none" viewBox="0 0 24 24" stroke="#116A7B">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div> 
      {/* Mobile nav */}
        <div className="mobile-nav hidden sm:hidden ">
          <div className="flex flex-row justify-center gap-5 p-3 bg-header_text text-white text-sm font-normal ">
            <button className=" hover:text-white/75 pointer" onClick={()=>{window.location.href="/about"}} >About</button>
            <button><Link className="pointer  hover:text-white/75 " href={logedIn?"/notes":"/login"} >Notes</Link></button>
            <button className=" hover:text-white/75  pointer" onClick={()=>{window.location.href="/account"}} >Account</button>
            <button className="pointer  hover:text-white/75 5" onClick={loginHandler} >{loginTxt}</button>
          </div>
        </div>
    </header>
  );

}
