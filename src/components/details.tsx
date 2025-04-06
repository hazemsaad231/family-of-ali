import { useParams } from "react-router-dom"
import Data from "./data"


const Details = () => {

   const {id} = useParams()
   const person = Data.find(p => p.id === Number(id));

   if (!person) return <p>الشخص غير موجود</p>;


    return (


        <div> 
    <h2 className="text-2xl font-bold text-right mx-20 my-8 text-indigo-950">{person.name}</h2>
 <div className="bg-white w-full sm:w-full md:w-3/4 lg:w-3/4 xl:w-1/2 m-auto flex items-center flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
 <img src={person.img} alt={person.name} className="w-[100%] sm:w-[100%] md:w-80 lg:w-80 xl:w-80 h-80 rounded-md" />

<div className="text-right text-indigo-950 text-sm">
      <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-96 xl:w-96 h-80 overflow-y-auto custom-scrollbar p-4 pb-8">
        <p>{person.details}</p>
        <h3 className="font-semibold mt-1">اهم الانجازات</h3>
        <ul className="list-none">
        {person.accomplishments.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
        </div>
      
    
</div>

    </div>
    <div className="w-40 h-20 bg-indigo-900 rounded-md m-auto relative bottom-4">
        <h1 className="h-full flex justify-center items-center text-white text-xl">
          {person.date}
        </h1>

      </div>  
    </div>


    )
}

export default Details

