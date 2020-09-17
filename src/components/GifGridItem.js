import React from 'react';

const GifGridItem = ({title, image}) => {
    return (
        <div className="card-item animate__animated animate__fadeIn">
            <figure className="card-image-container">
                <img className="card-image" src={image} alt={title}/>
            </figure>
            <p className="primary-color">{title}</p>
        </div>
    );
}


export default GifGridItem;