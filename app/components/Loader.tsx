'use client';

import { PropagateLoader } from 'react-spinners';


const Loader = () => {
  return (
    <div className='
        h-[70vh]
        flex
        flex-col
        justify-center
        items-center
    '>
        <PropagateLoader 
            size={20}
            color='#FF5A5F'
        />
    </div>
  )
}

export default Loader