import { ReactNode } from "react";
import useAnimate from "../hooks/useAnimate";

interface props {
    title : string;
    children :ReactNode;
    color : "border-red-500" | "border-green-500" | "border-yellow-500"
}
const AboutElement = ({title,children,color}:props) => {
const {ref,animate} = useAnimate()
  return (
    <div ref={ref} className={`transition-all duration-700 pt-12 bg-slate-50 pb-2  px-6 space-y-4 z-50 shadow-lg w-[250px] rounded-md border-t-8 hover:bg-slate-100 ${color} ${animate ? "opacity-100 " : "opacity-0" } `} >
            <h4 className="text-end text-slate-800 font-medium" >{title}</h4>
            <p className="text-slate-500 text-sm" >{children} </p>
        </div>
  )
}

export default AboutElement