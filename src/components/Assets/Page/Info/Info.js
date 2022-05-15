import React from 'react';
import img from '../../icons/clock.svg'
import img1 from '../../icons/phone.svg'
import img2 from '../../icons/marker.svg'
import InfoCard from './InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 bg-white px-2'>
            <InfoCard bgColor='bg-gradient-to-r from-primary to-accent' cardDescreaption='sun,mon,fri at 9.00 AM' cardTitle='Opening hour' img={img1}></InfoCard>
            <InfoCard bgColor='' cardDescreaption='Brooklyn, NY 10036, United States' cardTitle='Visit our location' img={img2}></InfoCard>
            <InfoCard bgColor='bg-gradient-to-r from-primary to-accent ' cardDescreaption='+000 123 456789' cardTitle='Contact us now ' img={img}></InfoCard>
        </div>
    );
};

export default Info;