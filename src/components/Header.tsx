import logo from "../assets/gd.jpg"
const Header = () => {
  return (
    <header className=" sticky p-2 border-b-2 border-slate-100 mb-2 shadow-md flex items-center justify-between " >
     <div className="flex items-center gap-14 " >
         <span className="flex items-center gap-2" >
           <img width={60} src={logo} alt="gdsc logo" />
           <h3 className=" font-semibold text-lg text-slate-700 " >Gdsc-udbkm</h3>
         </span>
         <span className=" space-x-8" >
            <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">About Us</a>
            <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">Team</a>
         </span>
     </div>
     <div className=" space-x-16 mr-6" >
      <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">Events</a>
      <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">Videos</a>
      <a className=" text-lg font-medium text-slate-700 hover:text-sky-600"  href="#">Contact Us</a>
     </div>
    </header> 
  
  )
}

export default Header