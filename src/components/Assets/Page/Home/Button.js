import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-accent bg-gradient-to-r from-primary to-accent uppercase ">{children}</button>
    );
};

export default Button;