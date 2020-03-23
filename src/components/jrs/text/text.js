import React from 'react';

export default Text;
function Text({children, className}) {
    return <p className={`text-base ${className}`}>{children}</p>;
}