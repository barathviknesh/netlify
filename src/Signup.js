import React,{useState} from 'react';
import { Link,useHistory } from 'react-router-dom';

function Signup() {


  const history = useHistory();
  const [name,setName] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const [profession,setprofession] = useState("");
  const [images,setImages] = useState("");
  const [url,seturl] = useState(undefined);
  



  const PostData = ()=>{
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        // M.toast({html:"invalid E-mail"})
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
            email
        })
    }).then(res=>res.json())
      .then(data=>{
          if(data.error){
              // M.toast({html:data.error})
              console.log(data.error)
          }else{
            // M.toast({html:"successfully signed-up"})
            console.log(data)
              history.push('/signin')
          }
      })
}



  return (
    <div>
    <div className="myCard">
    <div className="card auth-card">
<h2>Instagram</h2>
<input
        type="text"
        placeholder="name"
         value={name}
           onChange={(e)=>setName(e.target.value)}
/>
<input
       type="text"
        placeholder="profession"
      value={profession}
        onChange={(e)=>setprofession(e.target.value)}
/>
<input
            type="text"
              placeholder="email"
         value={email}
          onChange={(e)=>setEmail(e.target.value)}
/>
<input
             type="password"
             placeholder="password"
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
/>

<div className="file-upload">
   <div className="file-select">
    <div className="file-select-button" id="fileName">Choose File</div>
    <div className="file-select-name" id="noFile"></div> 
     <input type="file" 
           name="chooseFile" 
            id="chooseFile" 
           
                 onChange={(e)=>setImages(e.target.files[0])}/>
  </div>
</div>





<button className="btn waves-effect waves-light #64b5f6 blue lighten-2"
       onClick={()=>PostData()}>Signup

</button>
<h6>
<Link to="/signin">Already have an account ?</Link>
</h6>
</div>
</div>
</div>
  )
}

export default Signup






// import React,{useState,useEffect} from 'react';
// import { Link,useHistory } from 'react-router-dom';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// // import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import "./signup.css";


// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// export default function SignUp() {
//   const classes = useStyles();


//   const history = useHistory();
//   const [name,setName] = useState("");
//   const [password,setPassword] = useState("");
//   const [email,setEmail] = useState("");
//   const [profession,setprofession] = useState("");
//   const [images,setImages] = useState("");
//   const [url,seturl] = useState(undefined);
  
  

// //   useEffect(()=>{
// // uploadfields()
// //   },[url])


//   const uploadpic =()=>{



//     const data = new FormData()
//     data.append("file",images)
//     data.append("upload_preset","insta-clone")
//     data.append("cloud_name","cloudnameone")
//     fetch("https://api.cloudinary.com/v1_1/cloudnameone/image/upload",{
//         method:"post",
//         body:data
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         seturl(data.url)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
   
// }

// const uploadfields =()=>{
//   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
//     // M.toast({html:"invalid E-mail"})
//     return
// }
// fetch("/signup",{
//     method:"post",
//     headers:{
//         "content-type":"application/json"
//     },
//     body:JSON.stringify({
//         name,
//         password,
//         email,
//         profession,
//         pic:url

//     })
// }).then(res=>res.json())
//   .then(data=>{
//     console.log(data);
//       if(data.error){
//           // M.toast({html:data.error})
//       }else{
//         // M.toast({html:"successfully signed-up"})
//           history.push('/signin')
//       }
//   })
// }
//   const PostData = ()=>{

//     if(images){
//       uploadpic() 
//     }else{
//       uploadfields()
//     }

     
//   }




//   return (
//     <Container component="main" maxWidth="xs">
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Avatar className={classes.avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography component="h1" variant="h5">
//           Sign up
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12} >
//               <TextField
//                 autoComplete="fname"
//                 // name="firstName"
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="firstName"
//                 label="First Name"
//                 autoFocus

//                 type="text"
//         placeholder="name"
//         defaultValue={name}
//         onChange={(e)=>setName(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12} >
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="profession"
//                 label="profession"
//                 name="profession"
//                 autoComplete="profession"

               

//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"


//                 type="email"
//                 placeholder="email"
                
//                 defaultValue={email}
//                 onChange={(e)=>setEmail(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"


//                 type="password"
//         placeholder="password"
        
//         defaultValue={password}
//         onChange={(e)=>setPassword(e.target.value)}
//               />
//             </Grid>
//             <Grid item xs={12}>
//              {/* <input
//              type="file"
//              name="file"
//              placeholder="upload an Image"
//              className="custom-file-input"
//              /> */}
//              <div class="file-upload">
//   <div class="file-select">
//     <div class="file-select-button" id="fileName">Choose File</div>
//     <div class="file-select-name" id="noFile"></div> 
//     <input type="file" 
//            name="chooseFile" 
//            id="chooseFile" 
           
        
//         onChange={(e)=>setImages(e.target.files[0])}/>
//   </div>
// </div>
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//             onClick={PostData()}
//           >
//             Sign Up
//           </Button>
//           <Grid container justify="flex-end">
//             <Grid item>
//               <Link href="/Signin" variant="body2">
//                 Already have an account? Sign in
//               </Link>
//             </Grid>
//           </Grid>
//         </form>
//       </div>
//       {/* <Box mt={5}>
//         <Copyright />
//       </Box> */}
//     </Container>
//   );
// }
