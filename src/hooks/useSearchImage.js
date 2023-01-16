import { useState, useEffect } from "react";
import axios from "axios";

export default function useSearchImage(dataType, id) {

    const [showImg, setShowImg] = useState(`https://starwars-visualguide.com/assets/img/big-placeholder.jpg`);

    
    useEffect(() => {

      axios
        .get(`https://starwars-visualguide.com/assets/img/${dataType}/${id}.jpg`)
        .then((res) => {
          setShowImg(res.config.url)
        })

      // eslint-disable-next-line  
      }, []);

      
    return {showImg};

}