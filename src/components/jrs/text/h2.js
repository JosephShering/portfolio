import React from 'react';

export default H2;
function H2({children, className}) {
    return <h2 className={`text-xl pb-2 ${className}`}>{children}</h2>
}