import React from "react";
import axios from "axios";
import { useState, useEffect } from 'react';

function App(){

    const [Quote, setQuote] = useState("");   
    //Way to set API In React
    useEffect(()=>{                          //useEffect is react function for api mount
       generatequote();
    })

    function generatequote(){                                   //function so that we call onclick button
        axios.get("	https://api.adviceslip.com/advice")
        .then(res=>{setQuote(res.data.slip.advice)})
        .catch(err=>console.log("ERROR"))
    }
    
    return(
        <div className="background">
        <div className="app">
        <nav className="navbar">
            <h1 className="heading">
                Random Advice Generator
            </h1>
        </nav>
            <div className="quotediv">
             <h1 className="quote">{Quote} </h1>
            </div>
            <button className="glow-on-hover" onClick={generatequote}>REGENERATE</button>
        </div>
        </div>
        
        
    )
}

export default App;