import React, { use } from 'react';

const Items = ({itemspromise}) => {

    const items = use(itemspromise);
    console.log(items);

    return (
        <div>
            <h1 className='text-[#0E2954]'>Active Auctions</h1>
        </div>
    );
};

export default Items;