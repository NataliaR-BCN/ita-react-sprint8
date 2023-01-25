import useSearchApi from "../../hooks/useSearchApi";
import { LoadingTxt } from "../../styles/styles";


const CardTxt = (props) => {

    const {dataFound, loading} = useSearchApi(props.directory, props.id);

    return ( 
      <>
        {loading && !dataFound ? <LoadingTxt>Loading</LoadingTxt> : null}
        {dataFound && !loading ? <> {dataFound.name}</> : <>   - </>}
      </>
    )
}

export default CardTxt;