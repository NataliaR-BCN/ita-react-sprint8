import { Fitxa, ShipImg, CenteredTitle, MoreInfo } from "./StarshipDetails.styled";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useSearchApi from "../../hooks/useSearchApi";
import Pilots from "../Pilots/Pilots";
import Films from "../Films/Films";
import { Message, LoadingTxt, HalfDiv, FlexRow, FormButton, TxtName, TxtDescription} from "../../styles/styles";
import useSearchImage from "../../hooks/useSearchImage";

const StarshipDetails = () => {

    const { id } = useParams();
    
    const {dataFound, loading, error} = useSearchApi("starships", id);
    const {showImg} = useSearchImage('starships', id) || `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`;

    const [showPilots, setShowPilots] = useState(false);
    const [showFilms, setShowFilms] = useState(false);

    const showPilotsHandler = () => {
      setShowPilots(prevShowPilots => !prevShowPilots)
    }

    const showFilmsHandler = () => {
      setShowFilms(prevShowFilms => !prevShowFilms)
    }

    
    return (

      <Fitxa>
         <ShipImg src={showImg} alt={`${dataFound.name}`} /> 
         {loading && <LoadingTxt><p><br/><br/>Loading data, please wait...</p></LoadingTxt> }
         {error && <Message><p>The information is not available, please try later.</p></Message>}

         {!loading && dataFound ? (
            <>
              <CenteredTitle>{dataFound.name.toUpperCase()}</CenteredTitle>
              <FlexRow>
                <HalfDiv>
                  <TxtName>Model: <TxtDescription>{dataFound.model}</TxtDescription></TxtName>
                  <TxtName>Class: <TxtDescription>{dataFound.starship_class}</TxtDescription></TxtName>
                  <TxtName>Manufacturer: <TxtDescription>{dataFound.manufacturer}</TxtDescription></TxtName>
                  <TxtName>Cost: <TxtDescription>{dataFound.cost_in_credits} credits</TxtDescription></TxtName>
                  <TxtName>Crew: <TxtDescription>{dataFound.crew}</TxtDescription></TxtName>
                  <TxtName>Passengers: <TxtDescription>{dataFound.crew}</TxtDescription></TxtName>
                </HalfDiv>
                <HalfDiv>
                  <TxtName>Maximum atmospheric speed: <TxtDescription>{dataFound.max_atmosphering_speed} kph</TxtDescription></TxtName>
                  <TxtName>Hyperdrive rating: <TxtDescription>{dataFound.hyperdrive_rating}</TxtDescription></TxtName>
                  <TxtName>Length: <TxtDescription>{dataFound.length} m</TxtDescription></TxtName>
                  <TxtName>Cargo capacity: <TxtDescription>{dataFound.cargo_capacity} kg</TxtDescription></TxtName>
                  <TxtName>Max. time of consumables for its crew: <TxtDescription>{dataFound.consumables}</TxtDescription></TxtName>
                  <TxtName>Maximum Megalights per hour:<TxtDescription> {dataFound.MGLT} MGLT</TxtDescription></TxtName>
                </HalfDiv>
              </FlexRow>
              <MoreInfo>More info</MoreInfo>
              <FlexRow>
                <HalfDiv>
                  <FormButton onClick={showPilotsHandler} className={showPilots ? `active` : ``}>Pilots</FormButton>
                </HalfDiv>
                <HalfDiv>
                  <FormButton onClick={showFilmsHandler} className={showFilms ? `active` : ``}>Movies</FormButton>
                </HalfDiv>
              </FlexRow>
     
              <div>
                  {showPilots && <Pilots pilotList={dataFound.pilots} />}
                  {showFilms && <Films filmList={dataFound.films} />}
              </div>
            </> ) : null}
  
      </Fitxa>
    )
}


export default StarshipDetails;