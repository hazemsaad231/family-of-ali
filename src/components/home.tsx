import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Data from './data';

const Home = () => {
    return (
        <div className="home flex items-center justify-center">

              <VerticalTimeline lineColor="transparent" >
                  {Data.map((data, index) => (
                    <VerticalTimelineElement
                      contentStyle={{ background: "white" }}
                      key={index}
                      iconStyle={{ background: "red" , display: "none" }}
                      position={index % 2 === 0 ? "right" : "left"}  
                    >
                      <div className="flex items-center gap-2">
                        
                        <div className='text-right p-2'>
                        <h1 className='font-bold'>{data.name}</h1>
                        <h1 className='font-light'>{data.date}</h1>
                      <h3 className='text-sm mb-4'>{data.title}</h3>
                      <h6 className='text-[11px]'>
                        {data.text}
                      </h6>

                      <button className='border p-1 border-gray-300 rounded-md mt-4 cursor-pointer text-sm hover:bg-gray-100 '>اقراء المزيد</button>
                        </div>

                        <img src={data.img} alt=""  className='w-68 h-68'/>

                      </div>
                      
                    </VerticalTimelineElement>
            ))}
                  </VerticalTimeline>
        </div>
    )
}

export default Home