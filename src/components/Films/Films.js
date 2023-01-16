import CardMovie from "../CardMovie/CardMovie";
import { CardContainer, CardEmpty } from "../../styles/styles";


const Films = (props) => {

    const filmsList = props.filmList;


    return (
 
        <CardContainer>
          <h3>This starship appears in the following movies:</h3>
            {filmsList && filmsList.length ? 
                filmsList.map((film, index) => 
                    <CardMovie key={index} id={parseInt(film.substr(28))} /> ) :
                    <CardEmpty><p>So sorry, this information is not available.</p></CardEmpty> 
            } 
       
        </CardContainer>
    )
} 

export default Films;
