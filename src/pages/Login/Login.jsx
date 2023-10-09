import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/shared/Navbar/Navbar";
import { useContext} from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { FcGoogle } from 'react-icons/fc';


const Login = () => {

    const{signIn,googleLogIn}=useContext(AuthContext);
    const location=useLocation();
    console.log(location);
    const navigate=useNavigate()

    const handleLogIn=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

         
        // sign In
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            navigate(location.state ? location.state : "/")
            Swal.fire(
                'Success!',
                'LogIn Successful',
                'success'
              )
              navigate(location.state ? location.state : "/")
        
        })
        .catch(error=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: (`${error.message}`),
              })
        })

        
        
    }

     // google logIn
     const handleGoogleLogIn=()=>{
        googleLogIn()
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Success!',
                'Google LogIn Successful',
                'success'
              )
              navigate(location.state ? location.state : "/")
        })
        .catch(error=>{
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: (`${error.message}`),
              })
        })
     }


    return (
  <div className="w-full  pb-20 bg-no-repeat bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/SxxmQzL/54321-11zon.png)'}}>
        
        <Navbar></Navbar>
    <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-40 px-10">
       <div className="bg-white max-w-md mx-auto p-10 rounded-lg shadow-2xl">

        <h2 className="text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] to-[#FF8938] text-center font-bold  ">Please Login</h2>

          <form onSubmit={handleLogIn} className=" mx-auto ">
            
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white  text-[18px]">Email</span>
                </label>
                <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white text-[18px]">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            </div>

            <div className="form-control mt-6">
                <button className="py-2 md:py-4 rounded-lg bg-gradient-to-r from-[#ff0000] to-[#FF8938] hover:bg-gradient-to-r hover:from-[#FFF] hover:to-[#FFF]  text-white hover:text-[#FF8938] border-2 hover:border-[#FF8938] font-bold">Login</button>
            </div>
        </form>
        <p className=" mt-4 font-medium text-center">Do not Have An Account ? please <Link className="text-[rgb(255,127,42)] hover:underline" to="/register">Register</Link> </p>

                {/* google login button */}
                <div className="flex justify-center mt-6">
               <button onClick={handleGoogleLogIn} className="py-2 md:py-4 px-10 bg-gradient-to-r from-[#ff0000] to-[#FF8938] hover:bg-gradient-to-r hover:from-[#FFF] hover:to-[#FFF]  text-white hover:text-[#FF8938] border-2 hover:border-[#FF8938] rounded-lg font-bold flex items-center gap-3"><FcGoogle className="text-2xl"></FcGoogle> Login with Google</button>
               </div>
            

       </div>

     </div>
  </div> 
    );
};

export default Login;