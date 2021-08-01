import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories , categories}) => {
    
    const [inputValue, setInputValue] = useState('')
    
    const handleSubmit=(e)=>{
         e.preventDefault();
         if(inputValue.trim().length > 2){
             setCategories([
                 inputValue,
                 ...categories
                ]);
                setInputValue('');    
            }
        
    }
    return (
        
          <form onSubmit={handleSubmit}>
            <input
                    type="text"
                    value={inputValue}
                    onChange={(e)=>setInputValue(e.target.value)}
                />    
                {/* <button>Agregar</button> */}
          </form> 
          
        
    )
}

export default AddCategory

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired,
    categories:PropTypes.array.isRequired
}