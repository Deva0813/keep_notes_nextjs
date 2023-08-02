'use client';
import clsx from "clsx";
import NavBarComp from "../components/NavBarComp/page";
import { Ubuntu } from "next/font/google";
import { useEffect, useState } from "react";

const loginTxt = Ubuntu({
  subsets: ['latin'],
  weight: ["700"],
})

export default function Login() {

  const [userdata, setUserData] = useState({} as any);

  useEffect(() => {
    if (userdata?._id !== undefined ) {
      window.sessionStorage.setItem('userId', userdata._id);
      window.sessionStorage.setItem('user', JSON.stringify(userdata));
      window.sessionStorage.setItem('logedIn', 'true');
      window.sessionStorage.setItem('email', userdata.email);
      window.sessionStorage.setItem('password', userdata.password);
      window.location.href = "/notes";
    }
    console.log(userdata);
  }, [userdata]);

  function login() {
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    console.log(email, password);

    try {

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Access-Control-Request-Headers", "*");
      myHeaders.append("api-key", process.env.API_KEY as string);
      myHeaders.append("Accept", "application/json");
      var raw = JSON.stringify({
        "dataSource": process.env.DATASOURCE as string,
        "database": process.env.DATABASE as string,
        "collection": "users",
        "filter": {
          "email": email,
          "password": password
        }
      });

      fetch("/v1/action/findOne", {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      })
        .then(response => response.json())
        .then(result => {
          if(result.document !== null){
            setUserData(result.document);
          }else{
            alert("Invalid email or password");
          }
        })

      console.log(userdata);

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <div>
      <NavBarComp />
      <div className=" relative container mx-auto min-h-body flex flex-col items-center justify-center ">
        <div className=" absolute top-0 left-[-50px] text-sm md:left-0 sub-title-txt p-3 px-4">
          <p className="text-btn_add-600" >Homepage&nbsp;/&nbsp;<span className="font-semibold text-btn_add-700 " >Login Page</span> </p>
        </div>
        <div className="w-96 mobile:scale-90 laptop:scale-100 h-auto rounded-lg border-2 border-btn_add-700 overflow-hidden ">
          <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-xl p-1 pr-2">
            <span className="absolute left-4 top-2 text-btn_add-800 font-semibold text-sm" >Login</span>
            <span className="pr-1 text-green-400">●</span>
            <span className="pr-1 text-blue-400 ">●</span>
            <span className="pr-1 text-red-400 ">●</span>
          </div>

          <div className="form flex items-center justify-center text-btn_add-800 text-lg font-mono font-semibold flex-col ">
            <div className="text-4xl p-4 pt-6">
              <span className={clsx("text-btn_add-800", loginTxt.className)}>Login</span>
            </div>
            <div className="">
              <label className="m-1 ml-2 pointer" htmlFor="email">Email</label><br />
              <input type="email" id="email" name="email" placeholder="Email" className=" text-cursor m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3" />
            </div>
            <div className="">
              <label className="m-1 ml-2 pointer" htmlFor="password">Password</label><br />
              <input type="password" id="password" name="password" placeholder="Password" className=" text-cursor m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3" />
            </div>

            <div className="flex items-center justify-center w-80 mt-5 mb-6">
              <button className="m-2 bg-btn_add-500 w-32 h-10 rounded-xl pointer hover:bg-btn_add-400" onClick={login} >Login</button>
              <button className="m-2 text-header_text bg-color1-500 w-32 h-10 rounded-xl pointer hover:bg-color1-400" onClick={() => { window.location.href = "/signup"; }} >Register</button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
