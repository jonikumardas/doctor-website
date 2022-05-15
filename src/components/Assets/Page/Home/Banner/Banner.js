import React from 'react';
import image from '../../../../../components/Assets/images/chair.png'
import Button from '../Button';
import bg from '../../../images/bg.png'

const Banner = () => {
  return (
     <div style={{background:`url(${bg})`}}>
        <div className="hero min-h-screen w-fit bg-white lg:px-12">
         <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className=" max-w-s lg:max-w-sm rounded-lg shadow-2xl" alt=' banner' />
       <div>
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <Button> Get started</Button>
    </div>
        </div>
        
      </div>
      </div>
      
    );
};

export default Banner;