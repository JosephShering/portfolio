import React from 'react';

import './layout.css';

export default Layout;
function Layout({
    children
}) {
    return (
        <div className="layout">
            {children}
        </div>
    );
}