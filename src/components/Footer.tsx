import fb from "../assets/facebook_5968764.png"
import insta from "../assets/instagram_2111463.png"
import linkedin from "../assets/linkedin.webp"
const Footer = () => {
  return (
    <footer className="flex flex-col gap-4 p-2 bg-slate-100 border-t-2 border-stone-200 shadow  " >
         <h2 className="text-center font-semibold text-2xl text-slate-700" >Follow us on</h2>
       <div className="flex gap-8 justify-center" >
        <a href="https://www.facebook.com/GDSCUDB"> <img width={40} src={fb} alt="facebook" /> </a>
        <a href="https://www.instagram.com/gdsc_udbkm?igshid=YmMyMTA2M2Y%3D"><img width={40} src={insta} alt="instagram" /></a>
        <a href="https://www.linkedin.com/company/gdscudbkm/"><img width={40} src={linkedin} alt="linkedin" /></a>
        </div>
        <p className="text-lg font-semibold text-center text-slate-700" >Contact Us at gdscudbkm@gmail.com</p>
        <p className="text-lg font-semibold text-slate-700 text-center" >© 2024 GDSC </p>
<a href="https://www.freepik.com/icons/social-media">Icon by Freepik</a>
    </footer>
  )
}

export default Footer
