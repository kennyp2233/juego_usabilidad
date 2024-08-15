
import LaboratoryScreen from "./screens/LaboratoryScreen";
import { useSimulator } from "../context/SimulatorContext";
export default function GameScreen() {

    const { gameMode, setGameMode, currentScreen, menuOpen, setMenuOpen } = useSimulator();
    if (currentScreen !== 'sandbox' || currentScreen !== 'intro') {
        return null;
    }
    return <LaboratoryScreen />;
}