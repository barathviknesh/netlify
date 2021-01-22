import { makeStyles, TextField } from '@material-ui/core';
import React,{useState,useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
// import UseForm from './Useform';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import { Link,useHistory  } from 'react-router-dom';

import './form.css';
import Snackbar from '@material-ui/core/Snackbar';


import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles(theme =>({
    root: {
            '& .MuiFormControl-root': {
                       width:'150%',
                       margin:theme.spacing(1)
    }
}
}))


export default function Form() {


  const history = useHistory();
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [profession,setprofession] = useState("");
  const [images,setImages] = useState("");
  const [url,seturl] = useState();


  const [open, setOpen] = useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpen(false);
  };
  const handleClosefill = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenfill(false);
  };


  const [opena, setOpena] = useState(false);
  const [openaemail, setOpenaemail] = useState(false);
  const [openfill, setOpenfill] = useState(false);

  const handleClosea = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpena(false);
  };
  const handleCloseaemail = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpenaemail(false);
  };

 
  
  
  // function myFunctionOff() {
  //   setTimeout(function(){ document.getElementById("fire").style.visibility = "hidden"; }, 6000);
  // }

  // function myFunctionOn() {
  //    document.getElementById("fire").style.visibility = "visible";
  // }







useEffect(()=>{
    console.log("useeffectfrom Form.js line 46")
if(url){
    updatefield()
}
console.log("useeffectfrom Form.js line 50 executed")
// history.push('/profile')
},[url])


  const uploadpic =()=>{



    const data = new FormData()
    data.append("file",images)
    data.append("upload_preset","insta-clone")
    data.append("cloud_name","cloudnameone")
    fetch("https://api.cloudinary.com/v1_1/cloudnameone/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
     .then(data=>{
         seturl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
   
 }



    
    

const updatefield=()=>{

    if(! name || !password || !email || !profession){
        setOpenfill(true);
        return 
    }

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
       
        setOpenaemail(true);
        return
    }
    
    fetch("https://crayond.herokuapp.com/signup",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
       body:JSON.stringify({
           name,
           password,
          email,
          profession,
          pic:url
   
        })
    }).then(res=>res.json())
     .then(data=>{
       console.log(data);
          if(data.error){
            
            setOpena(true);
          }else{
             setOpen(true);
            //  myFunctionOn();
             setName("");
             setPassword("");
             setEmail("");
             setprofession("");
             setImages("");
              seturl("");
            //  myFunctionOff();


          }
      })

}
// ///////////////////////////////////////////

const PostData=()=>{
    if(images){
        uploadpic()
    }else{
        updatefield()
    }
}
// ///////////////////////////////////////////****************END****************/////////////////////////////////////////////////////////////////////////




      








const classes = useStyles();





    return (

        <>
        <div className="parentpaper">
        <Paper className="paper">
            
        <div className={classes.root}>
            
            <Grid container>
                
<Grid item xs={6} style={{"margin-left":"70px"}}>

<div className="signupicon">
                      
      <MeetingRoomIcon  className="dooricon" />
   
                      <h2>Sign Up</h2>
  </div>


<TextField
    variant="outlined"
    label="Full Name"
    value={name}
   
    onChange={(e)=>setName(e.target.value)}
    name="fullName"
    type="text"
/>

<TextField
    variant="outlined"
    label="email"
    value={email}
   
    onChange={(e)=>setEmail(e.target.value)}
    name="email"
    type="text"
/>


<TextField
    variant="outlined"
    label="password"
    value={password}
    type="password"
    onChange={(e)=>setPassword(e.target.value)}
    name="password"

/>


<TextField
    variant="outlined"
    label="profession"
    value={profession}
    
    onChange={(e)=>setprofession(e.target.value)}
    name="profession"
    type="text"
/>



<div class="file-upload">
  <div class="file-select" style={{width:"147%","margin-left":"10px"}}>
    <div class="file-select-button" id="fileName">Choose File</div>
    <div class="file-select-name" id="noFile"  ></div> 
    <input type="file" 
           name="chooseFile" 
           id="chooseFile" 
        
           onChange={(e)=>setImages(e.target.files[0])}
           
        />
  </div>
</div>
<div>


<Button
            type="submit"
            fullWidth
             variant="contained"
             color="primary"            
             className={classes.submit}
             style={{width:"150%","margin-left":"8px","height":"45px","margin-top":"10px"}}
            onClick={()=>PostData()}
           >
             Sign Up
         </Button>
</div>

<div  className="linkTagParentform">
<Link className="linktagform" to="/Signin">Already have an account? Login Here.</Link>
</div>
</Grid>



            </Grid>

            
        </div>
        </Paper>

        
        </div>
        <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}   anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="success">
          Signed-up Successfully !.Please Login Now.
        </Alert>
      </Snackbar>
      <div>
      <Snackbar open={opena} autoHideDuration={6000} onClose={handleClosea}   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClosea} severity="error">
        invaild email or password !
        </Alert>
      </Snackbar>
      <Snackbar open={openaemail} autoHideDuration={6000} onClose={handleCloseaemail}   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleCloseaemail} severity="error">
        invaild email !
        </Alert>
      </Snackbar>
      <Snackbar open={openfill} autoHideDuration={6000} onClose={handleClosefill}   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClosefill} severity="error">
        Please fill all the fields !
        </Alert>
      </Snackbar>
      </div>
</>
    )
}


