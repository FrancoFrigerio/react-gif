import React from 'react'
import { useFetchGif } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {
    
    const {loading,data} = useFetchGif(category);
    console.log(category)
    return (
        <>
            <h3>{category}</h3>
            {
                loading&&'cargando...'
            }
            <div className="card_grid">
                    {
                        data.map( img=>(
                            <GifGridItem 
                                key={img.id}            
                                // img={img}
                                {...img}
                            />
                        ))
                    }
            </div>
        </>

    )
}

export default GifGrid
