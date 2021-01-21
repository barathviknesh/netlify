// import { Avatar } from '@material-ui/core';
import React, { useState } from "react";
import './feeds.css';
// import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InputCard from "./InputCard";
import Feedpost from "./Feedpost";

function Feeds() {


    const [reload,setreload]=useState("");
    return (
        <>
        <div className="feedparent">
        <div className="feed">
            <div className="feed_inputContainer">



                <InputCard setreload={setreload}/>
               
            </div>
           
        </div>
        <div className="feedscroll">
            <div className="feedscrollin">

            <Feedpost setreload={reload}/>
            </div>
        
        </div>
        </div>
        </>
    )
}

export default Feeds
