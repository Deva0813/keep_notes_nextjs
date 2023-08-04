'use client';
import clsx from "clsx";
import { Ubuntu } from "next/font/google";
import insertOne from "../hooks/usePost";

const loginTxt = Ubuntu({
  subsets: ['latin'],
  weight: ["700"],
})

export default function Signup() {

  async function signup() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("cpassword") as HTMLInputElement).value;

    if (validateEmail(email) === false) {
      alert("Invalid email");
      return;
    }


    if (password === "" || confirmPassword === "" || password.length < 8) {
      alert("Password should be atleast 8 characters long");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    } else {
      console.log(name, email, password);

          try {
            await insertOne({
              collection: "users",
              document: {
                username: name,
                email: email,
                password: password,
                notes: [],
                firstname: "",
                lastname: "",
                age: "",
                ph_no: "",
                gender: "",
              }
            })

          } catch (error) {
            console.error(error);
          }

          window.location.href = "/login";
      }

      }

  function validateEmail(email: string) {
          var re = /\S+@\S+\.\S+/;
          return re.test(email);
        }

  return (
        <div>
          <div className=" relative container mx-auto min-h-body flex flex-col items-center justify-center ">
            <div className=" absolute top-0 left-[-50px] text-sm md:left-0 sub-title-txt p-3 px-4">
              <p className="text-btn_add-600" >Homepage&nbsp;/&nbsp;<span className=" text-btn_add-700 font-semibold " >Signup Page</span> </p>
            </div>
            <div className="w-96 mobile:scale-90 laptop:scale-100 h-auto rounded-lg border-2 border-btn_add-700 overflow-hidden ">
              <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-xl p-1 pr-2">
                <span className="absolute left-4 top-2 text-btn_add-800 font-semibold text-sm" >Signup</span>
                <span className="pr-1 text-green-400">●</span>
                <span className="pr-1 text-blue-400 ">●</span>
                <span className="pr-1 text-red-400 ">●</span>
              </div>

              <div className="form flex items-center justify-center text-btn_add-800 text-lg font-mono font-semibold flex-col ">
                <div className="text-4xl p-4 pt-6">
                  <span className={clsx("text-btn_add-800", loginTxt.className)}>Sign up</span>
                </div>
                <div className="">
                  <label className="m-1 ml-2 pointer" htmlFor="name">Username</label><br />
                  <input type="text" id="name" name="name" className="m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor" />
                </div>
                <div className="">
                  <label className="m-1 ml-2 pointer" htmlFor="email">Email</label><br />
                  <input type="email" id="email" name="email" className="m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor" />
                </div>
                <div className="">
                  <label className="m-1 ml-2 pointer" htmlFor="password">Password</label><br />
                  <input type="password" id="password" name="password" className="m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor" />
                </div>
                <div className="">
                  <label className="m-1 ml-2 pointer" htmlFor="cpassword">Confirm Password</label><br />
                  <input type="password" id="cpassword" name="cpassword" className="m-1 h-10 w-80 border-2 border-btn_add-700 rounded-xl p-3 text-cursor" />
                </div>

                <div className="flex items-center justify-center w-80 mt-5 mb-6">
                  <button className="m-2 bg-green-400 w-32 h-10 rounded-xl pointer hover:bg-green-300" onClick={signup} >Register</button>
                  <button className="m-2 bg-btn_add-500 w-32 h-10 rounded-xl pointer hover:bg-btn_add-400" onClick={() => { window.location.href = "/login" }} >Login</button>
                </div>

              </div>

            </div>
          </div>
        </div>
      );
    }
