import React from 'react';

export default Card;
function Card({
    children
}) {
    return (
        <div className="card px-4 py-6 rounded bg-gray-700">
            {children}
        </div>
    );
}