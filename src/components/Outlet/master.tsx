import { Outlet } from "react-router-dom"
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/Footer"

const Master = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <Outlet/>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Master