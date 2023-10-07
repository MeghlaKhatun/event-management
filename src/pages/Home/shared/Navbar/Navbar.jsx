import { Link, NavLink } from "react-router-dom";
import '../Navbar/Navbar.css'

const Navbar = () => {

    const navLinks=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
    <li><NavLink to="/register">Registration</NavLink></li>
    </>

    return (

       
      <div className="navbar bg-base-100 my-12 max-w-7xl mx-auto">
        <div className="  navbar-start">
            <nav className="dropdown">

                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

                <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </nav>

            <a className=" normal-case text-2xl flex items-end italic font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90%  "><span className="text-5xl  font-extrabold italic ">S</span>OCIAL <span className="text-5xl font-extrabold italic ml-3">E</span>VENT</a>

        </div>


        <nav className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal flex gap-6 font-medium text-[18px]">
            {navLinks}
            </ul>
        </nav>
        <div className="navbar-end">
            <Link to="/login" className="py-2 px-4 hover:bg-[#4c0a7be6] hover:text-white font-semibold text-[18px] rounded-lg">Login</Link>
        </div>
        </div>
            
       
        
          
       
    );
};

export default Navbar;