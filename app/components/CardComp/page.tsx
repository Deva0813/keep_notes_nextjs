interface CardCompProps {
  id: string;
  title: string;
  content: string;
  date: string;
  isVisible?: any;
  onClick?: any;
}


export function CardComp(props: CardCompProps) {

  const handleDelete = ( id:string ) => {
    console.log(id);
  }

  const handleSave = ( id:string ) => {
    console.log(id);
  }

  return (
    <div>
      <div className="lg:w-[600px] mobile:w-[350px] border-2 border-btn_add-700 max-h-full rounded-xl m-5 overflow-hidden" style={{ background: "#F4F2DE" }}>
        <div className=" relative bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-lg p-2 pr-3 h-11">
          <span className="absolute left-4 top-2 text-btn_add-800 text-start font-semibold lg:w-[400px] mobile:w-[200px] truncate" >{props.title}</span>
          <span className="pr-1 text-md pointer" onClick={props.isVisible} >❌</span>
        </div>
        <div className="px-1 py-2 flex flex-row items-center justify-center">
          <div className="p-2 m-3 bg-white rounded-lg border-2 border-btn_add-700 ">
            <textarea rows={10} className="text-btn_add-800 m-3 lg:w-[500px] mobile:w-[270px] p-3 min-h-fit max-h-[500px] resize-none outline-none " spellCheck="false" defaultValue={props.content} />
          </div>
        </div>
        <div className="flex items-center justify-end w-full px-5 pb-4 font-semibold ">
                <button className="m-2 text-green-900 bg-green-300 w-32 h-10 rounded-xl pointer hover:bg-green-200">Save</button>
                <button className="m-2 text-red-900 bg-red-300 w-32 h-10 rounded-xl pointer hover:bg-red-200" onClick={()=>{window.location.href="/signup";}} >Delete</button>
        </div>
      </div>
    </div>
  )
}

export function CardCompMini(props: CardCompProps) {

  return (
    <button className="w-80 pointer relative border-2 border-btn_add-700 h-56 rounded-lg m-5 overflow-hidden" style={{ background: "#F4F2DE" }} onClick={props.onClick}>
      <div className=" absolute top-0 bg-btn_add-300 min-w-full text-end border-b-2 border-btn_add-700 text-xl p-1 pr-2">
        <span className="absolute left-4 top-2 text-start text-btn_add-800 font-semibold text-sm overflow-hidden w-44 truncate" >{props.title}</span>
        <span className="pr-1">🎯</span>
      </div>
      <div className=" absolute top-8 px-1 py-2">
        <p className="text-btn_add-800 line-clamp-6 m-3 text-left">{props.content}</p>
      </div>
    </button>
  )
}