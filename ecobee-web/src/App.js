import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from "./LoginButton/LoginButton";
import LogoutButton from "./LogoutButton/LogoutButton";
import Profile from "./Profile/Profile";
import Hello from "./Hello/Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Hello></Hello>

        <Profile/>
        <LoginButton/>
        <LogoutButton/>
      </header>
    </div>
  );
}

export default App;
