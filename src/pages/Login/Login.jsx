import { Link } from "react-router-dom";
import Navbar from "../Home/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { FaGoogle } from 'react-icons/fa';


const Login = () => {

    const{signIn,googleLogIn}=useContext(AuthContext);

    const handleLogIn=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)


        // sign In
        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'LogIn Successful',
                'success'
              )
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
                'Good job!',
                'Google LogIn Successful',
                'success'
              )
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
  <div className="w-full  pb-20" style={{backgroundImage: 'url(https://i.ibb.co/4YpVdgF/5e5f43a4ca3f03151e4de26046c72b99.jpg)'}}>
        
        <Navbar></Navbar>
    <div className="max-w-7xl mx-auto py-40">
       <div className="bg-white max-w-md mx-auto p-10 rounded-lg shadow-2xl">

        <h2 className="text-3xl text-amber-600 text-center font-bold  ">Please Login</h2>

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

            <div className="my-4 flex gap-2">
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accepted our <a href="#">terms and conditions</a></label>
            </div>

            <div className="form-control mt-6">
                <button className="py-4 rounded-lg bg-[#4c0a7be6] text-white font-bold">Login</button>
            </div>
        </form>
        <p className=" mt-4 font-medium text-center">Do not Have An Account ? please <Link className="text-red-600" to="/register">Register</Link> </p>

                {/* google login button */}
                <div className="flex justify-center mt-6">
               <button onClick={handleGoogleLogIn} className="py-4 px-10 border-2 rounded-lg   bg-[#4c0a7be6] text-white font-bold flex items-center gap-3"><FaGoogle></FaGoogle> Login with Google</button>
               </div>
            

       </div>

     </div>
  </div> 
    );
};

export default Login;