import React from 'react';

const InfoCard = ({img,cardDescreaption,cardTitle,bgColor}) => {
    return (
        <div>
            <div className={`card lg:card-side bg-base-100 shadow-xl ${bgColor} px-2`}>
       <figure><img className='mt-2' src={img} alt="Album"/></figure>
      <div className="card-body">
       <h2 className="card-title">{cardTitle}</h2>
                    <p>{cardDescreaption}</p>
       <div className="card-actions justify-end">
        </div>
        </div>
      </div>
            
        </div>
    );
};

export default InfoCard;