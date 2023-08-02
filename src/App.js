import "./App.css";
import TargetTemp from './components/TargetTemp'
function App() {
  const props = {
    min: 2,
    max: 100,
    temperature: 70,
  };
  return <TargetTemp{...props} />;
}

export default App;
