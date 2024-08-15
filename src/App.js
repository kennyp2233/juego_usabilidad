// App.js
import React, { useEffect, useState } from 'react';
import { SimulatorProvider } from './context/SimulatorContext';
import CentralMenu from './components/InteractiveMenu';
import { useSoundEffects } from './hooks/useSoundEffects';
import VideoFondo from './videos/fondo.mp4';
import GameScreen from './components/GameScreen';
import MenuButton from './components/MenuButton';
import AcercaDeScreen from './components/screens/AcercaDeScreen';
const App = () => {
  const { playAmbience } = useSoundEffects();

  const [soundInitialized, setSoundInitialized] = useState(false);

  useEffect(() => {
    // Si el sonido ya fue inicializado, no hacemos nada.
    if (soundInitialized) return;

    playAmbience();
  }, [soundInitialized, playAmbience]);

  return (
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
          </div>


          {/* Agrega más componentes o contenido aquí */}
        </div>
      </div>

    </SimulatorProvider>
  );
};

export default App;
