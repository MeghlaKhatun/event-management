import { useContext } from "react";
import Navbar from "../Home/shared/Navbar/Navbar";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Register = () => {

    const {createUser}=useContext(AuthContext)

    const handleCreateUser=e=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        console.log(email,password)

        // create user
        createUser(email,password)
        .then(result=>{
            console.log(result.user);
            Swal.fire(
                'Good job!',
                'Registration Successful',
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
        <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <h2 className="text-3xl text-amber-600 text-center font-bold">Please Registration</h2>

          <form onSubmit={handleCreateUser} className=" md:w-1/2 lg:w-2/5 mx-auto">
            <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
            </div>

            <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
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
        <p className="text-[16px] mt-4 font-semibold text-center">Already Have An Account ? please <Link className="text-red-600" to="/Login">Login</Link> </p>

</div>
    );
};

export default Register;