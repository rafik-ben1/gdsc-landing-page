import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Team from "./components/Team"

function App() {

  return (
    <>
      <Header/>
    <main className="flex flex-col w-full gap-40 divide-y-2 divide-stone-200 " >
      <Hero/>
      <About />
      <Team />
    </main>
    </>
  )
}

export default App
