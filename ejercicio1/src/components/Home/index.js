import React from "react";
import './index.css';
import yoo from './yoo.png';

function Home (){
    return (
        <>
            <h2>Daniel Soria - TI </h2>
            <p> Tengo 32 años. Soy técnico en Sistemas Operativos y Redes, 
                actualmente me encuentro trabajando y estudiando para poder ser programador.
                Vivo en Fray bentos</p> 
            
            <img src={yoo} alt="mi foto"/>
            {/* <button> Ver CV </button> */}

          
            
            
            

        </>

        );
}

export default Home;