import React from "react";
import NavBar from "./components/NavBar";
//import photoURL from "./assets/favicon.ico";
import { useValue } from "./context/ContextProvider";
import './App.css'
import CustomNavbar from "./components/CustomNavbar"
import Login from "./components/user/Login";
import Signin from "./components/user/Signin";
import Loading from "./components/Loading";
import Notification from "./components/Notification";
import Content from './components/Content';
import Footer from "./Footer";

//const user = { name: "test", photoURL };

const App = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();
  return (
    <div >
      <Loading />
      <Notification />
      <Login />
      <Signin />
      {!currentUser ? (
        <div className="container">
          <NavBar />
          <button
            className="log-in"
            onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
          >
            Explore <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      ) : (
        <>
        <CustomNavbar/>
       <Footer />
        </>
       
      )}
      
    </div>
  );
};

export default App;
