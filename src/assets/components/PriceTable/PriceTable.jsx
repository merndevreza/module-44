import PropTypes from 'prop-types';
import {FcCheckmark } from "react-icons/fc";

const PriceTable = ({priceTable}) => {
   const {name,price,icon,features}=priceTable
   return (
      <div>
         <div className='bg-blue-800 p-6  pb-20 rounded-3xl text-white'>
            <h3 className='text-2xl font-semibold mb-3'>{name}</h3>
            <p className='font-medium text-xl'><span className='text-5xl font-bold'>${price}</span> / month</p>
         </div>
         <div className='bg-white p-6 -mt-12 w-[90%] ml-[5%] rounded-2xl shadow'>
            <div className='-top-10 bg-white text-blue-800 text-3xl  relative z-50 p-4 shadow-lg inline-block rounded-xl'>{icon}</div>
            <ul>
               {
                  features.map((feature,idx)=><li className='mb-6 grid grid-cols-[30px_minmax(90%,_1fr)]' key={idx}><FcCheckmark className='text-xl'></FcCheckmark><span>{feature}</span></li>)
               }
            </ul>
            <button className='border-2 border-blue-800 px-3 py-2 text-blue-800 font-medium rounded-lg mt-5'>Start Now</button>
         </div>
      </div>
   );
};
PriceTable.propTypes={
   priceTable:PropTypes.object

}
export default PriceTable;