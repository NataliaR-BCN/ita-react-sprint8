import { CardLayout, CardImg, MovieImg, CardBox } from "./CardMovie.styled";
import useSearchApi from "../../hooks/useSearchApi";
import useSearchImage from "../../hooks/useSearchImage";
import { LoadingTxt, Message, TxtWhite, TxtName, TxtDescription } from "../../styles/styles";


const CardMovie = (props) => {

    const {dataFound, loading, error} = useSearchApi("films", props.id);

    const {showImg} = useSearchImage('films', props.id) ||
                                  `https://starwars-visualguide.com/assets/img/placeholder.jpg`;


    return (
        <CardLayout>

            {loading && <LoadingTxt><p>Loading Movie data...</p></LoadingTxt> }
            {error && <Message><p>The information is not available, please try later.</p></Message>}

            {!loading && dataFound ? ( 
              <>
                <CardImg>
                   <MovieImg bgShowImg={showImg}>&nbsp;</MovieImg>
                </CardImg>
                <CardBox>
                  <TxtWhite><h2>{dataFound.title.toUpperCase()}</h2></TxtWhite>
                  <TxtName>Episode: <TxtDescription>{dataFound.episode_id}</TxtDescription></TxtName>
                  <TxtName>Opening Crawl: <TxtDescription>{dataFound.opening_crawl}</TxtDescription></TxtName>
                  <TxtName>Director: <TxtDescription>{dataFound.director} </TxtDescription></TxtName>
                  <TxtName>Production: <TxtDescription>{dataFound.producer} </TxtDescription></TxtName>
                  <TxtName>Release date: <TxtDescription>{dataFound.release_date} </TxtDescription></TxtName>
                </CardBox>
              </>) : null}
    
        </CardLayout>
    ) 
}

export default CardMovie;