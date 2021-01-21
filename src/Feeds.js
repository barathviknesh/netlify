import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from "react";
import './feeds.css';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
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
                {/* <div><Feedpost/></div> */}
                
                  {/* <div className="feed_input">
                   <div className="createarea">
                       <Avatar className="avatar"/>
                       <div className="info">
                           <h3>name of the god</h3>
                           <p>son of the god !</p>
                       </div>
                       <div className="headerRight">
                           <button className="add"> <div className="addin"><InsertPhotoIcon/><p>Add</p></div></button>
                           <button className="post"><div className="postin"><InsertPhotoIcon/><p>post</p></div></button>
                       </div>
                       </div>   

                  </div> */}
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
