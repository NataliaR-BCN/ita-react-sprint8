import { useState, useRef, useCallback } from "react";
import { Message, LoadingTxt } from "../../styles/styles";
import StarshipsList from "../StarshipsList/StarshipsList";
import useSearchStarships from "../../hooks/useSearchStarships";


const SearchStarships = () => {

    const [pageNumber, setPageNumber] = useState(1);

    const observer = useRef();

    const starShipElementRef = useRef();
    const {starshipsList, error, loading, hasMoreStarships} = useSearchStarships(pageNumber);

    const lastStarhipElementRef = useCallback(node => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMoreStarships) {
            setPageNumber(prevPageNumber => prevPageNumber + 1 )
        }
      })  

      if (node) observer.current.observe(node);
    
    }, [loading, hasMoreStarships]);


    return ( 
      <>
        <Message>
            <p>{loading && <LoadingTxt>Loading starships...</LoadingTxt>}</p>
            <p>{error && <>The information is not available, please try later.</>}</p>
        </Message>

        {starshipsList.map((starship, index) => { 
          if (starshipsList.length === index + 1) {
            return ( <StarshipsList name={starship.name.toUpperCase()} model={starship.model} key={starship.name} 
                    id={parseInt(starship.url.substr(32))} ref={lastStarhipElementRef} /> )  
          } else {
            return ( <StarshipsList name={starship.name.toUpperCase()} model={starship.model} key={starship.name} 
                    id={parseInt(starship.url.substr(32))} ref={starShipElementRef} /> )  
          }
        })}      
      </> 
    )
    
};

export default SearchStarships;