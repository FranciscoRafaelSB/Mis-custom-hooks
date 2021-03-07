import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {

    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading : true, error: null})

    useEffect( () => {

        return () => {
            isMounted.current = false;
        }

    },[])

    
    useEffect( () => {

        setState({data: null, loading: true, error: null})
        
        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                    if (isMounted) {

                        setState({
                            loading: false,
                            error: null,
                            data
                        })
                    }       
                });


    }, [url]) //esta esfecto se va asignar unicamente cuando tenemos el url

    return state;


}
