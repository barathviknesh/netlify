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
      
    }
    else{
      history.push('/Signup')
    }
  },[])
  return(
    <Switch>
      {/* <Route exact path="/">
          <Home/>
     </Route> */}
     <Route path="/Signup">
          <Form />
     </Route>
     <Route path="/Signin">
          <Login/>
     </Route>
     <Route path="/profile">
          {/* <Sidebar/> */}
          <Feeds/>
          {/* <Widget/> */}
     </Route>
     {/* <Route path="/create">
          <Create/>
     </Route> */}
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
     
  <div class="pyro" id="fire" style={{"visibility":"hidden"}}>
    <div class="before"></div>
    <div class="after"></div>
</div>
      
      <div className="app_body">
      
        
  
    {/* <UserContext.Provider value={{state,dispatch}}>
    
     <BrowserRouter> */}
     <Navbar/>
     <div>
     <Routing/>
     </div>
     {/* </BrowserRouter>
     </UserContext.Provider> */}
  
        {/* //////////// */}

    </div>
 
     </div>


     </BrowserRouter>
     </UserContext.Provider>
// //////////////////////////////////////////////////////////////

// const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <UserContext.Provider value={{state,dispatch}}>
    
//      <BrowserRouter>
//      <Navbar/>
//      <Routing/>
//      </BrowserRouter>
//      </UserContext.Provider>
//   );

  );
}

export default App;





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// import React,{useEffect,createContext,useReducer,useContext } from 'react';
// import './App.css';
// import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import Profile from './Components/Profile';
// import Signup from './Components/Signup';
// import Signin from './Components/Signin';
// import Create from './Components/CreatePost';
// import {reducer,initialState} from './userReducer';

// export const UserContext =createContext();

// const Routing = () =>{
//   const history = useHistory();
//   const {state,dispatch} = useContext(UserContext);
//   useEffect(()=>{
//     const user =JSON.parse(localStorage.getItem("user"))
//     if(user){
//       dispatch({type:"USER",payload:user})
      
//     }
//     else{
//       history.push('/signin')
//     }
//   },[])
//   return(
//     <Switch>
//       <Route exact path="/">
//           <Home/>
//      </Route>
//      <Route path="/signup">
//           <Signup/>
//      </Route>
//      <Route path="/signin">
//           <Signin/>
//      </Route>
//      <Route path="/profile">
//           <Profile/>
//      </Route>
//      <Route path="/create">
//           <Create/>
//      </Route>
//     </Switch>
//   )
// }

// function App() {
//   const [state,dispatch] = useReducer(reducer,initialState)
//   return (
//     <UserContext.Provider value={{state,dispatch}}>
    
//      <BrowserRouter>
//      <Navbar/>
//      <Routing/>
//      </BrowserRouter>
//      </UserContext.Provider>
//   );
// }

// export default App;

