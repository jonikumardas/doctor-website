import React from 'react';
import image from '../../../images/treatment.png'
import Button from '../Button';

const ServiceSection = () => {
    return (
        <div className='lg:mt-12'>
            <div className="hero w-fit min-h-screen bg-white lg:px-12">
  <div className="hero-content flex-col lg:flex-row">
    <img src={image} className="lg:max-w-sm  max-w-s rounded-lg shadow-2xl" />
    <div className='lg:ml-12'>
      <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
      <p className="py-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <Button>get started</Button>
    </div>
  </div>
</div>
       
        </div>
    );
};

export default ServiceSection;