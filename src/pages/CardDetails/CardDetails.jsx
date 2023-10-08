import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Home/shared/Navbar/Navbar";
import moment from 'moment';
import { GoClock } from "react-icons/go";


const CardDetails = () => {

    const cardDetails=useLoaderData();
    const {id}=useParams()
    const card=cardDetails?.find(card=>card.id == id);
    const {details,title ,img,price}=card;

    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mt-[83px] mb-16 px-10 lg:px-0">
                <div >
                    <img className="w-full h-[70vh] rounded-lg" src={img} alt="" />
                        
                    <div className="flex justify-between items-center mt-8 md:mt-[56px] mb-6">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl  text-[#0B0B0B] font-bold">{title}</h2>
                        <button className="py-2 px-6 bg-gradient-to-r from-[#ff0000] to-[#FF8938] text-white rounded-lg font-medium">Price: ${price}</button>
                    </div>
                    <div>

                        <p className='text-[18px] md:text-xl font-medium mb-6 flex items-center gap-2'><GoClock></GoClock> {moment().format('MMMM D, YYYY, h:mm a')}</p>

                    </div>
                   

                     <h3 className="text-[16px] text-[#0B0B0BB2] font-normal">{details}</h3>
  
                </div>
                
            </div>
    </div>
    );
};

export default CardDetails;