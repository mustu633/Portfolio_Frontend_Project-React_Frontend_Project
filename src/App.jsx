import "./App.css";
import React, { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import { WebSections } from "./components/sections/WebSections";

function App(){
    useEffect(() =>{
        AOS.init()
        AOS.refresh()
    },[])
    return(
        <>
        <WebSections />
        </>

    )
}

export default App;