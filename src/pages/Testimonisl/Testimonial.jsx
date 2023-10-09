import Navbar from "../Home/shared/Navbar/Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "../Home/shared/Footer/Footer";

const Testimonial = () => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    return (
    <div>
        <Navbar></Navbar>
        <div className="max-w-7xl mx-auto mb-6 md:mb-8 lg:mb-16">
           <h2 className="text-center  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% decoration-wavy text-xl md:text-2xl lg:text-3xl  font-extrabold italic mt-8 mb-10">Our Testimonials</h2>

                <div className="grid grid-cols-1 gap-8 px-10 lg:px-0 md:grid-cols-2 ">

                  <div data-aos="flip-left" className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/R7r8kR3/bruce-mars-8-YG31-Xn4d-Sw-unsplash.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Amazing Services</h2>
                        <p>All the services are amazing.....Keep it up.</p>
                        <div className="card-actions ">
                          <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"checked />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                          </div>
                        </div>
                    </div>
                  </div>

                  <div  data-aos="flip-left"  className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/d2MPPtf/jonas-kakaroto-KIPqvv-TOC1s-unsplash.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Wonderful services</h2>
                        <p>All the services are amazing.....Keep it up.</p>
                        <div className="card-actions ">
                          <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"checked />
                          </div>
                        </div>
                    </div>
                  </div>

                  <div  data-aos="flip-left"  className="card  bg-base-100 shadow-xl">
                    <figure ><img src="https://i.ibb.co/RPZQBr4/shipman-northcutt-sg-ZX15-Da8-YE-unsplash.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Awesome Services</h2>
                        <p>All the services are amazing.....Keep it up.</p>
                        <div className="card-actions ">
                          <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"checked />
                          </div>
                        </div>
                    </div>
                  </div>


                  <div  data-aos="flip-left"  className="card  bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/Wst1XZX/yogendra-singh-Hrp-YHch-Kb5-Y-unsplash.jpg" alt="Movie"/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Good Services</h2>
                        <p>All the services are amazing.....Keep it up.</p>
                        <div className="card-actions ">
                          <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star" />
                            <input type="radio" name="rating-1" className="mask mask-star"checked />
                          </div>
                        </div>
                    </div>
                  </div>


                </div>

        </div>

        <Footer></Footer>

    </div>
    );
};

export default Testimonial;