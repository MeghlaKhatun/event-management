import './decoration.css';
import { FaThumbsUp,FaHeart } from "react-icons/fa";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Decoration = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])

    return (
        <div className="max-w-7xl mx-auto mb-20">
             <h2 className='text-center  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% decoration-wavy text-2xl md:text-3xl lg:text-5xl  font-extrabold italic mt-8 mb-10'>Our Decoration</h2>

            <div className=" flex relative justify-center flex-col-reverse lg:flex-row px-10 lg:px-0">

                <div data-aos="zoom-in" className='port_image w-full  md:w-1/2  mx-auto'>
                    <img className="lg:w-full lg:h-[600px]" src="https://i.ibb.co/v3KwgZx/alexandra-gornago-Aqu-Jhsgxams-unsplash-11zon.jpg" alt="" />

                           <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>
                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className='port_image ' data-aos="zoom-in">
                        <img className="h-[300px]" src="https://i.ibb.co/FbTqYSt/123-11zon.png" alt="" />

                        <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>
                    </div>

                    <div className='port_image' data-aos="zoom-in">
                        <img className="h-[300px]"  src="https://i.ibb.co/HtPHPrh/Screenshot-2023-10-08-184723-11zon.png" alt="" />

                        <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>

                    </div>

                    <div className='port_image' data-aos="zoom-in">
                        <img className="h-[300px]"  src="https://i.ibb.co/FHx2RGb/brides-couple-cutting-wedding-cake-11zon.jpg" alt="" />

                        <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>

                    </div>

                    

                    <div className='port_image' data-aos="zoom-in">
                        <img className="h-[300px]"  src="https://i.ibb.co/M1JzqKG/classic-luxury-style-restaurant-with-tables-chairs-11zon.jpg" alt="" />

                        <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>

                    </div>

                    <div className='port_image' data-aos="zoom-in">
                        <img className="h-[300px]" src="https://i.ibb.co/PYFNGkX/magic-view-prepared-evening-restaurant-11zon.jpg" alt="" />

                        <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>

                    </div>

                    <div className='port_image' data-aos="zoom-in">
                        <img className="h-[300px]" src="https://i.ibb.co/wR3hv2S/login-11zon.png" alt="" />

                        <div className="overlay">
                                <div className=" mt-10">
                                    <h4 className='text-xl font-medium text-white underline'>Our Decoration</h4>
                                   
                                    <p></p>
                                </div>
                           </div>

                            <div className="overlay1">
                                <ul className="over flex gap-2 items-center">
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href=""><FaThumbsUp></FaThumbsUp></a></li>
                                    <li className='text-white bg-black p-3 text-[16px] rounded-full'><a href="#"><FaHeart></FaHeart></a></li>
                                </ul>
                            </div>
                    </div>

                </div>
                
               
            </div>
        </div>
    );
};

export default Decoration;