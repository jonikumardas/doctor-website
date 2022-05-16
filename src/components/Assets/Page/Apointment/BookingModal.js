import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ bookApointment, date,setBookApointment }) => {
    const {_id, name, slots } = bookApointment;
    const BookApointment = e => {
        e.preventDefault();
        const Userslot = e.target.slot.value;
        const Username = e.target.name.value;
        const Email = e.target.email.value;
        const Phone = e.target.phone.value;
        fetch('http://localhost:5000/petaint', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer abcdxyz',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Userslot,
                Username,
                Email,
                Phone
            }),
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => console.log(data));
        setBookApointment(null);
    }
    return (
        <div >
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
    <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white">
                <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg"> {name}</h3>
                    <form onSubmit={BookApointment} className=' grid justify-items-center mt-4 '>
                    <input type="text" readOnly value={format(date, 'PP')} className="input bg-white border-solid border-2 border-gray-500 input-bordered w-full max-w-xs mb-2" />
                    <select name='slot' className="select bg-white border-solid border-2 border-gray-500 select-warning w-full max-w-xs mb-2">
                            {
                                slots.map(slot => <option valule={slot}>{slot}</option>)
                           }
         
                    </select>
                    <input name='name' type="text" placeholder="Full name " className="input bg-white border-solid border-2 border-gray-500 input-bordered w-full max-w-xs mb-2" />
                    <input  name='phone' type="text" placeholder="Phone number" className="input bg-white border-solid border-2 border-gray-500 input-bordered w-full max-w-xs mb-2" />
                    <input name='email' type="email" placeholder="email" className="input input-bordered bg-white border-solid border-2 border-gray-500  w-full max-w-xs mb-2" />
                    <input type="submit" className="input input-bordered w-full max-w-xs bg-slate-900"  value="Submit " />
                        </form>
              <div className="modal-action">
              
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingModal;