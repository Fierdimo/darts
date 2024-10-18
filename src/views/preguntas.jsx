import './styles/preguntas.css'; // Asegúrate de importar los estilos
import React, { useState } from 'react';

const Preguntas = ({ pregunta, onAnswer }) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);

  const handleSubmit = () => {
    if (respuestaSeleccionada !== null) {
      onAnswer(respuestaSeleccionada === pregunta.correcta);
    }
  };

  return (
    <div className="question-screen">
      {/* Imagen en la parte superior */}
      <div className="header-image">
        <img src="ruta/a/tu/imagen.jpg" alt="Responde para ganar" />
      </div>
      <h2 className="question-title">{pregunta.pregunta}</h2>
      <div className="options">
        {pregunta.respuestas.map((respuesta, index) => (
          <button
            key={index}
            className={`option-button ${respuestaSeleccionada === index ? 'selected' : ''}`}
            onClick={() => setRespuestaSeleccionada(index)}
          >
            {respuesta}
          </button>
        ))}
      </div>
      <button className="submit-button" onClick={handleSubmit}>
        Responder
      </button>
    </div>
  );
};

export default Preguntas;
