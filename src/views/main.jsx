import React, { useState } from 'react';
import Loading from './loading';
import Globos from './globos';
import Preguntas from './preguntas';
import Premios from './premios';

import preguntasJSON from '../questions.json';

const Main = () => {
  const [fase, setFase] = useState('inicio'); // inicio, globos, pregunta, premio
  const [preguntaActual, setPreguntaActual] = useState(null);
  const [jugadores, setJugadores] = useState([]);
  const [poppedBalloons, setPoppedBalloons] = useState(Array(50).fill(false)); // 100 globos (10x10)
  const [premiosDisponibles, setPremiosDisponibles] = useState([
    { nombre: 'Premio A', valor: 100 },
    { nombre: 'Premio B', valor: 200 },
    { nombre: 'Premio C', valor: 300 },
  ]);
  const [premiosSeleccionados, setPremiosSeleccionados] = useState([]);
  const handlePremioSeleccionado = (premio) => {
    // Agregar el premio seleccionado al estado
    setPremiosSeleccionados((prev) => [...prev, premio]);

    // Eliminar el premio de los disponibles
    setPremiosDisponibles((prev) =>
      prev.filter((p) => p.nombre !== premio.nombre),
    );

    setFase('globos');
  };

  const handleGameStart = () => {
    setFase('globos');
  };

  const handleBalloonClick = (acierto) => {
    if (acierto) {
      const preguntaAleatoria =
        preguntasJSON[Math.floor(Math.random() * preguntasJSON.length)];
      setPreguntaActual(preguntaAleatoria);
      setFase('pregunta');
    }
  };

  const handleAnswer = (correcta) => {
    if (correcta) {
      setFase('premio');
    } else {
      setFase('globos');
    }
  };

  return (
    <div className="game-container">
      {fase === 'inicio' && <Loading onGameStart={handleGameStart} />}
      {fase === 'globos' && (
        <Globos
          onBalloonClick={handleBalloonClick}
          poppedBalloons={poppedBalloons}
          setPoppedBalloons={setPoppedBalloons}
          premiosSeleccionados={premiosSeleccionados}
        />
      )}
      {fase === 'pregunta' && preguntaActual && (
        <Preguntas pregunta={preguntaActual} onAnswer={handleAnswer} />
      )}
      {fase === 'premio' && (
        <Premios
          onPremioSeleccionado={handlePremioSeleccionado}
          premiosDisponibles={premiosDisponibles}
        />
      )}
    </div>
  );
};

export default Main;
