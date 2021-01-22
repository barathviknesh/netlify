import { makeStyles, TextField } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';


import React,{useState,useContext} from 'react';
import { Link,useHistory } from 'react-router-dom';
import {UserContext} from './App';



import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Snackbar from '@material-ui/core/Snackbar';


import Alert from '@material-ui/lab/Alert';

import './login.css';


const useStyles = makeStyles(theme =>({
    root: {
            '& .MuiFormControl-root': {
                       width:'150%',
                       margin:theme.spacing(1)
    }
}
}))


export default function Login() {

    
    const {state,dispatch} = useContext(UserContext);
    const history = useHistory();

const [password,setPassword] = useState("");
const [email,setEmail] = useState("");

const [open, setOpen] = useState(false);

const [opena, setOpena] = useState(false);
const [openfill, setOpenfill] = useState(false);
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

  const handleClosea = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
  
    setOpena(false);
  };

  function myFunctionOff() {
    setTimeout(function(){ history.push('/') }, 4000);
  }


const PostData = ()=>{
    
    if( !password || !email ){
        setOpenfill(true);
        return 
    }

    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
       
        setOpena(true);
        return
    }
    fetch("https://crayond.herokuapp.com/signin",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
         
            password,
            email
        })
    }).then(res=>res.json())
      .then(data=>{
          console.log(data);
          if(data.error){
           
            setOpena(true);
          }else{
              localStorage.setItem("jwt",data.token)
              localStorage.setItem("user",JSON.stringify(data.user))
              dispatch({type:"USER",payload:data.user})
            
            myFunctionOff()
            setOpen(true);
              history.push('/profile')
          }
      })
}

  

const classes = useStyles();




    return (

        <>
        <div className="parentPaperLogin">
        <Paper className="paperLogin">
            
        <div className={classes.root}>
            
            <Grid container>
                
<Grid item xs={6} style={{"margin-left":"70px"}}>

<div className="signupIconLogin">
                      
      <AccountBoxIcon  className="doorIconLogin" />
   
                      <h2>Login</h2>
  </div>




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
    
    onChange={(e)=>setPassword(e.target.value)}
    name="password"
    type="password"
/>



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
             Login
         </Button>
</div>
<div  className="linkTagParent">
<Link className="linktag" to="/Signup">Don't have an account? Sign Up</Link>
</div>
</Grid>

<Grid item xs={6}>

</Grid>

            </Grid>

            
        </div>
        </Paper>
        </div>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity="success">
         Logged-in Successfully !
        </Alert>
      </Snackbar>
      <div>
      <Snackbar open={opena} autoHideDuration={6000} onClose={handleClosea}   anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert onClose={handleClosea} severity="error">
        invaild email or password !
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


