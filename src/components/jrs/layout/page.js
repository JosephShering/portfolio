import React from 'react';

export default Page;
function Page({
    children,
    className
}) {
    return (
        <div className={`layout__page ${className}`}>
            {children}
        </div>
    );
}