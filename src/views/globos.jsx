import './styles/baloonGame.css';
import React, { useState } from 'react';

const colors = [
  '#FF5733', // Rojo
  '#33FF57', // Verde
  '#3357FF', // Azul
  '#FF33A1', // Rosa
  '#FFCC33', // Amarillo
  '#33FFF3', // Turquesa
  '#B733FF', // Morado
  '#FF5733', // Rojo
  '#57FF33', // Verde claro
  '#FF3333', // Rojo claro
];

const Globos = ({ onBalloonClick, poppedBalloons, setPoppedBalloons, premiosSeleccionados }) => {
  const handleBalloonClick = (index) => {
    const acierto = Math.random() < 0.3; // Probabilidad de acertar
    const newPoppedBalloons = [...poppedBalloons];
    newPoppedBalloons[index] = true; // Marca el globo como explotado
    setPoppedBalloons(newPoppedBalloons);

    // Invoca la función pasada por props para manejar el resultado
    onBalloonClick(acierto);
  };

  return (
    <div className="game-container">
      <div className="balloons-grid">
        {poppedBalloons.map((popped, index) => (
          <div
            key={index}
            className={`balloon ${popped ? 'popped' : ''}`}
            onClick={() => !popped && handleBalloonClick(index)} // Solo se puede hacer clic si no está explotado
            style={balloonStyle}
          >
            {!popped && (
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="750"
                height="100"
                viewBox="0 0 779.000000 1280.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                  fill={colors[index % colors.length]}
                  stroke="none"
                >
                  <path
                    d="M3670 12794 c-125 -8 -396 -46 -540 -75 -744 -154 -1417 -516 -1956
           -1054 -309 -309 -534 -615 -719 -980 -460 -905 -573 -2059 -325 -3331 119
           -616 415 -1505 754 -2272 471 -1064 1157 -2250 1631 -2822 104 -126 300 -325
           403 -412 165 -138 382 -266 534 -314 43 -13 58 -22 58 -36 0 -10 -89 -109
           -203 -226 -211 -216 -286 -308 -343 -427 -48 -98 -47 -141 5 -188 74 -66 256
           -99 445 -79 139 15 217 36 382 106 175 73 223 85 409 97 91 6 175 17 194 25
           32 14 36 13 60 -9 14 -13 54 -43 87 -65 86 -57 91 -77 44 -163 -33 -61 -38
           -114 -15 -159 19 -37 55 -56 159 -85 104 -28 129 -42 121 -63 -16 -43 -17
           -109 -1 -140 37 -72 135 -104 364 -117 l122 -8 0 85 0 85 -117 7 c-112 6 -198
           18 -208 28 -3 2 0 20 5 38 31 107 -64 196 -250 233 -30 6 -56 11 -57 12 -1 1
           9 28 22 61 29 71 31 115 6 169 -23 49 -54 78 -138 130 -37 22 -79 58 -95 81
           -30 42 -30 42 -57 262 -21 172 -120 270 -310 307 -36 7 -59 15 -51 18 8 3 51
           17 95 32 530 181 1110 797 1817 1930 706 1134 1231 2297 1553 3440 95 338 168
           745 211 1190 27 276 25 824 -4 1088 -84 752 -282 1332 -637 1872 -521 790
           -1311 1362 -2220 1605 -315 85 -576 120 -925 124 -135 2 -274 2 -310 0z m459
           -11360 c142 -47 214 -123 227 -240 l6 -59 -28 31 c-16 17 -56 53 -89 80 -118
           95 -232 214 -205 214 6 0 46 -12 89 -26z"
                  />
                </g>
              </svg>
            )}
            {/* {popped && <div className="particles"></div>} */}
          </div>
        ))}
      </div>
      <div className="premios-container">
        {premiosSeleccionados.map((premio, index) => (
          <div key={index} className="premio-item">
            <img src={premio.imagen} alt={premio.nombre} />
            <p>{premio.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(10, 1fr)', // 10 columnas
  gap: '10px', // Espacio entre los globos
  width: '80%', // Asegura que ocupe el 100% del contenedor
  height: '100vh', // Ocupa la altura total de la ventana
  position: 'relative', // Para que las partículas aparezcan correctamente
};

const balloonStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  cursor: 'pointer',
  overflow: 'hidden',
};

export default Globos;
