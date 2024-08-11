import React from 'react';
import { useSimulator } from '../context/SimulatorContext';
import IntroScreen from './screens/IntroScreen';
import SelectPeasScreen from './screens/SelectPeasScreen';
import LaboratoryScreen from './screens/LaboratoryScreen';

const NarrativeMode = () => {
  const { currentScreen } = useSimulator();

  switch (currentScreen) {
    case 'intro':
      return <IntroScreen />;
    case 'selectPeas':
      return <SelectPeasScreen />;
    case 'laboratory':
      return <LaboratoryScreen />;
    // Más casos según sea necesario
    default:
      return null;
  }
};

export default NarrativeMode;