import React, { useState } from 'react'
import AddCategory from './Componentes/AddCategory'
import GifGrid from './Componentes/GifGrid'

const GifExpertApp = () => {
    const [categories, setCategories] = useState(['batman'])
    
    return (
        <>
            <h2>GifExpertApp</h2>
                 <AddCategory setCategories={setCategories} categories={categories}/>
            <hr/>
            <ol>
                {
                    categories.map((e)=>
                        <GifGrid key={e} category={e}></GifGrid>
                    )
                }
            </ol>
        </>
    )
}

export default GifExpertApp
