import logo from "./logo.svg";
import "./App.css";
// import ControlledForm from './Components/ControlledForm/ControlledForm';
import TailwindComp from "./Components/Tailwind/Tailwind";
import Comp from "./Components/Comp";
import FileSelectComponent from "./Components/FileSelectComponent";
import Rocket from "./Components/Rocket";
import SecondStepper from "./Components/SecondStepper";
import GoogleLoginComp from "./Components/GoogleLogin";
import { GoogleOAuthProvider } from '@react-oauth/google';


// "react-step-progress": "^1.0.3",
// "react-step-progress-bar": "^1.0.3",
// "react-stepper-horizontal": "^1.0.11",
function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider>
        {/* <ControlledForm/> */}
        {/* <NewComp/> */}
        {/* <TailwindComp /> */}
        {/* <FileSelectComponent /> */}
        {/* <Rocket /> */}
        {/* <StepProgressComp /> */}
        {/* <SecondStepper /> */}
        <GoogleLoginComp />
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
