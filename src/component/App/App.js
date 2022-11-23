import React from "react";
// import ReactDOM from 'react-dom/client';
import "./App.css";
// import "../Header/Header";
import Header from "../Header/Header";
import Card from "./Cards/Card/Card";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Card></Card>
    </div>
  );
}

export default App;
