'use client'
import clsx from "clsx";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { useEffect, useState } from "react";


const title = Ubuntu({
  weight: ["500"],
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
    <header className=' z-20 container-fluid bg-header text-header_text min-h-header sticky top-0 '>
      <div className="container flex justify-between p-4 mx-auto text-lg">
        <h1 className={clsx(" font-bold text-2xl", title.className)} ><Link href={logedIn ? "/notes" : "/"} className="pointer">Keep Notes</Link></h1>
        <div className=" flex gap-5 font-semibold ">
          <button className=" hover:text-header_text/75 pointer" >About</button>
          <button className="pointer  hover:text-header_text/75" onClick={loginHandler} >{loginTxt}</button>
        </div>
      </div>
    </header>
  );

}
