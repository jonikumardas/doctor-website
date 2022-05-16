import React from 'react';

const Services = ({ service,setBookApointment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-xl">
      <div className="card-body">
                <h2 className="card-title text-accent">{name}</h2>
                {
                    slots.length ?
                        <span> {slots[0]} </span>
                        :
                        <span className='text-red-500 font-bold'>Please try another day</span>
                }
         <p>{slots.length} {slots.length? 'spaces':'space'}  Available </p>
         <div className="card-actions justify-center">
                    <label
                        htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={()=>setBookApointment(service)}
                        className="btn btn-accent bg-gradient-to-r from-primary to-accent uppercase modal-button">Book Apointment</label>
                    
      </div>
  </div>
</div>
    );
};

export default Services;