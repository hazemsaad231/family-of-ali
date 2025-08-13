import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/Footer"

const Master = () => {
    return (
        <>
            <Navbar />
            <main>
                    <Outlet/>
            </main>
            <Footer />
        </>
    )
}

export default Master