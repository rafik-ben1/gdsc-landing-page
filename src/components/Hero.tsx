import logo from '../assets/gd.jpg'
import car from '../assets/hi.jpg'
const Hero = () => {
  return (
    <section className='w-full mx-auto flex flex-col items-center    md:w-[85%] md:flex-row md:gap-14 mt-16   ' >
        <div className='flex gap-3 flex-col items-start w-full md:w-[60%] justify-start  ' >
            
            <div className='flex flex-col w-full justify-center  items-center md:flex-row md:gap-4 md:justify-start  ' >
                <img className='w-40 h-5/6 md:w-52 md:h-[100%]  ' src={logo} alt="gdsc logo"  /> 
                 <span className='flex flex-col gap-[2px] md:gap-2' ><h1 className=' font-medium text-xl text-slate-500 sm:text-2xl md:text-3xl ' >Google Devoloper Student Club</h1><p className='text-lg font-medium text-sky-500' >Djilali Bounaama Université</p></span>
            </div>
            <p className='text-start font-medium text-stone-400 md px-6 md:text-lg ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nisi fuga voluptatibus nemo alias. Eveniet a provident eligendi quo numquam? Repudiandae explicabo fuga mollitia molestiae numquam tempora fugiat? Provident, doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Non consequatur laudantium temporibus aliquid fuga, sint omnis nisi voluptatum. Quidem sequi incidunt, fugiat non ratione repellendus. Dolores blanditiis dolorum veniam eaque.</p>
        </div>
        <div className='flex flex-col justify-center' >
        <h2 className='text-xl  font-medium text-center text-slate-600 mb-3 ' >Meet Gama, He says hi</h2>
            <img src={car} className='w-40 md:w-full'  alt="" />
        </div>
    </section>
  )
}

export default Hero