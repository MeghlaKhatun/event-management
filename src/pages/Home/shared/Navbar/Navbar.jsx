import { Link, NavLink } from "react-router-dom";
import '../../shared/Navbar/Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../../../Provider/AuthProvider";

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)

    const navLinks=<>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/review">Review</NavLink></li>
    <li><NavLink to="/register">Registration</NavLink></li>
    </>

    // signOut
    const handleLogOut=()=>{
        logOut()
        .then()
        .catch()
    }

    return (
   <div className="bg-black bg-opacity-50">
      <div className="navbar py-4 md:py-6 lg:py-12 max-w-7xl mx-auto px-4 md:px-10 lg:px-0">
        <div className="navbar-start">
            <nav className="dropdown">

                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-3xl text-white font-extrabold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

                <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
            </nav>

            <a href="#" className="flex items-end normal-case text-[18px] md:text-xl md:ml-[200px] lg:ml-0 text-2xl text-white lg:text-3xl  italic md:font-bold lg:font-extrabold  "><span className="text-2xl md:text-4xl lg:text-5xl md:font-bold lg:font-extrabold italic ">S</span>OCIAL <span className="text-2xl md:text-4xl lg:text-5xl md:font-bold lg:font-extrabold italic ml-3">E</span>VENT</a>

        </div>


        <nav className="navbar-center hidden lg:flex">
            <ul className=" menu-horizontal flex gap-6 text-white font-medium text-[18px]">
            {navLinks}
            </ul>
        </nav>
        <div className="navbar-end">

            <div className="flex flex-col-reverse justify-center lg:flex-row mr-2 lg:gap-4 items-center">

            <div className="flex justify-center">
                {
                    user?.displayName && <p className="text-white text-[12px] md:text-[14px] lg:text-[16px]">{user.displayName}</p>
                }
            </div>

            <div className="flex justify-center">
                
                {
                    user?.photoURL && <img src={user.photoURL} className="w-[30px] h-[30px] rounded-full" alt="" />
                }
            </div>
            </div>


            {
                user ?  
                <div >                  
                <Link onClick={handleLogOut} className="py-2 px-4 bg-[#4c0a7be6] text-white font-medium md:font-semibold text-[14px] md:text-[16px] lg:text-[18px] rounded-lg">Sign Out</Link>
                </div>
                :
                <div>
                    
                <Link to="/login" className="py-2 px-4 bg-[#4c0a7be6] text-white font-medium md:font-semibold text-[14px] md:text-[16px] lg:text-[18px] rounded-lg">Login</Link>
                </div>
            }
            
           
        </div>
     </div>
            
   </div>   
        
          
       
    );
};

export default Navbar;