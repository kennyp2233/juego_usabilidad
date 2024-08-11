// App.js
import React from 'react';
import { SimulatorProvider } from './context/SimulatorContext';
import CentralMenu from './components/InteractiveMenu';

const App = () => {

  return (
    <SimulatorProvider>
      <div className="app relative min-h-screen bg-gray-100">
        {/* Video de Fondo */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
        >
          <source src="/fondo.mp4" type="video/mp4" />
          Tu navegador no soporta el formato de video.
        </video>

        {/* Capa de Desenfoque */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-lg brightness-extra"></div>


        {/* Contenido Principal */}
        <div className="relative z-10">
          <CentralMenu />
          {/* Agrega más componentes o contenido aquí */}
        </div>
      </div>

    </SimulatorProvider>
  );
};

export default App;
