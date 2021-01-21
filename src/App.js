import React,{useEffect,createContext,useReducer,useContext } from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Widget from './Widget';
import Feeds from './Feeds';
import Signup from './Signup';
import Signin from './Signin';
import Form from "./Form";
import Login from "./Login";

import {reducer,initialState} from './userReducer';

export const UserContext =createContext();



const Routing = () =>{
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext);
  useEffect(()=>{
    const user =JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push('/profile')
    }
    else{
      history.push('/Signup')
    }
  },[])
  return(
    <Switch>
    <Route exact path="/">
    <Feeds/>
</Route>
     <Route path="/Signup">
          <Form />
     </Route>
     <Route path="/Signin">
          <Login/>
     </Route>
     <Route path="/profile">
         
          <Feeds/>
        
     </Route>
    
    </Switch>
  )
}




function App() {

  const [state,dispatch] = useReducer(reducer,initialState)
console.log(state," state from app.js")
  return (

    <UserContext.Provider value={{state,dispatch}}>
    
    <BrowserRouter> 
    <div className="App">
     
 
      
      <div className="app_body">
      
        
  
    
     <Navbar/>
     <div>
     <Routing/>
     </div>
     

    </div>
 
     </div>


     </BrowserRouter>
     </UserContext.Provider>


  );
}

export default App;





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



