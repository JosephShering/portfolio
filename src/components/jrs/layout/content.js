import React from 'react';

export default Content;
function Content({
    children,
    className
}) {
    return (
        <div className={`layout__content ${className}`}>
            {children}
        </div>
    );
}