"use client";
import clsx from "clsx";
import { Ubuntu } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import devaPic from "../../public/dev.png";
import whatsapp from "../../public/whatsappIcon.png"
import fb from "../../public/facebookIcon.png"
import insta from "../../public/instagramIcon.png"
import linkedin from "../../public/linkedinIcon.png"
import github from "../../public/githubIcon.png"

import nextjs from "../../public/next.svg"
import tailwind from "../../public/tailwindcss.png"
import mongodb from "../../public/MongoDB_Logo.png"
import node from "../../public/node.png"

import { useState } from "react";
import insertOne from "../hooks/usePost";

const titlefont = Ubuntu({
    weight: ["700"],
    subsets: ["greek"],
});


export default function AboutPage() {



    //useState messageData
    const [messageData, setMessageData] = useState({
        collection: "messages",
        document: {
            name: "",
            email: "",
            message: "",
        },
    });
    
    //update messageData
    const updateMessageData = (e: any) => {
        setMessageData(
            (prev) => ({
                ...prev,
                document: {
                    ...prev.document,
                    [e.target.name]: e.target.value,
                },
            })
        );
    };

    //useInsertOne
    const postMessage = async ()=>{

        try {
            // await insertOne(messageData)
            // alert("Message Sent Successfully")

            sessionStorage.setItem("messageData", JSON.stringify(messageData))

        } catch (error) {
            console.log(error)
        }
        
    }

    return (
        <div className="about_page ">

            <div className=" relative container-fluid md:container md:m-auto min-h-body">
                <div className=" absolute top-0 left-0 text-sm md:left-0 sub-title-txt p-3 px-4">
                    <p className="text-btn_add-600 ">
                        Homepage&nbsp;/&nbsp;
                        <span className=" text-btn_add-700 font-semibold ">
                            About
                        </span>{" "}
                    </p>
                </div>

                <div className="container-fluid p-4 pt-16">
                    <h1 className={clsx(" text-2xl md:text-5xl text-btn_add-800 p-5 ", titlefont.className)}>
                        About Page
                    </h1>
                </div>

                <div className="container-fluid p-4 ">
                    <div className="flex flex-col xl:flex-row ">
                        <div className="xl:w-[65%] text-justify px-5 text-btn_add-800">
                            <b className="text-lg" >👋 Hey there ,</b><br />
                            <p className="leading-7 py-5 md:p-5" >
                                <span className="px-5"></span> I&apos;m Deva, and I&apos;m super excited to introduce you to my very first app - the Keep Notes App! 🚀 As a fresh developer, I&apos;ve poured my heart and soul into creating this app using some cool technologies like Next.js, Tailwind and MongoDB. You know how it is - we all have those lightbulb moments, brilliant ideas, and important to-do&apos;s that we just can&apos;t afford to forget. That&apos;s where Keep Notes App comes to the rescue. It&apos;s simple, it&apos;s easy, and it&apos;s here to make your life a bit more organized. <br />
                            </p>
                            <b className="text-lg" >📝 What&apos;s Inside:</b> <br />
                            <div className="leading-7 py-5 md:p-5 " >
                                <b>🎯Next.js Magic : </b> <br /> <p className="md:px-5 pb-3" >I&apos;ve used Next.js to build the foundation of this app. It&apos;s like the secret sauce that makes everything smooth and snappy. So when you&apos;re jotting down your thoughts, you can expect a fast and seamless experience.</p>

                                <b>🎯MongoDB Wizardry :</b> <br /> <p className="md:px-5 pb-3" >Ever heard of MongoDB? It&apos;s where all your notes hang out. This powerful technology ensures that your notes are safe and sound, just a click away whenever you need them.</p>

                                <b>🎯Looks Do Matter :</b> <br /> <p className="md:px-5 pb-3" >I believe in simplicity. That&apos;s why I&apos;ve kept the design clean and easy on the eyes. No distractions, just you and your thoughts. And hey, you can even play around with different themes to make it your own!</p>

                                <b>🎯Cloudy with a Chance of Notes :</b> <br /> <p className="md:px-5 pb-5" >Imagine this - your laptop suddenly decides to take a break, but no worries, your notes are safe in the cloud! With our cloud sync feature, your notes are like superheroes, ready to jump in and save the day.</p>
                                <p>
                                <span className="px-5"></span>I&apos;m still learning the ropes of this whole coding thing, but I&apos;m super proud of what the Keep Notes App has become. It&apos;s not just an app; it&apos;s a little piece of my coding journey.
                                    So, if you&apos;re a fellow developer exploring GitHub, feel free to check out the Keep Notes App. Clone it, fork it, break it (hopefully not too much), and let&apos;s learn and grow together!
                                    <br />
                                    <br />
                                    <b>
                                        Stay curious,<br />
                                        Deva
                                    </b>

                                </p>
                            </div>
                        </div>
                        <div className="xl:w-[35%] flex flex-col justify-start items-center text-btn_add-800  p-10 pt-3 pb-0 lg:pt-10">
                            <div className="details_card min-w-[400px] scale-[.85] md:scale-100 flex flex-row items-center h-fit p-5 bg-[#A27C68] text-white rounded-[15px]">
                                <div className="w-[80%]">
                                    <p className="font-semibold text-lg" >About me :</p>
                                    <div className="text-xs font-semibold p-2 pt-4 " >
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>&nbsp;:&nbsp;</td>
                                                    <td className=" font-light" >Devanand</td>
                                                </tr>
                                                <tr>
                                                    <td>Age</td>
                                                    <td>&nbsp;:&nbsp;</td>
                                                    <td className=" font-light" >21</td>
                                                </tr>
                                                <tr>
                                                    <td>Qualification</td>
                                                    <td>&nbsp;:&nbsp;</td>
                                                    <td className=" font-light" >B.E. CSE</td>
                                                </tr>
                                                <tr>
                                                    <td className="align-top" >Skills</td>
                                                    <td className="align-top" >&nbsp;:&nbsp;</td>
                                                    <td className=" font-light" >Full Stack developer, Graphics Designer,A.I/M.L, etc,. </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="img">
                                    <Image src={devaPic} alt="devaPic" width={100} className="rounded-[50%] mr-6 " />
                                </div>
                            </div>
                            <div className="w-full flex p-5 flex-col items-center ">
                                <p className=" text-lg font-semibold " >Also connect with me in ,</p>
                                <div className="grid grid-cols-5 gap-6 lg:gap-10 pt-6 lg:py-6">
                                    <Link href="https://wa.me/919176204928" target="_blank" passHref={true} className="pointer hover:scale-110 hover:drop-shadow-lg hover:brightness-125 "><Image src={whatsapp} alt="whatsapp" width={40} /></Link>
                                    <Link href="https://www.facebook.com/epichunter.deva" target="_blank" passHref={true} className="pointer hover:scale-110 hover:drop-shadow-lg hover:brightness-125"><Image src={fb} alt="fb" width={40} /></Link>
                                    <Link href="https://www.instagram.com/epic.dev/" target="_blank" passHref={true} className="pointer hover:scale-110 hover:drop-shadow-lg hover:brightness-125"><Image src={insta} alt="insta" width={40} /></Link>
                                    <Link href="https://www.linkedin.com/in/devanand-m-9a22351b3/" target="_blank" passHref={true} className="pointer hover:scale-110 hover:drop-shadow-lg hover:brightness-125"><Image src={linkedin} alt="linkedin" width={40} /></Link>
                                    <Link href="https://github.com/Deva0813" target="_blank" passHref={true} className="pointer hover:scale-110 hover:drop-shadow-lg hover:brightness-125"><Image src={github} alt="github" width={40} /></Link>
                                </div>
                            </div>

                            <div className="details_card w-full min-w-[400px] scale-[.85] md:scale-100 flex flex-col items-center h-fit text-btn_add-800 border-2 border-btn_add-800 rounded-[15px] overflow-hidden ">
                                <div className="w-full flex flex-row justify-between border-b-2 px-5 py-2 font-semibold border-btn_add-800 bg-btn_add-500 ">
                                    <p>Contact me</p>
                                    <p className=" text-sm pt-[2px] drop-shadow-md " >🟢🟡🔴</p>
                                </div>
                                <div className="w-full p-5 bg-btn_add-200 ">
                                    <table className="w-full" >
                                        <tbody>
                                            <tr>
                                                <td className="font-semibold" >
                                                    Name
                                                </td>
                                                <td className="p-2" >
                                                    <input type="text" className="border-2 border-btn_add-700 rounded-lg w-full p-1 px-3 " placeholder="Your Name" id="name" name="name" onChange={updateMessageData} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-semibold" >
                                                    Email
                                                </td>
                                                <td className="p-2" >
                                                    <input type="email" className="border-2 border-btn_add-700 rounded-lg w-full p-1 px-3 " placeholder="Enter Email" id="email" name="email" onChange={updateMessageData} />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="font-semibold py-2" >
                                                    Message
                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                    <textarea name="message" id="message" placeholder="Your Message" rows={10} className="border-2 w-full border-btn_add-700 rounded-lg p-1 px-3 mt-2" onChange={updateMessageData} ></textarea>
                                    <button className="p-1 px-4 bg-btn_add-500 hover:bg-green-600 border-2 border-btn_add-700 scale-90 hover:scale-100 hover:drop-shadow-md font-medium text-btn_add-800 hover:text-white text-lg m-2 rounded-lg " onClick={postMessage} >Send</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                
                <div className="container-fluid lg:pt-20 pb-20 flex flex-col items-center justify-center ">
                    <div className="flex flex-col justify-center items-center">
                        <p className=" text-2xl lg:text-5xl font-semibold text-btn_add-800" >Tech Stack</p>
                    </div>
                    <div className="flex flex-wrap xl:flex-row pt-10 w-3/4 justify-center items-center gap-2 lg:gap-10">
                        <Image src={nextjs} alt="nextjs" height={50} className="scale-75 lg:scale-100" />
                        <Image src={mongodb} alt="mongodb" height={80} className="scale-75 lg:scale-100 " />
                        <Image src={node} alt="node" height={70} className="scale-75 lg:scale-100 " />
                        <Image src={tailwind} alt="tailwind" height={80} className="scale-75 lg:scale-100 " />
                    </div>
                </div>

            </div>
        </div>
    );
}

