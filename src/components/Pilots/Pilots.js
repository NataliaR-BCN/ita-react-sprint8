import CardPilot from "../CardPilot/CardPilot";
import { CardContainer, CardEmpty } from "../../styles/styles";


const Pilots = (props) => {
    
    const llistaPilots = props.pilotList;


    return (
        <>
            <CardContainer>
                <h3>This starship is flied by the following pilots:</h3>

                {llistaPilots && llistaPilots.length ?   
                    llistaPilots.map((pilot, index) =>  
                    <CardPilot key={index} id={parseInt(pilot.substr(29))} />) :      
                    <CardEmpty><p>So sorry, this information is not available.</p></CardEmpty>
                }
            </CardContainer>
            <br/> 
        </>
    )
}

export default Pilots;