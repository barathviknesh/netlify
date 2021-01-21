


import React,{useState,useContext,useEffect} from 'react';

import {UserContext} from './App';

import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { grey, red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import CancelIcon from '@material-ui/icons/Cancel';
import Snackbar from '@material-ui/core/Snackbar';


import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  
  root: {
    minWidth: 600,
    
    // maxwidth:1000,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({setreload}) {

// ////////////////////////////////////////////////////////////////////////////////////
// const [image,setImage] = useState('');
// const [loading,setloading] = useState(false);

// const uploadImage = async e => {


// const files = e.target.files
// const data = new FormData()
// data.append('file',files[0])
// data.append("upload_preset","insta-clone")
// setloading(true)
// const res = await fetch(
//   'https://api.cloudinary.com/v1_1/cloudnameone/image/upload',

//   {
//     method: 'POST',
//     body: data
//   }
// )
// const file = await res.json()

// setImage(file.secure_url)
// setloading(false)


// /////////////////////////////////////////////////////////////////////////////////



// const AddNew = ({}) => {
  // const [file, setFile] = React.useState(null)
  
  // const fileHandler = (e) => {
  //     setFile(e.target.files[0])
  // }
  
  // return (
      // <div>
          // <img src={file? URL.createObjectURL(file) : null} alt={file? file.name : null}/>
          // <input type="file" onChange={fileHandler} />
      /* </div> */
  // )
// }















const history = useHistory();
const [title,setTitle] = useState("1");
const [body,setBody] = useState("");
const [images,setImages] = useState("");
const [url,seturl] = useState("");
// const [file, setFile] = React.useState(null)
const [p,setp] = useState(0);
const [open, setOpen] = useState(false);


const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
};
useEffect(()=>{
  const lengthOfp = body.length;
  setp(lengthOfp);
},[body])
const {state,dispatch} = useContext(UserContext);

// console.log(state,"from inputCard")

const Addpic=()=> {
  document.getElementById("inputpic").click()

    
}

useEffect(()=>{
if(url && body.length > 0){

fetch("/createpost",{
    method:"post",
    headers:{
        "content-type":"application/json",
        "Authorization":"Bearer "+localStorage.getItem("jwt")
    },
    body:JSON.stringify({
     
        title:"title",
        body,
        pic:url
    })
}).then(res=>res.json())
  .then(data=>{
      console.log(data);
      if(data.error){
          // M.toast({html:data.error})
      }else{
        // M.toast({html:"posted successfully"})

          // alert("posted successfully")
          setImages("")
          setBody("")
          setOpen(true);
          setreload("15")
          setreload("150")
         
      }
  })
}
},[url])
const postDetails =()=>{
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













//   const data = new FormData()
//   data.append("file",images)
//   data.append("upload_preset","insta-clone")
//   data.append("cloud_name","cloudnameone")
//   fetch("https://api.cloudinary.com/v1_1/cloudnameone/image/upload",{
//       method:"post",
//       body:data
//   })
//   .then(res=>res.json())
//   .then(data=>{
//       setloading(data.url)
//   })
//   .catch(err=>{
//       console.log(err)
//   })
// }

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} style={{"margin-top":"10px"}}>
      <CardHeader style={{backgroundColor:"#e2e2e2","margin-bottom":"15px"}}
        avatar={
          <Avatar src={state?state.pic:"loading"} aria-label="recipe" className={classes.avatar}>
            
          </Avatar>
        }
        action={
       
        <div className="buttonparent"><button onClick={()=>Addpic()} className="addbutton"><InsertPhotoIcon/><p>Add</p></button>
                <button className="postbutton"  onClick={()=>postDetails()}>post</button></div>
        
          
        }
        
        title={state?state.name:"loading"}
        subheader={state?state.profession:"loading"}
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}

      {/* ///////////////////////////////////////////////// */}
      {/* <div> */}
        <div className="pre">
        {/* <h1>upload image</h1> */}
        
        
        <img className="previewimg" classname="it" src={images? URL.createObjectURL(images) : null} alt={images? images.name : null}/>
        <IconButton aria-label="share" onClick={()=>{setImages("")}} className="ic" style={{display: images ? '': 'none'}}>
          <CancelIcon  className="closed" style={{display: images ? '': 'none'}}/>
        </IconButton>
          
          <input  id="inputpic"className="previewimginput" type="file" onChange={(e)=>setImages(e.target.files[0])} />
          {/* <button  className="closed" onClick={()=>{setImages("")}}><CancelIcon/></button> */}
          
        
        {/* <input
                 type="file"
                 name="file"
                 placeholder="upload an image"
                 onChange={(e)=>setImages(e.target.files[0])}
                //  accept="image/*"
        />{url ? (
          <h3>Loading..!</h3>
        ):(
          <img src={images} style={{width:'10px', height:"10px"}}/>
        )} */}
        </div>
        {/* </div> */}



        {/* <img src={images? URL.createObjectURL(images) : null} alt={images? images.name : null}/>
          <input type="file" onChange={(e)=>setImages(e.target.files[0])} /> */}



















        {/* ////////////////////////////////////////////////////// */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          <div className="inputBottom">
              <input className="intext" 
              placeholder="Hey! Try Something here."
              value={body}
              onChange ={(e)=>setBody(e.target.value)}
              maxlength="120"
              
              />
              <p>{p}/120</p>
              </div>
        </Typography>
      </CardContent>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}   anchorOrigin={{ vertical: 'top', horizontal: 'center'}}>
        <Alert onClose={handleClose} severity="success">
          Posted successfully !
        </Alert>
      </Snackbar>
      
    </Card>
  );
}
