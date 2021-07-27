import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';

import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%'
    },
    backButton: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    stepIcon: {
        "&.MuiStepIcon-active": {
            color: "#2774AE"
        },
        "&.MuiStepIcon-completed": {
            color: "lightgray"
        },

    }
}));

function getSteps() {
    return ['STEP 1', 'STEP 2', 'STEP 3'];
}


const theme = createTheme({
    props: {
        MuiSvgIcon: {
            htmlColor: '#2774AE',
        }
    }
})


const HorizontalLabelPositionBelowStepper = (props) => {
    const activeStep = useSelector(state => state.counter.stepper);
    const classes = useStyles();
    const steps = getSteps();



    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label} >
                            <StepLabel style={{}}
                                StepIconProps={{
                                    classes: {
                                        root: classes.stepIcon
                                    }
                                }}
                            >{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </div >
        </ThemeProvider>
    );
}

export default HorizontalLabelPositionBelowStepper;
