import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";


  function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

 function Greeting(props){
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting {...props}/>;
  }
  return <GuestGreeting {...props}/>;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);