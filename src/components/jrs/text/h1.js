import React from 'react';

export default H1;
function H1({children, className}) {
    return <h1 className={`text-3xl ${className}`}>{children}</h1>;
}