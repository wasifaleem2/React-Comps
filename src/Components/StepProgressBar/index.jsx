import React, { useState } from 'react';
import HorizontalStepper from 'react-stepper-horizontal';

const StepProgressComp = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const steps = [{ title: 'Step 1' }, { title: 'Step 2' }, { title: 'Step 3' }, { title: 'Step 4' }];

  const handleStepChange = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="app">
      <HorizontalStepper
        steps={steps}
        activeStep={currentStep}
        completeBarColor="#007bff"
        circleFontSize={16}
        size={36}
        circleTop={-8}
        activeTitleColor="#007bff"
        completeTitleColor="#007bff"
        defaultTitleColor="#aaa"
        completeCircleColor="#007bff"
        activeCircleColor="#007bff"
        circleFontColor="#fff"
        onClick={(index) => handleStepChange(index)}
      />
    </div>
  );
};

export default StepProgressComp;



// StepProgressComp
