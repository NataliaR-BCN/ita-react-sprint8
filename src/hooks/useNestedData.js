import { useState, useEffect } from "react";


export default function useNestedData(arrayToExtractData) {

    const [nestedDataFound, setNestedDataFound] = useState([]);

    useEffect(() => {
      async function getData() { 
        try {
          const response = await Promise.all(
                arrayToExtractData.map((url) => 
                fetch(url).then((res) => res.json())
                )
          );
          
          setNestedDataFound(response);
      
        } catch (error) {
          console.log(error);
        }
      }

      getData();
    
      // eslint-disable-next-line 
    }, []);

    return [nestedDataFound]

}
