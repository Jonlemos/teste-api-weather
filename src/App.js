import React from 'react';
import './App.css';
import logo from './assets/logo.png'

function App() {
  return (
    <div className="container">
      <img className="logo" src={logo} alt="Logo da Página"/>
      <div className="content"> 
        <form>
          <label htmlFor="email">Buscar Previsão</label>
          <input type="email" id="email" placeholder="Buscar por cidade"/>
          <button className="btn" type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default App;
