import SearchStarships from "../components/SearchStarships/SearchStarships";
import { Navigate } from "react-router-dom"; 


const Starships = ( { isAuthenticated } ) => {
    if (!isAuthenticated) {
        return <Navigate to="/Login" replace />;
    }
   
    
    return ( 
        <div className="container">
            <SearchStarships />
        </div>
    )
};


export default Starships;

