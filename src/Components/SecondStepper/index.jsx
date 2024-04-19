import React, { useState } from 'react';
import { Step, StepGroup, Stepper } from '@cimpress/react-components';

const SecondStepper = () => {
  const [activeStep, setActiveStep] = useState('4');
  const [verticalActiveStep, setVerticalActiveStep] = useState('0');

  const setStep = (index) => {
    setActiveStep(index);
  };

  const setVerticalStep = (index) => {
    setVerticalActiveStep(index);
  };

  const checkmarkIcon = '✓';

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step onClick={() => setStep('1')}>
          <div>Step One</div>
          <small>A step</small>
        </Step>
        <Step onClick={() => setStep('2')}>
          <div>Step Two</div>
          <small>It's another step!</small>
        </Step>
        <Step onClick={() => setStep('3')} tip="Lorem ipsum tipsum">
          <div>Step Three</div>
          <small>A third step</small>
        </Step>
      </Stepper>

      <h5>Another stepper...</h5>
      <div style={{ width: '200px' }}>
        <Stepper small activeStep="3" status="warning">
          <Step name="order accepted" tip="Order accepted by the platform" />
          <Step name="doc review" tip="Document successfully rendered" />
          <Step name="inventory" tip="Inventory check passed" />
          <Step name="processing" tip="Order processed" />
          <Step name="production" tip="In production" tipDirection="bottom" />
          <Step name="shipped" tip="Shipped" />
        </Stepper>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginTop: '10px' }}>
        <div>
          <h5>Vertical Stepper with SubSteps</h5>
          <p>Nested steps with a StepGroup are only supported for full-sized vertical steppers.</p>
          <div style={{ height: '330px' }}>
            <Stepper activeStep={verticalActiveStep} vertical>
              <Step>
                <div>Step One</div>
              </Step>
              <Step>
                <div>Step Two</div>
              </Step>
              <Step>
                <div>Step Two</div>
              </Step>
              <Step>
                <div>Step Two</div>
              </Step>
              <Step >
                <div>Step Two</div>
              </Step>
              <Step icon={checkmarkIcon}>
                <div>Step With Custom Icon</div>
              </Step>
            </Stepper>
          </div>
        </div>
        <div style={{ height: '550px' }}>
          <h5>Small Vertical Stepper</h5>
          <div style={{ height: '250px' }}>
            <Stepper small vertical activeStep="4" partial status="warning">
              <Step name="order accepted" tip="Order accepted by the platform" tipDirection="right" />
              <Step name="doc review" tip="Document successfully rendered" tipDirection="right" />
              <Step name="inventory" tip="Inventory check passed" tipDirection="right" />
              <Step name="processing" tip="Order processed" tipDirection="right" />
              <Step name="production" tip="In production" tipDirection="right" />
              <Step name="shipped" tip="Shipped" tipDirection="right" />
            </Stepper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStepper;
