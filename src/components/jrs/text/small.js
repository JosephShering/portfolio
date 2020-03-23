import React from 'react';

export default Small;
function Small({children}) {
    return <small className="text-sm">{children}</small>
}