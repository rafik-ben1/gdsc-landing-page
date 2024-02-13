import { useEffect, useRef, useState } from "react";

export default function useAnimate() {
    const [animate,setAnimate] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)
    useEffect(()=>{
        const callBack = (entries : IntersectionObserverEntry[])=>{
            const [entry] = entries;
            setAnimate(entry.isIntersecting)

        }
    const observer = new IntersectionObserver(callBack,{root:null,rootMargin:"0px",threshold:0.5})

if(ref.current){
    observer.observe(ref.current)
}
return ()=> {
        observer.disconnect()
    
}
    },[])
    return {ref,animate}
}