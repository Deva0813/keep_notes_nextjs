interface WelcomePageProps {
  className?: string;
  hidden?: boolean;
}

export default function WelcomePage( props: WelcomePageProps ) {
  return (
    <div className={props.className} hidden={props.hidden} >
      <section className=" container mx-auto flex flex-col items-center justify-center min-h-body py-2">
        <h1 className=" mobile:text-3xl tablet:text-5xl desktop:text-6xl  font-bold text-center text-header_text ">Welcome to Keep Notes</h1>
        <p className=" mt-3 text-2xl text-center text-header_text/75 ">A simple note taking app</p>
        <div className=" flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full ">
        </div>
      </section>
    </div>

  )
};