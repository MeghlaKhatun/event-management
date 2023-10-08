
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({card}) => {
    const {id,img,title,price,short_description}=card;
  return (
    <div >

    <div  className=' p-10 h-[600px] shadow-2xl rounded-lg'>
       <div>
            <img className='w-full  h-[300px]  rounded-t-lg' src={img} alt="" />
       </div>

       <div className='pt-6 flex justify-between'>
            <h3 className=' text-2xl font-bold'>{title}</h3>
            <h2 className='text-xl font-medium'>Price: ${price}</h2>
       </div>

       <div>
            <h2 className=' pt-4 font-medium text-gray-600'>{short_description}</h2>
       </div>
       <div>
        <Link to={`/card/${id}`}><button className='py-3 px-6 mt-6 text-white font-bold bg-amber-600 rounded-full'>Service details</button></Link>
       </div>
          

    </div>
    
</div>
  )
}

Card.propTypes = {
    card:PropTypes.object,
}

export default Card