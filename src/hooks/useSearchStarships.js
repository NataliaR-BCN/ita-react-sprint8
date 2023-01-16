import { useState, useEffect } from "react";
import axios from "axios";

export default function useSearchStarships(pageNumber) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [starshipsList, setStarshipsList] = useState([]);
    const [hasMoreStarships, setHasMoreStarships] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false)
        axios
          .get(`https://swapi.dev/api/starships`, {params: {page: pageNumber}})
          .then((res) => {
            setStarshipsList(prevStarshipsList => { return [...prevStarshipsList, ...res.data.results]});
            setHasMoreStarships(res.data.next !== null)
            setLoading(false);
          }).catch(err => {
            setError(true)
            return "Connection not available"
          })

      }, [pageNumber]);

    return {loading, error, starshipsList, hasMoreStarships}
}