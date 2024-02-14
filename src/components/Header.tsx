import logo from "../assets/gd.jpg"
import { useState } from "react"
const Header = () => {
  const [showNav , setShowNav] = useState(false)

  
  return (
    <>
    <header className="  z-[60] sticky w-full p-2 border-b-2 border-slate-100  shadow-md flex flex-col mb-4 " >
     <div className="flex items-center justify-between" >
      <div className="flex items-center gap-14 " >
         <span className="flex items-center gap-2" >
           <img width={60} src={logo} alt="gdsc logo" />
           <h3 className=" font-semibold text-lg text-slate-700 " >Gdsc-udbkm</h3>
         </span>
         <span className=" hidden md:block space-x-8" >
            <a className=" text-lg font-medium text-slate-700 hover:text-sky-600" href="#about">About Us</a>
            <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#team">Team</a>
         </span>
     </div>
     <div className="hidden space-x-16 mr-6 md:block" >
      <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#departements">Departements</a>
      <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">Videos</a>
      <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">Contact Us</a>
     </div>
    <button onClick={()=>setShowNav((prev)=>!prev)}  className="md:hidden" >
     <svg className="w-6 h-6 fill-current text-gray-900" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
      </svg>
      
     </button>
     </div>
    
    </header> 
    <ul className={` absolute  top-20  w-full z-50 bg-white h-[100%] transition-all duration-500 flex flex-col items-center justify-evenly   ${showNav ? " opacity-100" : "opacity-0" } `}>
  <li><a onClick={()=>setShowNav(false)} className="text-lg font-medium text-slate-800 hover:text-sky-600" href="#about">About Us</a></li>
  <li><a onClick={()=>setShowNav(false)} className="text-lg font-medium text-slate-800 hover:text-sky-600" href="#team">Team</a></li>
  <li><a onClick={()=>setShowNav(false)} className="text-lg font-medium text-slate-800 hover:text-sky-600" href="#departements">Departements</a></li>
  <li><a onClick={()=>setShowNav(false)} className="text-lg font-medium text-slate-800 hover:text-sky-600" href="">Contact Us</a></li>
 </ul>
 </>
  )
}

export default Header