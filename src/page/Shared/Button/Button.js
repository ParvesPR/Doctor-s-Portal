import React from 'react';

const Button = ({ children }) => {
    return (
        <button className="btn bg-gradient-to-r from-secondary to-primary text-white font-bold border-none">{children}</button>
    );
};

export default Button;