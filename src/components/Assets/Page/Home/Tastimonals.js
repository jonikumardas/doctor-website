import React from 'react';

const Tastimonals = ({tastymonal}) => {
    return (
        <div className='w-25 mx-2'>
            <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
            <div className="avatar justify-center items-center mt-4">
        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={tastymonal.img} />
                </div>
                <div className='ml-2 '>
                    <h6>{tastymonal.name}</h6>
                    <p>{ tastymonal.country}</p>
                </div>
       </div>
            
        </div>
    );
};

export default Tastimonals;