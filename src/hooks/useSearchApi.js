import { useState, useEffect } from "react";
import axios from "axios";

export default function useSearchApi(dataType, id) {

    const [dataFound, setDataFound] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
      setLoading(true);
      setError(false);
      axios
        .get(`https://swapi.dev/api/${dataType}/${id}/`)
        .then((res) => {
          setDataFound(res.data);
          setLoading(false);
        }).catch(err => {
          setError(true)
          return "Connection not available"
        })
      // eslint-disable-next-line 
    }, []);

    return {dataFound, loading, error}

} 