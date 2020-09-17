import React from 'react';
import { useFetchGif } from '../hooks/useFetchGif';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGif(category)


    return (
        <>
            <h3 className="primary-color animate__animated animate__fadeIn">{ category }</h3>

            { loading && <p className="animate__animated animate__flash">Cargando...</p> }
            {
            <div className="card-container">
            {
                images.map((image) => (
                    <GifGridItem 
                        key={image.id}
                        {...image}
                    />
                ))
            }
            </div>

            }
        </>
    );
}

export default GifGrid;