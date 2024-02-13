import AboutElement from "./AboutElement"

const About = () => {

  return (
    
    <section id="about" >
    <h2 className="text-2xl text-slate-500 font-medium text-center mt-4 " >About Us</h2>
      <div  className=" p-1 flex flex-col gap-14 mx-auto  items-center py-8 px-2 relative md:flex-row md:justify-evenly  " >
        <AboutElement color="border-red-500" title="Gdsc concept" >
        The Gdsc program is a grassrouts channel through which google provides devolopement skills, web and mobile devoloppement skills for students twards employability
        </AboutElement>
        <AboutElement color="border-green-500" title="Why gdsc?" >
        The Gdsc program is a grassrouts channel through which google provides devolopement skills, web and mobile devoloppement skills for students twards employability
        </AboutElement>
        <AboutElement color="border-yellow-500" title="Target Audience" >
        The Gdsc program is a grassrouts channel through which google provides devolopement skills, web and mobile devoloppement skills for students twards employability
        </AboutElement>
     </div>
    </section>

  )
}

export default About