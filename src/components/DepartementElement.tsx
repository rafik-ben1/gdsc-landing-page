import { ReactNode } from "react";

interface Props {
  rotate : "45" | "90" | "180" | "12" ;
  color : "border-red-500" | "border-blue-500" | "border-yellow-500" | "border-green-500";
  children : ReactNode
}
const DepartementElement = ({rotate , color , children} :Props ) => {
  return (
    <div className={` flex items-center justify-center bg-slate-100 w-[200px] h-[200px] ${color} rounded-full border-8 border-l-0  rotate-${rotate}`} >
      <p className={`text-lg font-semibold text-slate-700 -rotate-${rotate}` } > {children} </p> 
    </div>
  )
}

export default DepartementElement