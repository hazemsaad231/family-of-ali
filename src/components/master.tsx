import { Outlet } from "react-router-dom"
import Navbar from "./navbar"


const Master = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    )

}

export default Master