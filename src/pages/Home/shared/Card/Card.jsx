
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id,img,title,price,short_description}=card;
  return (
    <div >

    <div  className=' p-6 h-[600px] shadow-2xl rounded-lg'>
       <div>
            <img className='w-full  h-[300px]  rounded-t-lg' src={img} alt="" />
       </div>

       <div className='pt-6 flex justify-between items-center'>
            <h3 className= 'text-[18px] md:text-[22px] lg:text-2xl font-semibold lg:font-bold'>{title}</h3>
            <h2 className='md:text-[18px] text-gray-600 px-2 py-1 lg:text-xl font-medium'>Price: ${price}</h2>
       </div>

       <div>
            <h2 className=' pt-4 font-normal md:font-medium text-gray-600'>{short_description}</h2>
       </div>
       <div>
        <Link to={`/card/${id}`}><button className='py-2 md:py-3 px-6 mt-6 text-white font-medium md:font-bold bg-[rgb(255,127,42)] rounded-full flex items-center gap-2'>Service details </button></Link>
       </div>
          

    </div>
    
</div>
  )
}

Card.propTypes = {
    card:PropTypes.object,
}

export default Card