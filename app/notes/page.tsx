"use client";
import { useEffect, useState } from "react";
import NavBarComp from "../components/NavBarComp/page";
import { v4 as uuidv4 } from "uuid";

export default function NotesPage() {
  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
    content: "",
  });

  var newNote = {
    id: "",
    title: "",
    content: "",
    updated: "",
  };

  //------------------------------------------------ GET DATA FROM POCKETBASE DB----------------------------------------------------------------

  const [data, setData] = useState([] as any);
  const [refresher, setRefresher] = useState(false);

  useEffect(() => {
    setData([]);

    var count = 1;
    function getData() {
      try {
        
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Access-Control-Request-Headers", "*");
        myHeaders.append("api-key", process.env.API_KEY as string);
        myHeaders.append("Accept", "application/json");

        var raw = JSON.stringify({
          dataSource: process.env.DATASOURCE as string,
          database: process.env.DATABASE as string,
          collection: "users",
          filter: {
            _id: { $oid: sessionStorage.getItem("userId") as string },
          },
          projection: {
            notes: 1,
          },
        });

        fetch("/v1/action/find", {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        })
          .then((response) => response.json())
          .then((result) => setData(result.documents[0].notes));
      } catch (error) {}
    }

    if (count == 1) {
      getData();
      setRefresher(false);
      count--;
    }
  }, [refresher]);

  //----------------------------------------------------CRUD FUNCTIONS------------------------------------------------------------

  useEffect(() => {
    var element = document.querySelector(".big-note-cont");

    if (selectedNote.id != "") {
      element?.classList.remove("invisible");
    } else {
      element?.classList.add("invisible");
    }
  }, [selectedNote]);

  function handleSave() {

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
        "notes.id": selectedNote.id
      },
      "update": {
        "$set": {
          "notes.$.content": selectedNote.content,
          "notes.$.updated": new Date().toUTCString()
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
      .then(result => {setRefresher(true);})

    document.querySelector(".big-note-cont")?.classList.add("invisible");
  }

  function handleDelete() {
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
        "notes.id": selectedNote.id
      },
      "update": {
        "$pull": {
          "notes": {
            "id": selectedNote.id
          }
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
      .then(result => {setRefresher(true);})

    document.querySelector(".big-note-cont")?.classList.add("invisible");
    

  }

  function handleChanges(e: any) {
    setSelectedNote({
      id: selectedNote.id,
      title: selectedNote.title,
      content: e.target.value,
    });
  }

  function handleAddNote() {
    const form = document.querySelector("form") as HTMLFormElement;
    const formdata = new FormData(form);

    const title = formdata.get("title_in") as string;
    const content = formdata.get("content_in") as string;

    newNote = {
      id: uuidv4(),
      title: title,
      content: content,
      updated: new Date().toUTCString(),
    };

    form.reset();

    document.querySelector(".form-cont-div")?.classList.add("invisible");

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Request-Headers", "*");
    myHeaders.append("api-key", process.env.API_KEY as string);
    myHeaders.append("Accept", "application/json");

    var raw = JSON.stringify({
      dataSource: process.env.DATASOURCE as string,
      database: process.env.DATABASE as string,
      collection: "users",
      filter: {
        _id: { $oid: sessionStorage.getItem("userId") as string },
      },
      update: {
        $push: {
          notes: newNote,
        },
      },
    });

    fetch("/v1/action/updateOne", {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    })
      .then((response) => response.json())
      .then((result) => {setRefresher(true);});

  }

  //------------------------------------------------------END---------------------------------------------------------

  return (
    <div className="relative">
      <NavBarComp />

      <div className=" relative container min-h-body mx-auto pt-5 flex flex-col items-center">
        
        <div className=" absolute top-0 left-[-50px] text-sm md:left-0 sub-title-txt p-3 px-4">
          <p className="text-btn_add-600">
            Homepage&nbsp;/&nbsp;
            <span className=" text-btn_add-700 font-semibold ">
              Your Notes
            </span>{" "}
          </p>
        </div>
        <div className="grid grid-cols-1  pt-5 w-full mobile:relative tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
          {data.map((item: any) => (
            <button
              key={item.id}
              className="w-80 left-[-20px] md:left-[0px] laptop:left-5 pointer relative border-2 border-btn_add-700 h-56 rounded-lg m-5 mobile:m-3 overflow-hidden drop-shadow-md hover:drop-shadow-2xl transition-all delay-50 hover:top-1 ease-linear shadow-btn_add-600  "
              style={{ background: "#fff" }}
              onClick={() => {
                setSelectedNote({
                  id: item.id,
                  title: item.title,
                  content: item.content,
                });
              }}
            >
              <div className=" absolute top-0 bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-xl p-1 pr-2">
                <span className="absolute left-4 top-2 text-start text-btn_add-800 font-semibold text-sm overflow-hidden w-44 truncate">
                  {item.title}
                </span>
                <span className="pr-1">🎯</span>
              </div>
              <div className=" absolute top-8 px-1 py-2">
                <p className="text-btn_add-800 line-clamp-5 m-3 text-left">
                  {item.content}
                </p>
              </div>
              <div className="absolute text-right bottom-0 p-2 w-full text-xs ">
                <p>
                  Last Modified :{" "}
                  {item.updated.slice(0, item.updated.length - 13)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className=" big-note-cont fixed top-[3px] left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 invisible">
        <div className=" absolute top-0 h-screen flex items-center">
          <div
            className="lg:w-[600px] mobile:w-[350px] border-2 border-btn_add-700 max-h-full rounded-xl m-5 overflow-hidden drop-shadow-2xl shadow-black "
            style={{ background: "#F4F2DE" }}
          >
            <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-lg p-2 pr-3 h-11">
              <span className="absolute left-4 top-2 text-btn_add-800 text-start font-semibold lg:w-[400px] mobile:w-[200px] truncate">
                {selectedNote.title}
              </span>
              <span
                className="pr-1 pl-2 text-md pointer opacity-50 hover:opacity-100 "
                onClick={() => {
                  document
                    .querySelector(".big-note-cont")
                    ?.classList.add("invisible");
                }}
              >
                ❌
              </span>
            </div>
            <div className="px-1 py-2 flex flex-row items-center justify-center">
              <div className="p-2 m-3 bg-white rounded-lg border-2 border-btn_add-700 ">
                <textarea
                  rows={10}
                  className="text-cursor text-btn_add-800 m-3 lg:w-[500px] mobile:w-[270px] p-3 min-h-fit max-h-[500px] resize-none outline-none "
                  spellCheck="false"
                  value={selectedNote.content}
                  onChange={handleChanges}
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-end w-full px-5 pb-4 font-medium ">
              <button
                className="m-2 text-white bg-green-500 w-32 h-10 rounded-lg pointer hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                className="m-2 text-white bg-red-500 w-32 h-10 rounded-lg pointer hover:bg-red-600"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" form-cont-div absolute top-[3px] left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 invisible drop-shadow-2xl shadow-black  ">
        <div className="h-screen flex items-center">
          <div
            className="lg:w-[600px] mobile:w-[350px] border-2 border-btn_add-700 max-h-full rounded-xl m-5 overflow-hidden"
            style={{ background: "#F4F2DE" }}
          >
            <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-lg p-2 pr-3 h-11 " >
              <span className="absolute left-4 top-2 text-btn_add-800 text-start font-semibold lg:w-[400px] mobile:w-[200px] truncate">
                {" "}
                Add Notes{" "}
              </span>
              <span
                className="pr-1 pl-2 text-md pointer opacity-50 hover:opacity-100 "
                onClick={() => {
                  document
                    .querySelector(".form-cont-div")
                    ?.classList.add("invisible");
                }}
              >
                ❌
              </span>
            </div>

            <div className="px-1 py-2 flex flex-row items-center justify-center  ">
              <div className="p-2 m-3 w-full ">
                <form className="flex flex-col items-center justify-center ">
                  <label htmlFor=""></label>
                  <input
                    type="text"
                    name="title_in"
                    id="title_in"
                    className="text-cursor text-btn_add-800 m-3 sm:m-1 w-full p-3 min-h-fit max-h-[500px] resize-none outline-none border-2 border-btn_add-700 rounded-lg"
                    placeholder="Title"
                  />
                  <textarea
                    rows={10}
                    name="content_in"
                    id="content_in"
                    className="text-cursor md:mt-5 text-btn_add-800 m-3 sm:m-1 w-full p-3 min-h-fit max-h-[500px] resize-none outline-none border-2 border-btn_add-700 rounded-lg"
                    placeholder="Content"
                  ></textarea>
                </form>
                <div className=" flex flex-row w-full justify-end font-medium md:pt-3 ">
                  <button
                    className="m-2 text-white bg-green-500 w-32 h-10 rounded-lg pointer hover:bg-green-600"
                    onClick={handleAddNote}
                  >
                    Add
                  </button>
                  <button
                    className="m-2 text-white bg-red-500 w-32 h-10 rounded-lg pointer hover:bg-red-600"
                    onClick={() => {
                      document
                        .querySelector(".form-cont-div")
                        ?.classList.add("invisible");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="btn fixed bottom-5 right-5">
        <button
          className=" pointer bg-btn_add-500 w-btn_lg h-btn_lg rounded-full text-3xl hover:bg-btn_add-400"
          onClick={() => {
            document
              .querySelector(".form-cont-div")
              ?.classList.remove("invisible");
          }}
        >
          📃
        </button>
      </div>
    </div>
  );
}
