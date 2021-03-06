import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category ) => {
    
    const [state, sState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {

        getGifs( category )
            .then( imgs => {
                
                sState({
                    data: imgs,
                    loading: false
                });
            })

    }, [category])




    return state; // { data:[], loading: true };


}


