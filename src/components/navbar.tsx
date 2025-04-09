import logo from "../assets/img/logo.png"

const Navbar = () => {


    return (
        <div className="w-full h-max bg-gradient-to-r from-white to-orange-100 shadow-white opacity-60">

            <div className="flex items-center justify-between px-20 py-2">

            <img src={logo} alt="" className="w-20 h-20" />

            {/* <h1 className="title">
                اسره محمد علي 
            </h1> */}


            </div>

           

        </div>
    )
}

export default Navbar