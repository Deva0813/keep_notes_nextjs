interface WelcomePageProps {
  className?: string;
  hidden?: boolean;
}

export default function WelcomePage(props: WelcomePageProps) {

  return (
    <div className={props.className} hidden={props.hidden} >
      <section className="relative container mx-auto flex flex-col items-center justify-center min-h-body py-2">
        <div className=" absolute top-0 left-[-50px] text-sm md:left-0 sub-title-txt p-3 px-4">
          <p className="text-btn_add-600" >Homepage&nbsp;/&nbsp;<span className=" text-btn_add-700 font-semibold " ></span> </p>
        </div>
        <h1 className=" mobile:text-3xl tablet:text-5xl desktop:text-6xl  font-bold text-center text-header_text ">Welcome to Keep Notes</h1>
        <p className=" mt-3 text-2xl text-center text-header_text/75 ">A simple note taking app</p>

        <div className=" flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
          <div className=" mt-6 text-white bg-black text-left rounded-lg border-2 border-gray-500 w-96 scale-90 md:scale-105 ">
            <div className="w-full border-b-2 px-3 py-2 flex flex-row justify-between border-gray-700 bg-gray-700" >
              <p>Getting Started </p>
              <p className="text-xs pt-1 " >🟢&nbsp;🟡&nbsp;🔴&nbsp;</p>
            </div>
            <div className="w-full p-3 text-sm ">
              <p className="pb-2" > <span className="text-green-500">user@keep-note-app:</span> <span className="text-blue-500" >~$</span>  ls steps </p>
              <ul className="list-disc pl-5" >

                <li className="mb-3" > <b>Sign Up or Log In:</b> <br />  Create an account or log in with your existing credentials to unlock the full potential of QuickNote.</li>
                <li className="mb-3" > <b>Create Your First Note:</b> <br />  Hit the 📃 button to embark on your note-taking journey. Jot down ideas, make to-do lists, or draft your next masterpiece.</li>

              </ul>

            </div>
          </div>
        </div>
      </section>
    </div>

  )
};