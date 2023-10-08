import { useLoaderData, useParams } from "react-router-dom";


const CardDetails = () => {

    const cardDetails=useLoaderData();
    const {id}=useParams()
    const card=cardDetails?.find(card=>card.id == id);
    const {details,title ,img}=card;

    return (
        <div className="max-w-7xl mx-auto mt-[83px] mb-16 px-10 lg:px-0">
        <div >
            <img className="w-1/2 h-[60vh] rounded-lg" src={img} alt="" />
                
                <h2 className="text-2xl md:text-3xl lg:text-4xl mt-8 md:mt-[56px] mb-6 text-[#0B0B0B] font-bold">{title}</h2>
                <h3 className="text-[16px] text-[#0B0B0BB2] font-normal">{details}</h3>

            
        </div>
        
    </div>
    );
};

export default CardDetails;