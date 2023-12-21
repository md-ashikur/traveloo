import React from 'react';
import PopularDestination from './FindDestination';

const DiscoverBody = () => {
    return (
        <div className=' my-28'>
           <div className='px-20 text-center'>
           <h1>The World is Waiting For You</h1>
            <p>Discover amzaing places at exclusive deals</p>
           </div>

           <PopularDestination/>
        </div>
    );
};

export default DiscoverBody;