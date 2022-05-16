import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../images/chair.png'
const ApointmentBaner = ({date,setDate}) => {
    return (
        <section>
        <div className="hero  min-h-screen">
       <div className="hero-content flex-col lg:flex-row-reverse">
      <img src={chair} alt='' className="lg:max-w-sm max-w-s rounded-lg shadow-2xl" />
                
    <div className='lg:mx-12'>
      <DayPicker
     mode="single"
     selected={date}
     onSelect={setDate}
     />  
    </div>
    </div>
            </div>
           
            </section>
    );
};

export default ApointmentBaner;