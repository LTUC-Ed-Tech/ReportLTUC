
import { useState, useEffect } from 'react';

const useFetch = (url, options, callback) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, options);
                const json = await res.json();
                console.log('fetch respone', json)
                callback(json);
                setResponse(json);
            } catch (error) {
                setError(error);
            }
        };
        fetchData();
        // eslint-disable-next-line
    }, [url]);
    return { response, error };
};

export default useFetch;