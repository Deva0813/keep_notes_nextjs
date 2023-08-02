import WelcomePage from "./components/WelcomePage/page";
import NavBarComp from "./components/NavBarComp/page";

export default function Home() {

  return (

    <main className=" container-fluid relative">

      <NavBarComp />
      <WelcomePage className=" welcome-page lg:pt-[3px]" />

    </main>
  )
}
