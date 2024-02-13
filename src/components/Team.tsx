import team from "../assets/team.avif"
import useAnimate from "../hooks/useAnimate"
const Team = () => {
  const {ref,animate} = useAnimate()
  return (
    <section id="team" >
      <h2 className=" text-lg sm:text-2xl text-slate-500 font-medium text-center mt-4 " >Our Team</h2>
      <div className="w-full mx-auto md:max-w-[80%] flex flex-col gap-6 items-center md:flex-row  " >
      <div className={` transition-all duration-1000 ${animate ? "translate-x-0" : 'translate-x-[-40%]'}`} ref={ref} ><p  className={`text-sm transition-transform duration-700 sm:text-lg font-medium text-slate-700 md:max-w-[80%] text-center `} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit labore voluptas pariatur tempore laboriosam excepturi officiis obcaecati, quas ducimus eaque dolores exercitationem numquam harum sed incidunt. Quod dignissimos impedit et.</p></div>
       <img src={team} className="w-[300px] md:w-full " alt="team illustration" />
      </div>
    </section>
  )
}

export default Team