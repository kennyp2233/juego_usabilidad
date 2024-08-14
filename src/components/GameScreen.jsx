
import LaboratoryScreen from "./screens/LaboratoryScreen";
import { useSimulator } from "../context/SimulatorContext";
export default function GameScreen() {
    const { currentScreen } = useSimulator();

    if (currentScreen === 'sandbox') {
        return <LaboratoryScreen />;
    }
    return null;
}