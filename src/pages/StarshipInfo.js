import StarshipDetails from "../components/StarshipDetails/StarshipDetails";
import { Navigate } from "react-router-dom"; 


const StarshipInfo = ( { isAuthenticated } ) => {
    if (!isAuthenticated) {
        return <Navigate to="/Login" replace />;
    }
    
    return ( 
        <div className="container">
            <StarshipDetails />
        </div>
    )
};


export default StarshipInfo;