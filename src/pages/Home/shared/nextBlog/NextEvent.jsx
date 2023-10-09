
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const NextEvent = () => {

    useEffect(()=>{
        AOS.init({duration: 2000})
    },[])


    return (
 <div className="max-w-7xl mx-auto">
            <h2 className='text-center  bg-clip-text text-transparent  bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% decoration-wavy text-2xl md:text-3xl lg:text-5xl  font-extrabold italic mt-8 mb-10'>Next Event</h2>

     <div>


        <div className="carousel w-full h-[60vh] bg-black bg-opacity-50">
            
            <div  data-aos="flip-up" id="slide1" className="carousel-item relative w-full bg-no-repeat bg-cover " style={{backgroundImage: 'url(https://i.ibb.co/7KBGf3y/vaibhav-nagare-0ci9am-l-Dk-unsplash-11zon.jpg)'}}>

                    <div className="flex justify-center w-1/2 mx-auto items-center">
                        <div>
                        <h2 className="text-black md:font-bold text-center text-2xl md:text-3xl lg:text-4xl">Reception</h2>
                        <p className="text-center text-white md:text-xl">a formal party at which important people are welcomed: The president gave a reception for the visiting heads of state. </p>
                        </div>
                    </div>
              
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">❮</a> 
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>


            </div> 



            <div data-aos="flip-up" id="slide2" className="carousel-item relative w-full bg-no-repeat bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/WKn7GwP/pia-kamp-iacr-F-f-Hr08-unsplash-11zon.jpg)'}}>

                  <div className="flex justify-center w-1/2 mx-auto items-center">
                        <div>
                        <h2 className="text-black md:font-bold text-center text-2xl md:text-3xl lg:text-4xl">Buffet</h2>
                        <p className="text-center text-white md:text-xl">A buffet is a meal of cold food that is displayed on a long table at a party or public occasion. Guests usually serve themselves from the table.</p>
                        </div>
                    </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">❮</a> 
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
    

            <div data-aos="flip-up" id="slide3" className="carousel-item relative w-full bg-black bg-opacity-50 bg-no-repeat bg-cover" style={{backgroundImage: 'url(https://i.ibb.co/VT4zXwh/wedding-1404620-1280.jpg)'}}>

                    <div className="flex justify-center w-1/2 mx-auto items-center">
                        <div>
                        <h2 className="text-black md:font-bold text-center text-2xl md:text-3xl lg:text-4xl">Mehndi</h2>
                        <p className="text-center text-white md:text-xl">Mehndi is a form of temporary body art that is painted onto the skin using henna. </p>
                        </div>
                    </div>
            
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">❮</a> 
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
                
            </div> 
           
            
        </div>


     </div>



</div>
    );
};

export default NextEvent;