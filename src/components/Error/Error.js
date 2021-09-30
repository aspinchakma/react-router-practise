import React from 'react';
import './Error.css'

const Error = () => {
    const url = 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1470175715831-NUJOMI6VW13ZNT1MI0VB/image-asset.jpeg?format=500w'

    return (
        <div className="mini-container">
            <div className="error-container">
                <img src={url} alt="" />
                <div className="tex-container">
                    <h1>AWWW...DON’T</h1>
                    <h1>CRY</h1>
                    <p>It's just a 404 Error!</p>
                    <p>What you’re looking for may have been misplaced in Long Term Memory.</p>
                </div>
            </div>
        </div>
    );
};

export default Error;