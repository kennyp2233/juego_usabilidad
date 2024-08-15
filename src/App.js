// App.js
import React, { useEffect, useState } from 'react';
import { SimulatorProvider } from './context/SimulatorContext';
import CentralMenu from './components/InteractiveMenu';
import { useSoundEffects } from './hooks/useSoundEffects';
import VideoFondo from './videos/fondo.mp4';
import GameScreen from './components/GameScreen';
import MenuButton from './components/MenuButton';
import AcercaDeScreen from './components/screens/AcercaDeScreen';
import ConfiguracionScreen from './components/screens/ConfiguracionesScreen';

import { SoundProvider } from './context/SonidoContext';
const App = () => {
  const { playAmbience } = useSoundEffects();

  const [soundInitialized, setSoundInitialized] = useState(false);



  return (
    <SoundProvider>
      <SimulatorProvider>

        <div className="app relative h-dvh bg-gray-100">
          <MenuButton />
          {/* Video de Fondo */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={VideoFondo} type="video/mp4" />
            Tu navegador no soporta el formato de video.
          </video>

          {/* Capa de Desenfoque */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm brightness-extra"></div>


          {/* Contenido Principal */}
          <div className="relative z-10">
            <CentralMenu />
            <div className="absolute h-dvh z-20 overflow-y-auto w-full p-20 flex flex-col justify-center items-center">

              <GameScreen />
              <AcercaDeScreen />
              <ConfiguracionScreen />
            </div>


            {/* Agrega más componentes o contenido aquí */}
          </div>
        </div>

      </SimulatorProvider>
    </SoundProvider>
  );
};

export default App;
