import React from 'react';
import dartLogo from '../assets/dartlogo.png';
import './styles/loadingScreen.css';
const Loading = ({ onGameStart }) => {
  return (
    <div className="fair-loading-container">
      <div className="fair-lights"></div>
      <h1 className="fair-title">¡Espectáculo de Dardos!</h1>
      <div className="light-stripes"></div>
      <div className="fair-description-container">
        <img
          className="fade-in-image"
          src={dartLogo}
          alt="Dart Game Logo"
        />
        <p className="fair-description">
          Traido por Five Finance Thinkers
        </p>
        <button className="fair-start-button" onClick={onGameStart}>
          ¡Empecemos!
        </button>
      </div>
    </div>
  );
};

export default Loading;
