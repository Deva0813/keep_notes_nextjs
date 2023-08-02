"use client";
import clsx from "clsx";
import NavBarComp from "../components/NavBarComp/page";
import { Ubuntu } from "next/font/google";
import { useState ,useEffect} from "react";


const titlefont = Ubuntu(
    {
        weight: ["700"],
        subsets: ["greek"],
    }
)

export default function Account() {

    const [accInfoVisible, setAccInfoVisible] = useState(false);
    const [changePassVisible, setChangePassVisible] = useState(true);
    const [deleteAccVisible, setDeleteAccVisible] = useState(true);

    const [accInfo, setAccInfo] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gendere:"",
        ph_no:"",
        email: "",
        password: "",
        username: "",
    })

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setAccInfo(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    useEffect(() => {
        console.log(accInfo);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Request-Headers", "*");
        myHeaders.append("api-key", process.env.API_KEY as string);
        myHeaders.append("Accept", "application/json");

        var raw = JSON.stringify({
        "dataSource": process.env.DATASOURCE as string,
        "database": process.env.DATABASE as string,
        "collection": "users",
        });

        fetch("/v1/action/find", {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => console.log(result))


    }, [accInfo]);

    return (
        <div className="account_page">

            <NavBarComp />
            <div className="relative container-fluid min-h-body md:container md:mx-auto ">
                <div className=" absolute top-0 left-0 text-sm md:left-0 sub-title-txt p-3 px-4">
                    <p className="text-btn_add-600 " >Homepage&nbsp;/&nbsp;<span className=" text-btn_add-700 font-semibold " >Account Settings</span> </p>
                </div>

                <div className="container-fluid p-4 pt-16">
                    <h1 className={clsx(" text-2xl md:text-5xl text-btn_add-800 p-5 ", titlefont.className)} >Account Settings</h1>

                    <div className="flex min-w-full flex-col md:flex-row md:pt-5 ">
                        <div className="w-auto">
                            <div className="flex gap-4 flex-col text-btn_add-800 items-center justify-center md:p-5 ">
                                <button className="pointer w-full md:w-60 p-3 hover:bg-btn_add-500 bg-btn_add-300 rounded-lg font-medium focus:bg-btn_add-800 focus:text-white transition-all ease-linear delay-100" 
                                onClick={() => {
                                    setAccInfoVisible(false);
                                    setChangePassVisible(true);
                                    setDeleteAccVisible(true);
                                }}
                                >
                                    Account Info
                                </button>
                                <button className="pointer w-full md:w-60 p-3  hover:bg-btn_add-500 bg-btn_add-300 rounded-lg font-medium focus:bg-btn_add-800 focus:text-white transition-all ease-linear delay-100 "
                                onClick={() => {
                                    setAccInfoVisible(true);
                                    setChangePassVisible(false);
                                    setDeleteAccVisible(true);
                                }}
                                >
                                    Change Password
                                </button>
                                <button className="pointer w-full md:w-60 p-3  hover:bg-btn_add-500 bg-btn_add-300 rounded-lg font-medium focus:bg-red-600 focus:text-white transition-all ease-linear delay-100"
                                onClick={() => {
                                    setAccInfoVisible(true);
                                    setChangePassVisible(true);
                                    setDeleteAccVisible(false);
                                }}
                                >
                                    Delete Account
                                </button>
                            </div>
                        </div>

                        {/* ACCOUNT INFO */}
                        <div className="w-full " hidden={accInfoVisible} >
                            <div className="flex flex-col w-full my-5 md:m-5 p-10 bg-white border-2 border-btn_add-700 rounded-xl text-btn_add-800 ">
                                <h1 className="text-2xl font-extrabold w-full pb-2 border-b-2 border-btn_add-500 " >Account Information</h1>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Personal Information
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5" >
                                            This information will be displayed publicly so be careful what you share.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 " >First Name</label>
                                            <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="text" name="firstName" onChange={handleChange} placeholder="First Name" />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 " >Last Name</label>
                                            <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="text" name="lastName" onChange={handleChange} placeholder="Last Name" />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 " >Age</label>
                                            <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="text" name="age" onChange={handleChange} placeholder="Age" />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">Gender</label>
                                            <select className="border-2 default border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" name="gender"  onChange={handleChange}>
                                                <option value="Select Gender ">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Trans">Trans</option>
                                                <option value="Prefer not to say">Prefer not to say</option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 " >Phone Number</label>
                                            <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="tel" name="ph_no" onChange={handleChange} placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5 xl:pb-0 border-b-2 border-btn_add-500 ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5" >
                                            This name is displayed publicly and is used to identify you.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 " >Username</label>
                                            <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="text" name="username" onChange={handleChange} placeholder="Username" />
                                        </div>
                                    </div>
                                </div>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Mail Information
                                </div>

                                <div className="left-details flex flex-col xl:flex-row ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5" >
                                            Email is used to verify your account and to send you notifications.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 " >Email</label>
                                            <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="email" name="email" placeholder="Email"  onChange={handleChange}/>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className=" pl-5 pt-3 ">
                                    <button className="bg-green-500 text-white rounded-md px-5 py-2 hover:bg-green-600 pointer " >Save Changes</button>
                                </div>

                            </div>
                        </div>

                        {/* CHANGE PASSWORD */}
                        <div className="w-full" hidden={changePassVisible} >
                            <div className="flex flex-col w-full my-5 md:m-5 p-10 bg-white border-2 border-btn_add-700 rounded-xl text-btn_add-800 ">
                                <h1 className="text-2xl font-extrabold w-full pb-2 border-b-2 border-btn_add-500 " >Change Password</h1>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Password Information
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5" >
                                            Password must be at least 8 characters long.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                    <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                        <label className="text-sm font-semibold pl-2 " >Old Password</label>
                                        <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="password" placeholder="Old Password" />
                                    </div>
                                    <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                        <label className="text-sm font-semibold pl-2 " >New Password</label>
                                        <input className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150" type="password" name="password" onChange={handleChange} min={8} placeholder="New Password" />
                                    </div>
                                    <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-fit">
                                        <button className=" rounded-md p-2 px-5 text-white hover:bg-green-600 bg-green-500 focus:outline-none pointer " >Change Password</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/* DELETE ACCOUNT */}
                        
                        <div className="w-full" hidden={deleteAccVisible} >
                            <div className="flex flex-col w-full my-5 md:m-5 p-10 bg-white border-2 border-btn_add-700 rounded-xl text-btn_add-800 ">
                                <h1 className="text-2xl font-extrabold w-full pb-2 border-b-2 border-btn_add-500 " >Delete Account</h1>
                                
                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Delete Account
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5" >
                                            Deleting your account will remove all of your content from our servers permanently.
                                        </p>
                                    </div>
                                    <div className="personal-info flex w-full items-center justify-center">
                                        <div className="flex flex-col gap-2 md:w-fit ">
                                            <button className=" rounded-md p-2 px-5 hover:bg-red-600 bg-red-500 text-white pointer" >Delete Account</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
};