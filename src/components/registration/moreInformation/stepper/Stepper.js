import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useSelector } from 'react-redux';

export default function ProgressMobileStepper() {
  const light = useSelector(state=>state.mode.light)

  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <MobileStepper
    className='infoStepper'
      variant="progress"
      
      steps={5}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 1300,
            flexGrow: 1,
            flex:1,justifyContent:"space-evenly",
            height:60,
            backgroundColor:light?"white":"#474747",
            color:"white" }}
      nextButton={
        <Button style={{color:light?"#474747":"white"}} size="small" onClick={handleNext} disabled={activeStep === 4}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button style={{color:light?"#474747":"white"}} size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
      }
    />
  );
}
