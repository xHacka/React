import { useState, useEffect } from "react";
import axios from "axios";

const API = "https://api.api-ninjas.com/v1/quotes";
const API_KEY = "8Q3UuMmISnkCBdK1vac70A==pAuTqoIbRIzh0mYv"

const useFetchQuote = (category = null) => {
    category = category ?? "movies";
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API, {
                    headers: { "X-Api-Key": API_KEY },
                    params: { category },
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [category]);

    return { data, loading, error };
};

export default useFetchQuote;
