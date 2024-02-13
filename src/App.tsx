import About from "./components/About"
import Departements from "./components/Departements"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Team from "./components/Team"

function App() {

  return (
    <>
      <Header/>
    <main className="flex flex-col max-w-[100%] gap-40 divide-y-2 divide-stone-200 p-1 " >
      <Hero/>
      <About />
      <Team />
      <Departements />
    </main>
    </>
  )
}

export default App
