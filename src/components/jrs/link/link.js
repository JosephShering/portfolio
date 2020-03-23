import React from 'react';
import * as G from 'gatsby';

export default Link;
function Link({
    to = '',
    target,
    children,
    className
}) {
    if(to.match('http')) {
        return <a target={target} className={`text-pink-500 ${className}`} href={to}>{children}</a>
    }

    return (
        <G.Link className={`text-pink-500 ${className}`} to={to}>{children}</G.Link>
    );
}