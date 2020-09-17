import {useState, useEffect} from 'react';
import {getGifs} from '../helpers/getGifs'
const useFetchGif = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });


    useEffect(() => {
        getGifs(category)
            .then(data => {
                setState({
                    data: data,
                    loading: false
                })
            });
    }, [category]);

    return state;
}

export {useFetchGif};