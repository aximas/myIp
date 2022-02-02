import React from "react";
import './App.scss';
import MainContainer from "./components/Main/MainContainer";
import backImg from './../src/files/img/earth-from-space-feature.jpg';

function App() {
  return (
    <div className="app" style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8)), url("${backImg}")`}}>
      <MainContainer />
    </div>
  );
}

export default App;
