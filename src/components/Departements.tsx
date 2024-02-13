import DepartementElement from "./DepartementElement"

const Departements = () => {
  return (
    <section id="departements" >
      <h2 className=" text-lg sm:text-2xl text-slate-500 font-medium text-center mt-4 " >Departements</h2>
        <div className="p-1 flex flex-col gap-14 mx-auto  items-center py-8 px-2 relative md:flex-row md:justify-evenly" >
            <DepartementElement color="border-red-500" rotate="45" > Media </DepartementElement>
            <DepartementElement color="border-blue-500" rotate="90" > Logestic </DepartementElement>
            <DepartementElement color="border-green-500" rotate="180" > Community </DepartementElement>
            <DepartementElement color="border-red-500" rotate="12" > Software Engineering </DepartementElement>

        </div>
    </section>
    )
}

export default Departements