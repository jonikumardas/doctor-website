import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import chair from '../../images/chair.png'
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
import Footer from '../Home/Footer';

const Apointment = () => {
    const [date, setDate] = useState(new Date())
    if (date) {
        if (date) {
          }
    }
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
    <p>You have picked: {format(date, 'PP')}.</p>     
    </div>
  </div>
            </div>
            <div>
                <Footer></Footer>
            </div>
            </section>
    );
};

export default Apointment;