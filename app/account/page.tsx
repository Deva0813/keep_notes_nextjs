"use client";
import clsx from "clsx";
import { Ubuntu } from "next/font/google";
import { useState, useEffect } from "react";

const titlefont = Ubuntu({
    weight: ["700"],
    subsets: ["greek"],
});

export default function Account() {

    /// Account Info
    const [accInfo, setAccInfo] = useState({
        age: "",
        email: "",
        firstname: "",
        lastname: "",
        notes: [],
        password: "",
        ph_no: "",
        gender: "",
        username: "",
        _id: "",
    });


    //Account Info Visibility
    const [accInfoVisible, setAccInfoVisible] = useState(false);
    const [changePassVisible, setChangePassVisible] = useState(true);
    const [deleteAccVisible, setDeleteAccVisible] = useState(true);

    //Password Change
    const [oldpassword, setOldPassword] = useState("");
    const [newpassword, setNewPassword] = useState("");

    //Modal Visibility
    const [accInfoModalVisible, setAccInfoModalVisible] = useState("invisible");
    const [changePassModalVisible, setChangePassModalVisible] = useState("invisible");
    const [deleteAccModalVisible, setDeleteAccModalVisible] = useState("invisible");
    const [emailModalVisible, setEmailModalVisible] = useState("invisible");


    useEffect(() => {
        const accInfoBtn = document.getElementById("accInfoBtn");
        const changePassBtn = document.getElementById("changePassBtn");
        const deleteAccBtn = document.getElementById("deleteAccBtn");

        function addClass(element: HTMLElement | null) {
            element?.classList.add("bg-btn_add-800");
            element?.classList.add("text-white");
        }

        function removeClass(element: HTMLElement | null) {
            element?.classList.remove("bg-btn_add-800");
            element?.classList.remove("text-white");
        }

        function addDeleteClass(element: HTMLElement | null) {
            element?.classList.add("bg-red-600");
            element?.classList.add("text-white");
        }

        function removeDeleteClass(element: HTMLElement | null) {
            element?.classList.remove("bg-red-600");
            element?.classList.remove("text-white");
        }

        if (!accInfoVisible) {
            addClass(accInfoBtn);
            removeClass(changePassBtn);
            removeDeleteClass(deleteAccBtn);
        }
        if (!changePassVisible) {
            addClass(changePassBtn);
            removeClass(accInfoBtn);
            removeDeleteClass(deleteAccBtn);
        }
        if (!deleteAccVisible) {
            addDeleteClass(deleteAccBtn);
            removeClass(changePassBtn);
            removeClass(accInfoBtn);
        }

    }, [accInfoVisible, changePassVisible, deleteAccVisible]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setAccInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    useEffect(() => {

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
                _id: { "$oid": sessionStorage.getItem('userId') as string }
            }
        });

        fetch("/v1/action/findOne", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => setAccInfo(result.document))

    }, []);

    function updateAccInfo() {
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
                _id: { "$oid": sessionStorage.getItem('userId') as string }
            },
            "update": {
                "$set": {
                    age: accInfo.age,
                    firstname: accInfo.firstname,
                    lastname: accInfo.lastname,
                    ph_no: accInfo.ph_no,
                    username: accInfo.username,
                    gender: accInfo.gender,
                }
            }
        });

        fetch("/v1/action/updateOne", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => alert("Account Info Updated Successfully!"))

        setAccInfoModalVisible("invisible");
    }


    function validateEmail() {
        var email = accInfo.email;
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function updateEmailInfo() {
        if (validateEmail()) {
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
                    _id: { "$oid": sessionStorage.getItem('userId') as string }
                },
                "update": {
                    "$set": {
                        email: accInfo.email,
                    }
                }
            });

            fetch("/v1/action/updateOne", {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            })
                .then(response => response.json())
                .then(result => alert("Email Updated Successfully!"))
            setEmailModalVisible("invisible");
        } else {
            alert("Please enter a valid email address");
        }
    }

    function updatePasswordInfo() {
        if (oldpassword == accInfo.password && newpassword.length >= 8) {
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
                    _id: { "$oid": sessionStorage.getItem('userId') as string }
                },
                "update": {
                    "$set": {
                        password: newpassword,
                    }
                }
            });

            fetch("/v1/action/updateOne", {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            })
                .then(response => response.json())
                .then(result => alert("Password Updated Successfully!"))
            setChangePassModalVisible("invisible");
        }
        else {
           if (newpassword.length < 8) {
                alert("Password must be atleast 8 characters long");
            }
            else {
                alert("Old Password is incorrect!")
            }
        }
    }

    function deleteAccount() {

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
                _id: { "$oid": sessionStorage.getItem('userId') as string }
            },
        });

        fetch("/v1/action/deleteOne", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {
                alert("Account Deleted Successfully!");
                window.location.href = "/";
                window.sessionStorage.clear();
            })

        setDeleteAccModalVisible("invisible");

    }

    return (
        <div className="account_page">
            {/* MODAL ELEMENTS */}
            <div className={clsx("fixed min-w-full h-screen flex md:items-center justify-center z-20 bg-black/50 ", accInfoModalVisible)} >
                <div className="w-fit h-fit bg-white rounded-xl mt-5 md:mt-0 scale-90 md:scale-100 ">
                    <p className="p-3 px-5 border-b-2 border-slate-300 font-semibold text-slate-600">Confirm Profile</p>
                    <p className="p-3 px-5 text-sm text-slate-600 ">Are you sure you want to save your profile changes?</p>
                    <div className="flex justify-end p-5 ">
                        <button className="p-2 px-4 mr-2 bg-green-500 text-white hover:bg-green-600 rounded-lg pointer" onClick={updateAccInfo} >Save</button>
                        <button className="p-2 px-4 bg-slate-500 text-white hover:bg-slate-600 rounded-lg pointer" onClick={() => { setAccInfoModalVisible("invisible") }} >Cancel</button>
                    </div>
                </div>
            </div>

            <div className={clsx("fixed min-w-full h-screen flex md:items-center justify-center z-20 bg-black/50", emailModalVisible)} >
                <div className="w-fit h-fit bg-white rounded-xl mt-5 md:mt-0 scale-90 md:scale-100 ">
                    <p className="p-3 px-5 border-b-2 border-slate-300 font-semibold text-slate-600">Confirm Email</p>
                    <p className="p-3 px-5 text-sm text-slate-600 ">Are you sure you want to change your email?</p>
                    <div className="flex justify-end p-5 ">
                        <button className="p-2 px-4 mr-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg pointer" onClick={updateEmailInfo} >Change</button>
                        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 text-white rounded-lg pointer" onClick={() => { setEmailModalVisible("invisible") }} >Cancel</button>
                    </div>
                </div>
            </div>

            <div className={clsx("fixed min-w-full h-screen flex md:items-center justify-center z-20 bg-black/50", changePassModalVisible)} >
                <div className="w-fit h-fit bg-white rounded-xl mt-5 md:mt-0 scale-90 md:scale-100 ">
                    <p className="p-3 px-5 border-b-2 border-slate-300 font-semibold text-slate-600">Confirm Password Change</p>
                    <p className="p-3 px-5 text-sm text-slate-600 ">Are you sure you want to change your account password ?</p>
                    <div className="flex justify-end p-5 ">
                        <button className="p-2 px-4 mr-2 bg-green-500 hover:bg-green-600 text-white rounded-lg pointer" onClick={updatePasswordInfo} >Confirm</button>
                        <button className="p-2 px-4 bg-slate-500 hover:bg-slate-600 text-white rounded-lg pointer" onClick={() => { setChangePassModalVisible("invisible") }} >Cancel</button>
                    </div>
                </div>
            </div>

            <div className={clsx("fixed min-w-full h-screen flex md:items-center justify-center z-20 bg-black/50 ", deleteAccModalVisible)} >
                <div className="w-fit h-fit bg-white rounded-xl mt-5 md:mt-0 scale-90 md:scale-100 ">
                    <p className="p-3 px-5 border-b-2 border-slate-300 font-semibold text-slate-600">Confirm Delete</p>
                    <p className="p-3 px-5 text-sm text-slate-600 ">Are you sure you want to delete your account?</p>
                    <div className="flex justify-end p-5 ">
                        <button className="p-2 px-4 mr-2 bg-red-500 text-white hover:bg-red-600 rounded-lg pointer" onClick={deleteAccount} >Delete</button>
                        <button className="p-2 px-4 bg-slate-500 text-white hover:bg-slate-600 rounded-lg pointer" onClick={() => { setDeleteAccModalVisible("invisible") }} >Cancel</button>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="relative container-fluid min-h-body md:container md:mx-auto ">
                <div className=" absolute top-0 left-0 text-sm md:left-0 sub-title-txt p-3 px-4">
                    <p className="text-btn_add-600 ">
                        Homepage&nbsp;/&nbsp;
                        <span className=" text-btn_add-700 font-semibold ">
                            Account Settings
                        </span>{" "}
                    </p>
                </div>

                <div className="container-fluid p-4 pt-16">
                    <h1
                        className={clsx(
                            " text-2xl md:text-5xl text-btn_add-800 p-5 ",
                            titlefont.className
                        )}
                    >
                        Account Settings
                    </h1>

                    <div className="flex min-w-full flex-col md:flex-row md:pt-5 ">
                        <div className="w-auto">
                            <div className="flex gap-4 flex-col text-btn_add-800 items-center justify-center md:p-5 ">
                                <button
                                    id="accInfoBtn"
                                    className="pointer w-full md:w-60 p-3 hover:bg-btn_add-500 bg-btn_add-300 rounded-lg font-medium focus:bg-btn_add-800 focus:text-white transition-all ease-linear delay-100"
                                    onClick={() => {
                                        setAccInfoVisible(false);
                                        setChangePassVisible(true);
                                        setDeleteAccVisible(true);
                                    }}
                                >
                                    Account Info
                                </button>
                                <button
                                    id="changePassBtn"
                                    className="pointer w-full md:w-60 p-3  hover:bg-btn_add-500 bg-btn_add-300 rounded-lg font-medium focus:bg-btn_add-800 focus:text-white transition-all ease-linear delay-100 "
                                    onClick={() => {
                                        setAccInfoVisible(true);
                                        setChangePassVisible(false);
                                        setDeleteAccVisible(true);
                                    }}
                                >
                                    Change Password
                                </button>
                                <button
                                    id="deleteAccBtn"
                                    className="pointer w-full md:w-60 p-3  hover:bg-btn_add-500 bg-btn_add-300 rounded-lg font-medium focus:bg-red-600 focus:text-white transition-all ease-linear delay-100"
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
                        <div className="w-full " hidden={accInfoVisible}>
                            <div className="flex flex-col w-full my-5 md:m-5 p-10 bg-white border-2 border-btn_add-700 rounded-xl text-btn_add-800 ">
                                <h1 className="text-2xl font-extrabold w-full pb-2 border-b-2 border-btn_add-500 ">
                                    Account Information
                                </h1>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Personal Information
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5">
                                            This information will be displayed publicly so be careful
                                            what you share.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                First Name
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="text"
                                                name="firstname"
                                                onChange={handleChange}
                                                value={accInfo.firstname}
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                Last Name
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="text"
                                                name="lastname"
                                                onChange={handleChange}
                                                value={accInfo.lastname}
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">Age</label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="text"
                                                name="age"
                                                onChange={handleChange}
                                                value={accInfo.age}
                                                placeholder="Age"
                                            />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                Gender
                                            </label>
                                            <select
                                                className="border-2 default border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                name="gender"
                                                onChange={handleChange}
                                                value={accInfo.gender}
                                            >
                                                <option value="">Select Gender</option>
                                                <option value="Male">Male</option>
                                                <option value="Female">Female</option>
                                                <option value="Trans">Trans</option>
                                                <option value="Prefer not to say">
                                                    Prefer not to say
                                                </option>
                                            </select>
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                Phone Number
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="tel"
                                                name="ph_no"
                                                onChange={handleChange}
                                                value={accInfo.ph_no}
                                                placeholder="Phone Number"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="left-details flex flex-col xl:flex-row xl:pb-0  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5">
                                            This name is displayed publicly and is used to identify
                                            you.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                Username
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="text"
                                                name="username"
                                                onChange={handleChange}
                                                value={accInfo.username}
                                                placeholder="Username"
                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className=" md:pl-5 pt-3 border-b-2 border-btn_add-500 pb-5 ">
                                    <button className="bg-green-500 text-white rounded-md px-5 py-2 hover:bg-green-600 pointer " onClick={() => { setAccInfoModalVisible("visible") }} >
                                        Save Changes
                                    </button>
                                </div>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Mail Information
                                </div>

                                <div className="left-details flex flex-col xl:flex-row ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5">
                                            Email is used to verify your account and to send you
                                            notifications.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                Email
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                value={accInfo.email}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className=" md:pl-5 pt-3 ">
                                    <button className="bg-green-500 text-white rounded-md px-5 py-2 hover:bg-green-600 pointer " onClick={() => { setEmailModalVisible("visible") }} >
                                        Change Email
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* CHANGE PASSWORD */}
                        <div className="w-full" hidden={changePassVisible}>
                            <div className="flex flex-col w-full my-5 md:m-5 p-10 bg-white border-2 border-btn_add-700 rounded-xl text-btn_add-800 ">
                                <h1 className="text-2xl font-extrabold w-full pb-2 border-b-2 border-btn_add-500 ">
                                    Change Password
                                </h1>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Password Information
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5">
                                            Password must be at least 8 characters long.
                                        </p>
                                    </div>
                                    <div className="personal-info grid grid-flow-row gap-2 md:gap-0 md:grid-cols-2 w-full ">
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                Old Password
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="password"
                                                placeholder="Old Password"
                                                name="old_password"
                                                onChange={(e) => { setOldPassword(e.target.value) }}
                                            />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-full ">
                                            <label className="text-sm font-semibold pl-2 ">
                                                New Password
                                            </label>
                                            <input
                                                className="border-2 text-cursor border-btn_add-700 rounded-md p-2 focus:border-btn_add-800 focus:outline-none transition-all ease-in-out delay-150"
                                                type="password"
                                                name="password"
                                                onChange={(e) => { setNewPassword(e.target.value) }}
                                                min={8}
                                                placeholder="New Password"
                                            />
                                        </div>
                                        <div className="flex flex-col md:px-5 md:pt-5 gap-2 md:w-fit">
                                            <button onClick={() => { setChangePassModalVisible("visible") }} className=" rounded-md p-2 px-5 text-white hover:bg-green-600 bg-green-500 focus:outline-none pointer ">
                                                Change Password
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* DELETE ACCOUNT */}

                        <div className="w-full" hidden={deleteAccVisible}>
                            <div className="flex flex-col w-full my-5 md:m-5 p-10 bg-white border-2 border-btn_add-700 rounded-xl text-btn_add-800 ">
                                <h1 className="text-2xl font-extrabold w-full pb-2 border-b-2 border-btn_add-500 ">
                                    Delete Account
                                </h1>

                                <div className="text-lg pl-5 pt-3 font-semibold ">
                                    Delete Account
                                </div>

                                <div className="left-details flex flex-col xl:flex-row pb-5  ">
                                    <div className="w-full xl:w-1/3 py-5 ">
                                        <p className="text-sm px-5 xl:p-5">
                                            Deleting your account will remove all of your content from
                                            our servers permanently.
                                        </p>
                                    </div>
                                    <div className="personal-info flex w-full items-center justify-center">
                                        <div className="flex flex-col gap-2 md:w-fit ">
                                            <button className=" rounded-md p-2 px-5 hover:bg-red-600 bg-red-500 text-white pointer" onClick={() => { setDeleteAccModalVisible("visible") }} >
                                                Delete Account
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
