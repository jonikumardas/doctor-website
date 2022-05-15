import React from 'react';
const Services = ({img,title}) => {
    return (
        <div>
            <div className="card w-fit bg-white shadow-xl">
       <figure className="px-10 pt-10">
       <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions">
       </div>
      </div>
        </div>
        </div>
    );
};

export default Services;