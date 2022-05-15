import React from 'react';
import serive1 from '../../../images/fluoride.png'
import serive2 from '../../../images/cavity.png'
import serive3 from '../../../images/whitening.png'
import Services from './Services';
import ServiceSection from './ServiceSection';
const Service = () => {
    return (
        <div>
        <div className='mt-12'>
            <p className=' text-1xl text-center text-accent font-bold'>OUR SERVICES</p>
            <p className='text-3xl text-center font-normal'>Services We Provide</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <Services  title='Fluoride Treatment' img={serive1}></Services>
            <Services  title='Cavity Filling' img={serive2}></Services>
                <Services title='Teeth Whitening' img={serive3}></Services>
                </div>
            
            </div>
            <ServiceSection></ServiceSection>
            </div>
    );
};

export default Service;