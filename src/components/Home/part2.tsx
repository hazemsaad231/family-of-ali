import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Data from '../data';
import { Link } from 'react-router-dom';
import { useState } from 'react';


interface Items {
  id: number;
  name: string;
  date: string;
  title: string;
  text: string;
  img: string;
}

const Two = () => {

  const myFirst = Data.slice(0, 4);

 const [IsToggle, setIsToggle] = useState(true);

  const Toggle = () => {
    setIsToggle(!IsToggle);
  }

  const RenderElement = ( items : Items[] ) => {
    
    return (
      <div>
      {items.map((data, index) => (

<VerticalTimelineElement
  contentStyle={{ background: "white" }}
  key={index}
  iconStyle={{ background: "red" , display: "none" }}
  position={index % 2 === 0 ? "right" : "left"}  
>

  <div className="flex w-full items-center justify-center gap-2 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row">
  <img src={data.img} alt=""  className='w-[100%] sm:w-[100%] md:w-60 lg:w-60 xl:w-60 h-68'/>

    <div className='text-right p-4 w-[100%]'>
      <div className='mb-4'>
      <h1 className='font-bold'>{data.name}</h1>
    <h1 className='font-light'>{data.date}</h1>
  <h3 className='text-sm'>{data.title}</h3>
  <h6 className='text-[11px]'>
    {data.text}
  </h6>
      </div>
  <Link className='border p-1 border-gray-300 rounded-md  cursor-pointer text-sm hover:bg-gray-100' to={`/details/${data.id}`}>اقراء المزيد</Link>
  </div>


  </div>
  
</VerticalTimelineElement>
))}
  </div>
    )
  }



    return (
        <>
  <div className="home flex items-center justify-center" id='home'>
<VerticalTimeline lineColor="transparent" >
<h1 className='title my-8'>ابرز الشخصيات</h1>

{IsToggle ? RenderElement(myFirst) : RenderElement(Data)}

   
    </VerticalTimeline>

</div>
<div className='flex items-center justify-center'>
<button className='bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-6 rounded-xl shadow-lg transition cursor-pointer' onClick={()=>Toggle()}>
    {IsToggle ? "عرض المزيد" : " عرض اقل"}</button>

</div>

        </>

    )
}

export default Two