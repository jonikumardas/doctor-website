import React, { useState } from 'react';
import 'react-day-picker/dist/style.css';
import Footer from '../Home/Footer';
import AbailableApointment from './AbailableApointment';
import ApointmentBaner from './ApointmentBaner';


const Apointment = () => {
    const [date, setDate] = useState(new Date())

    return (
        <div>
            <ApointmentBaner date={date} setDate={setDate}></ApointmentBaner>
            <AbailableApointment date={date}></AbailableApointment>
            <Footer></Footer>
       </div>
    );
};

export default Apointment;