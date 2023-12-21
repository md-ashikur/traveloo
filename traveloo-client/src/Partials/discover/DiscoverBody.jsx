import React from 'react';
import PopularDestination from './FindDestination';

const DiscoverBody = () => {
    return (
        <div className=' my-20'>
           <div className='discover-pic flex flex-col  justify-center text-white px-20 text-center'>
           <h1>The World is Waiting For You</h1>
            <p className='text-white'>Discover amzaing places at exclusive deals</p>
           </div>

           <PopularDestination/>
        </div>
    );
};

export default DiscoverBody;