import logo from './logo.svg';
import './App.css';
// import ControlledForm from './Components/ControlledForm/ControlledForm';
import TailwindComp from './Components/Tailwind/Tailwind';
import Comp from './Components/Comp';
import FileSelectComponent from './Components/FileSelectComponent';

function App() {
  return (
    <div className="App">
      {/* <ControlledForm/> */}
      {/* <NewComp/> */}
      {/* <TailwindComp /> */}
      <FileSelectComponent />
    </div>
  );
}

export default App;
