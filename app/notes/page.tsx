"use client";
import { useEffect, useState } from "react";
import NavBarComp from "../components/NavBarComp/page";
import { v4 as uuidv4, v4 } from "uuid";
import PocketBase from "pocketbase";

const pb = new PocketBase('http://127.0.0.1:8090');

type dataNote = {
  collectionId: string,
  collectionName: string,
  content: string,
  created: string,
  id: string,
  title: string,
  updated: string,
  user: string,
}

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
    date: "",
    lastUpdate: "",
  };

  var date = new Date().toUTCString();
  var date_time = date.slice(0, date.length - 4);

  //----------------------------------------------------------------------------------------------------------------

  const [data, setData] = useState <dataNote[]> ([]);
  
  useEffect(() => {
    async function getData() {
      var userId :string = sessionStorage.getItem('userId') as string;
      const resultList = await pb.collection('keep_notes_data').getFullList({
        filter: 'user = "' +userId+ '"'
      });
      resultList.forEach((item) => {
        setData((prev) => [
          ...prev,
          {
            collectionId: item.collectionId,
            collectionName: item.collectionName,
            content: item.content,
            created: item.created,
            id: item.id,
            title: item.title,
            updated: item.updated,
            user: item.user,
          },
        ]);
      }
      );
    }
    getData();
  }, []);

  
  //----------------------------------------------------------------------------------------------------------------

  useEffect(() => {

    var element = document.querySelector(".big-note-cont");

    if (selectedNote.id != "") {
      element?.classList.remove("invisible");
    } else {
      element?.classList.add("invisible");
    }

  }, [selectedNote]);


  function handleSave() {
    console.log(selectedNote.id);
    console.log(selectedNote.content);
  };

  function handleDelete() {
    console.log(selectedNote.id);
  };

  function handleChanges(e: any) {
    setSelectedNote({
      id: selectedNote.id,
      title: selectedNote.title,
      content: e.target.value,
    });
  };

  async function handleAddNote() {
    const form = document.querySelector("form") as HTMLFormElement;
    const formdata = new FormData(form);

    const title = formdata.get("title_in") as string;
    const content = formdata.get("content_in") as string;

    newNote = {
      id: uuidv4(),
      title: title,
      content: content,
      date: date_time,
      lastUpdate: new Date().toUTCString().slice(0, date.length - 4),
    };

    form.reset();

    document.querySelector(".form-cont-div")?.classList.add("invisible");

    

  }

  //----------------------------------------------------------------------------------------------------------------

  return (
    <div className="relative">
      <NavBarComp />

      <div className="container min-h-body mx-auto pt-5 flex flex-col items-center">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
          {data.map((item) => (
            <button key={item.id} className="w-80 pointer relative border-2 border-btn_add-700 h-56 rounded-lg m-5 overflow-hidden" style={{ background: "#F4F2DE" }} onClick={
              () => {
                setSelectedNote({
                  id: item.id,
                  title: item.title,
                  content: item.content,
                });
              }
            }>
              <div className=" absolute top-0 bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-xl p-1 pr-2">
                <span className="absolute left-4 top-2 text-start text-btn_add-800 font-semibold text-sm overflow-hidden w-44 truncate" >{item.title}</span>
                <span className="pr-1">🎯</span>
              </div>
              <div className=" absolute top-8 px-1 py-2">
                <p className="text-btn_add-800 line-clamp-6 m-3 text-left">{item.content}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className=" big-note-cont absolute top-[3px] left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 invisible" >
        <div className="lg:w-[600px] mobile:w-[350px] border-2 border-btn_add-700 max-h-full rounded-xl m-5 overflow-hidden" style={{ background: "#F4F2DE" }}>
          <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-lg p-2 pr-3 h-11">
            <span className="absolute left-4 top-2 text-btn_add-800 text-start font-semibold lg:w-[400px] mobile:w-[200px] truncate" >{selectedNote.title}</span>
            <span className="pr-1 text-md pointer opacity-70 hover:opacity-100 " onClick={() => { document.querySelector(".big-note-cont")?.classList.add("invisible") }} >❌</span>
          </div>
          <div className="px-1 py-2 flex flex-row items-center justify-center">
            <div className="p-2 m-3 bg-white rounded-lg border-2 border-btn_add-700 ">
              <textarea rows={10} className="text-cursor text-btn_add-800 m-3 lg:w-[500px] mobile:w-[270px] p-3 min-h-fit max-h-[500px] resize-none outline-none " spellCheck="false" defaultValue={selectedNote.content} onChange={handleChanges} ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-end w-full px-5 pb-4 font-semibold ">
            <button className="m-2 text-green-900 bg-green-300 w-32 h-10 rounded-xl pointer hover:bg-green-200" onClick={handleSave} >Save</button>
            <button className="m-2 text-red-900 bg-red-300 w-32 h-10 rounded-xl pointer hover:bg-red-200" onClick={handleDelete} >Delete</button>
          </div>
        </div>
      </div>


      <div className=" form-cont-div absolute top-[3px] left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 invisible " >
        <div className="lg:w-[600px] mobile:w-[350px] border-2 border-btn_add-700 max-h-full rounded-xl m-5 overflow-hidden" style={{ background: "#F4F2DE" }}>
          <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-lg p-2 pr-3 h-11">
            <span className="absolute left-4 top-2 text-btn_add-800 text-start font-semibold lg:w-[400px] mobile:w-[200px] truncate" > Add Notes </span>
            <span className="pr-1 text-md pointer opacity-70 hover:opacity-100 " onClick={() => { document.querySelector(".form-cont-div")?.classList.add("invisible") }} >❌</span>
          </div>

          <div className="px-1 py-2 flex flex-row items-center justify-center">
            <div className="p-2 m-3 w-full ">
              <form className="flex flex-col items-center justify-center">
                <label htmlFor=""></label>
                <input type="text" name="title_in" id="title_in" className="text-cursor text-btn_add-800 m-3 lg:w-[500px] mobile:w-[270px] p-3 min-h-fit max-h-[500px] resize-none outline-none border-2 border-btn_add-700 rounded-lg" placeholder="Title" />
                <textarea rows={10} name="content_in" id="content_in" className="text-cursor text-btn_add-800 m-3 lg:w-[500px] mobile:w-[270px] p-3 min-h-fit max-h-[500px] resize-none outline-none border-2 border-btn_add-700 rounded-lg" placeholder="Content" ></textarea>

              </form>
              <div className=" flex flex-row w-full justify-end px-5" >
                <button className="m-2 text-green-900 bg-green-300 w-32 h-10 rounded-xl pointer hover:bg-green-200" onClick={handleAddNote} >Add</button>
                <button className="m-2 text-red-900 bg-red-300 w-32 h-10 rounded-xl pointer hover:bg-red-200" onClick={() => { document.querySelector(".form-cont-div")?.classList.add("invisible") }} >Cancel</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="btn fixed bottom-5 right-5">
        <button className=" pointer bg-btn_add-500 w-btn_lg h-btn_lg rounded-full text-3xl hover:bg-btn_add-400" onClick={() => {document.querySelector(".form-cont-div")?.classList.remove("invisible")}} >
          📃
        </button>
      </div>
    </div>
  );
}
