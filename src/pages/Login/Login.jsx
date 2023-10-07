import { Link } from "react-router-dom";
import Navbar from "../Home/shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {

    const{createUser}=useContext(AuthContext);

    const handleLogIn=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        // create user
        
    }


    return (
        <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <h2 className="text-3xl text-amber-600 text-center font-bold">Please Login</h2>

          <form onSubmit={handleLogIn} className=" md:w-1/2 mx-auto">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
            
            </div>
            <div className="form-control mt-6">
            <button className="py-4 rounded-lg bg-[#4c0a7be6] text-white font-bold">Login</button>
            </div>
        </form>
        <p className="text-[16px] mt-4 font-semibold text-center">Don’t Have An Account ? please <Link className="text-red-600" to="/register">Register</Link> </p>

</div>
    );
};

export default Login;