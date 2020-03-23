import React from 'react';

import SEO from '../../seo';

import './layout.css';

export default Layout;
function Layout({
    children
}) {
    return (
        <div className="layout">
            <SEO />
            {children}
        </div>
    );
}