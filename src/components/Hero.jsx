import { Box} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";




const Hero = () => {

let [heroData,setHeroData] = useState ([]) ;

useEffect (() => {
    axios.request({
        url : "http://localhost:3030/hero",
        method : "GET"
    })

    .then((resp) => {
        console.log(resp);
        setHeroData(resp.data);
    })
} , []);

    return(
        <>
        <Box sx = {{background : "#bac9cb", height : "100vh" }}>
        {heroData.map((hero)=>{
            return(
                <>
                <h1 sx={{margin : "0",}}>{hero.name}</h1>
                </>
            );
        })}

        </Box>
        </>
    );
}

export default Hero;