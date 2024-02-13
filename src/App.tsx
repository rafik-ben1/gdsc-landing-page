import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"

function App() {

  return (
    <>
      <Header/>
    <main className="flex flex-col w-full gap-40 divide-y-2 divide-stone-200 " >
      <Hero/>
      <About />
    </main>
    </>
  )
}

export default App
