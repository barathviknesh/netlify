import React,{useEffect, useState, useContext} from 'react';
import { UserContext } from './App';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import './feedpost.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';


const useStyles = makeStyles((theme) => ({

  Card: {
    width: 300,
    margin: 'auto'
  },
  root: {
    maxWidth: 600,
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

const styles = theme => ({
  Card: {
    width: 300,
    margin: 'auto'
  },
  Media: {
    height: 550,
    width: '100%',
    objectFit: 'cover'
  }
});

export default function RecipeReviewCard({setreload}) {


  const[change,setchange] =useState(0);

const likePost =(id)=>{
 
fetch("https://crayond.herokuapp.com/like",{
  method:"post",
  headers:{
      "content-type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
  },
  body:JSON.stringify({
   
    postId:id
  })
}).then(res=>res.json())
.then(result=>{
    console.log(result);
    const newData = data.map(item=>{
      if(item._id==result._id){
        return result
      }else{
        return item
      }
    })
setData(newData)
    
}).catch(err=>{
  console.log(err);
})

window.location.reload();

random()

}

const random =()=>{
  const x = Math.random();
  setchange(x)
}

const unlikePost =(id)=>{
  fetch('https://crayond.herokuapp.com/unlike',{
    method:"put",
    headers:{
      "content-type":"application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt")
  },
  body:JSON.stringify({
   
    postId:id
  })
  }).then(res=>res.json()
    .then(result=>{
      console.log(result)
     
    }))
    window.location.reload();
    random()
}


  const [data,setData]=useState([]);
    const {state,dispatch} = useContext(UserContext);
useEffect(()=>{
    fetch('/mypost',{
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
      .then(result=>{
          console.log(result);
          setData(result.mypost)
      })
      console.log("from feedpost useeffect")
},[setreload,change])




  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(true);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

 if(data.length > 0){ return (
<>
<div className="feedposterBody">
  <hr style={{ border: "0.1px solid gray","margin-top":"10px", "margin-bottom":"10px"}}/>
{data.map(item=>{
  return(
<>
<div className="feedposter" key={Math.random()*0.125478+5}>
  
<Card className={classes.root} style={{"width":"600px", "margin-top":"5px","margin-bottom":"5px"}} >
      <CardHeader
        avatar={
          <Avatar src={state?state.pic:"loading"} aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={item.postedBy.name}
        subheader={state?state.profession:"loading"}
      />

<Typography variant="body2" color="textSecondary" component="p" style={{"margin-left":"15px","margin-bottom":"15px"}}>
                                            {item.body}
        </Typography>

      <CardMedia 
        className={classes.media}
        image={item.photo}
        title={item.title}
      />
      <CardContent>
        
      </CardContent>
      <CardActions disableSpacing>
        <IconButton style={{color: item.likes.length > 0 ? 'red': 'gray'}} aria-label="add to favorites" onClick={()=>{likePost(item._id)}}  >
          <FavoriteIcon />
        </IconButton>
        <button  style={{"display":"none"}} onClick={()=>{random()}}>xxx</button>
        <IconButton aria-label="share" onClick={()=>{unlikePost(item._id)}}>
          <ChatBubbleOutlineIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <p style={{"margin-left":"5px"}}>{item.likes.length} likes</p>
       
      </CardActions>
      
    </Card>

</div>

</>
  )
})}

</div>  


    </>
  );
}


else{

  return(
    
    <div className="nopost">
 <hr style={{ border: "0.1px solid","margin-top":"10px", "margin-bottom":"10px","width":"600px"}}/>
 <p>Sorry No post available :( </p>
    </div>
  )
}
}