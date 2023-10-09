import { useContext, useState } from "react";
import Navbar from "../Home/shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { updateProfile } from "firebase/auth";


const Register = () => {

    const {createUser}=useContext(AuthContext);

    const [checkPassword,setCheckPassword]=useState("")

    const handleCreateUser=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        const password=e.target.password.value;
        const checkbox=e.target.terms.checked;
        console.log(checkbox,name,email,password)
        
        setCheckPassword (" ");
        // verify password condition
        if(password.length<6){
            setCheckPassword (" Password should be at least 6 characters")
            return;
        }
        else if(!/[A-Z]/.test(password)){
            setCheckPassword ("Password must be one character uppercase");
            return;
        }
        else if(!/[!@#$%^&*()_+{}[\]:;<>,.?/~\\-]/.test(password)){
            setCheckPassword ("Password must have one character special key word");
            return
        }
        else if (!checkbox){
            setCheckPassword ("Please fulfil our terms");
            return;
        }

        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'Registration Successful',
                'success'
              );
              updateProfile(result.user,{
                displayName:name,
                photoURL:"https://i.ibb.co/PxP4X7d/user.png",
              })
              .then(()=>console.log("profile updated"))
              .catch()
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

  <div className="w-full h-full pb-20" style={{backgroundImage: 'url(https://i.ibb.co/4YpVdgF/5e5f43a4ca3f03151e4de26046c72b99.jpg)'}}>
        
        <Navbar></Navbar>
    <div className="max-w-7xl mx-auto py-16 md:py-20 lg:py-40 px-10">
        
       <div className="bg-white max-w-md mx-auto p-10 rounded-lg shadow-2xl">
        {
            checkPassword && <p className="text-xl font-semibold text-red-700 mb-6">{checkPassword}</p>
        }

        <h2 className="text-xl md:text-2xl lg:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#ff0000] to-[#FF8938] text-center font-bold  ">Please Registration</h2>

          <form onSubmit={handleCreateUser} className=" mx-auto ">
            <div className="form-control">
                <label className="label">
                    <span className="label-text text-white  text-[18px]">Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>

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
                <label htmlFor="terms">Accepted our <a href="#">terms </a></label>
            </div>


            <div className="form-control mt-6">
                <button className="py-2 md:py-4 bg-gradient-to-r from-[#ff0000] to-[#FF8938] hover:bg-gradient-to-r hover:from-[#FFF] hover:to-[#FFF]   hover:text-[#FF8938] border-2 hover:border-[#FF8938] text-white rounded-lg font-bold">Registration</button>
            </div>
        </form>
        <p className="text-[16px] mt-4 font-semibold text-center">Already Have An Account ? please <Link className="text-[rgb(255,127,42)] hover:underline" to="/Login">Login</Link> </p>

       </div>

     </div>
  </div>      
    );
};

export default Register;