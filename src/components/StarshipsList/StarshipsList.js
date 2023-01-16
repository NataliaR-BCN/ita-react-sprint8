import { ShipItem, ShipItemName } from "./StarshipsList.styled";
import { Link } from "react-router-dom";
import { forwardRef } from "react"; 

const StarshipsList = forwardRef((props, ref) => {

    return (
      <>
        <Link to={`${props.id}`}>
          <ShipItem ref={ref}>
            <ShipItemName>{props.name}</ShipItemName>
            <li>{props.model}</li>
          </ShipItem>
        </Link>      
      </> 
    )
});


export default StarshipsList;