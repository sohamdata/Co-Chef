import React from 'react';

const Footer = () => {
    return (
        <div className="text-center py-3 text-warning">
            &copy; {new Date().getFullYear()} Soham Datta <br></br> happy cooking!
        </div>
    );
}

export default Footer;