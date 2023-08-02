import "./App.css";
import TargetTemp from "./components/TargetTemp";
function App() {
  const props = {
    min: 0,
    max: 100,
    temperature: 15,
  };
  return <TargetTemp {...props} />;
}

export default App;
