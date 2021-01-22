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





