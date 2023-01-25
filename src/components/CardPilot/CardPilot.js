import { CardLayout, CardImg, PilotImg, CardBox } from "./CardPilot.styled";
import { LoadingTxt, Message, TxtWhite, TxtName, TxtDescription, ListTxt } from "../../styles/styles";
import useSearchApi from "../../hooks/useSearchApi";
import useSearchImage from "../../hooks/useSearchImage";
import CardTxt from "./CardTxt";
import CardArray from "./CardArray";


const CardPilot = (props) => {

    const {dataFound, loading, error} = useSearchApi("people", props.id);
    const {showImg} = useSearchImage('characters', props.id) ||
                                   `https://starwars-visualguide.com/assets/img/placeholder.jpg`;


    return (
        <CardLayout>
        
           {loading && <LoadingTxt><p>Loading Pilot data...</p></LoadingTxt> }
           {error && <Message><p>The information is not available, please try later.</p></Message>}
    
           {!loading && dataFound ? ( 
              <>
                <CardImg>
                  <PilotImg bgShowImg={showImg} data-testid="bgPilot">&nbsp;</PilotImg>
                </CardImg>
                <CardBox>
                  <TxtWhite><h2>{dataFound.name.toUpperCase()}</h2></TxtWhite>
                  <TxtName>Gender: <TxtDescription>{dataFound.gender}</TxtDescription></TxtName>
                  <TxtName>Year of birth: <TxtDescription>{dataFound.birth_year}</TxtDescription></TxtName>
                  <TxtName>Homeworld: 
                          <TxtDescription>
                            <CardTxt directory = {'planets'} id={parseInt(dataFound.homeworld?.substr(30))} /> 
                          </TxtDescription>
                  </TxtName>
                  <TxtName>Species: 
                          <TxtDescription>
                            <CardTxt directory = {'species'} id={parseInt(dataFound.species[0]?.substr(30))} />
                          </TxtDescription>
                  </TxtName>     
                  <TxtName>Height: <TxtDescription>{dataFound.height} cm</TxtDescription></TxtName>
                  <TxtName>Mass: <TxtDescription>{dataFound.mass} kg</TxtDescription></TxtName>
                  <TxtName>Hair color: <TxtDescription>{dataFound.hair_color}</TxtDescription></TxtName>
                  <TxtName>Eye color: <TxtDescription>{dataFound.eye_color}</TxtDescription></TxtName>
                  <TxtName>Skin color: <TxtDescription>{dataFound.skin_color}</TxtDescription></TxtName>
                  <TxtName>Films: 
                          <TxtDescription><ListTxt>
                            <CardArray arrayToExtract={dataFound.films} dataNestedNode={'title'} />
                          </ListTxt></TxtDescription>
                  </TxtName>
                  <TxtName>Starships: 
                          <TxtDescription><ListTxt>
                            <CardArray itemData={'starships'} arrayToExtract={dataFound.starships} dataNestedNode={'name'} />
                          </ListTxt></TxtDescription>
                  </TxtName>
                </CardBox>
              </>) : null}
        </CardLayout>
    ) 
}

export default CardPilot;