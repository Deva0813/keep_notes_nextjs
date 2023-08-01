interface WelcomePageProps {
  className?: string;
  hidden?: boolean;
}

export default function WelcomePage( props: WelcomePageProps ) {
  return (
    <div className={props.className} hidden={props.hidden} >
      <section className="relative container mx-auto flex flex-col items-center justify-center min-h-body py-2">
      <div className=" absolute top-0 left-[-50px] text-sm md:left-0 sub-title-txt p-3 px-4">
          <p className="text-btn_add-600" >Homepage&nbsp;/&nbsp;<span className=" text-btn_add-700 font-semibold " ></span> </p>
        </div>
        <h1 className=" mobile:text-3xl tablet:text-5xl desktop:text-6xl  font-bold text-center text-header_text ">Welcome to Keep Notes</h1>
        <p className=" mt-3 text-2xl text-center text-header_text/75 ">A simple note taking app</p>
        <div className=" flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
        </div>
      </section>
    </div>

  )
};