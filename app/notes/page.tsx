"use client";
import { use, useEffect, useState } from "react";
import NavBarComp from "../components/NavBarComp/page";
import { CardComp, CardCompMini } from "../components/CardComp/page";

export default function NotesPage() {
  var date = new Date().toUTCString();

  var date_time = date.slice(0, date.length - 4);

  var data = [
    {
      id: "1",
      title: "Title 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur nulla lorem, vel efficitur diam finibus vel. Ut magna odio, bibendum ac sagittis eu, vestibulum ut ante. Vivamus ut pulvinar diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ac elit metus. Integer turpis mi, aliquam eu commodo a, elementum vitae metus. Aenean sit amet tellus felis. Ut vitae semper lorem. Donec ut mauris volutpat, lobortis tellus quis, aliquet ligula. Donec consequat lectus sed tortor aliquet, id molestie justo hendrerit. Fusce quis pharetra ex. Nulla facilisi. Integer sit amet accumsan quam. Duis sagittis ullamcorper velit, sed molestie purus venenatis interdum. Nunc tincidunt fringilla lectus non tempor.",
      date: date_time,
      lastUpdate: new Date().toUTCString().slice(0, date.length - 4),
    },
    {
      id: "2",
      title: "Title 2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur nulla lorem, vel efficitur diam finibus vel. Ut magna odio, bibendum ac sagittis eu, vestibulum ut ante. Vivamus ut pulvinar diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur ac elit metus. Integer turpis mi, aliquam eu commodo a, elementum vitae metus. Aenean sit amet tellus felis. Ut vitae semper lorem. Donec ut mauris volutpat, lobortis tellus quis, aliquet ligula. Donec consequat lectus sed tortor aliquet, id molestie justo hendrerit. Fusce quis pharetra ex. Nulla facilisi. Integer sit amet accumsan quam. Duis sagittis ullamcorper velit, sed molestie purus venenatis interdum. Nunc tincidunt fringilla lectus non tempor.",
      date: date_time,
      lastUpdate: new Date().toUTCString().slice(0, date.length - 4),
    },
    {
      id: "3",
      title: "Title 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      date: date_time,
      lastUpdate: new Date().toUTCString().slice(0, date.length - 4),
    },
  ];

  const [selectedNote, setSelectedNote] = useState({
    id: "",
    title: "",
    content: "",
    date: "",
  });

  useEffect(() => { 

    var element = document.querySelector(".big-note-cont");

    if (selectedNote.id != "") {
      element?.classList.remove("invisible");
    } else {
      element?.classList.add("invisible");
    }

  }, [selectedNote]);

  return (
    <div className="relative">
      <NavBarComp />

      <div className="container min-h-body mx-auto pt-5 flex flex-col items-center">
        <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 ">
          {data.map((item) => (
            <CardCompMini
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              date={item.date}
              onClick={() => {
                setSelectedNote({
                  id: item.id,
                  title: item.title,
                  content: item.content,
                  date: item.date,
                });
                
              }}
            />
          ))}
        </div>
      </div>

      <div className=" big-note-cont absolute top-[3px] left-0 w-full h-full flex flex-col items-center justify-center bg-black/50 invisible" >
        <CardComp
          id={selectedNote.id}
          title={selectedNote.title}
          content={selectedNote.content}
          date={selectedNote.date}
          isVisible={()=>{document.querySelector(".big-note-cont")?.classList.add("invisible")}}
        />
      </div>

      <div className="btn fixed bottom-5 right-5">
        <button className=" pointer bg-btn_add-500 w-btn_lg h-btn_lg rounded-full text-3xl hover:bg-btn_add-400">
          📃
        </button>
      </div>
    </div>
  );
}
