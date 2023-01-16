import useNestedData from "../../hooks/useNestedData";


const CardArray = (props) => {

    const [nestedDataFound] = useNestedData(props.arrayToExtract);

    const result = nestedDataFound
      .map(nestedData => 
        <> <br/>- {nestedData[props.dataNestedNode]}</>
      );

    return result;

}

export default CardArray;