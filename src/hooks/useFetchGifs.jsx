import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"



export const useFetchGif =(category)=>{
    const [estado, setEstado] = useState({
        data:[],
        loading:true
    })
    
    useEffect(() => {
        getGifs(category)
            .then((imagen)=>{
                setTimeout(() => {
                    setEstado({
                        data:imagen,
                        loading:false
                    }) 
                }, 2500);
            })
    }, [category])
    return estado;
}