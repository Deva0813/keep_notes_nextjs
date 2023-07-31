'use client'
import clsx from "clsx";
import Link from "next/link";
import { Ubuntu } from "next/font/google";
import { useEffect,useState } from "react";


const title = Ubuntu({
  weight: ["500"],
  subsets: ['latin']
})

export default function NavBarComp() {

  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    if(sessionStorage.getItem("logedIn")){
      setLogedIn(true);
    }
  }, [])

  return (
    <header className=' z-20 container-fluid bg-header text-header_text min-h-header sticky top-0 '>
      <div className="container flex justify-between p-4 mx-auto text-lg">
        <h1 className={clsx(" font-bold text-2xl", title.className)} ><Link href={logedIn ? "/notes" : "/"} className="pointer">Keep Notes</Link></h1>
        <div className=" flex gap-5 font-semibold ">
          <Link href={"/about"} className=" hover:text-header_text/75 pointer" >About</Link>
          <Link href={"/login"} className="pointer" >Login</Link>
        </div>
      </div>
    </header>
  );

}
