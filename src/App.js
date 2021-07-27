import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from './store/index';
import Stepper from './components/Stepper/Stepper';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import PrintIcon from '@material-ui/icons/Print';
import ListAltIcon from '@material-ui/icons/ListAlt';
import Step1 from './Step/Step1';
import Step2 from './Step/Step2';
import Step3 from './Step/Step3';
import classes from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();
  const stepper = useSelector(state => state.counter.stepper)
  const nextStepHandler = (props) => {
    dispatch(counterAction.handleNext())
  }
  const backStepHandler = (props) => {
    dispatch(counterAction.handlerBack())
  }

  return (
    <div className={classes.Screen}>
      {(stepper == 2 || stepper == 1) ?
        <div className={classes.NavigationOption}>
          <div className={classes.NavButton} onClick={backStepHandler}>
            <ArrowBackIosIcon />
            <p className={classes.IconLabel}>Back</p>
          </div>
          {stepper == 2 &&
            <div className={classes.NavButton}>
              <div className={classes.NavButton}>
                <PrintIcon className={classes.icn} />
                <p className={classes.IconLabel}>Print</p>
              </div>
              <div className={classes.NavButton}>
                <ListAltIcon className={classes.icn} />
                <p className={classes.IconLabel}>Schedule Appointment</p>
              </div>
            </div>
          }
        </div> : null
      }
      {/* Stepper function show steps on screen */}
      <div className={classes.Stepper}>
        <Stepper />
      </div>
      {/* Firststep */}
      {(stepper == 0) ? <Step1 nextStep={nextStepHandler} /> : null
      }
      {/* Secondstep */}
      {(stepper == 1) ? <Step2 nextStep={nextStepHandler} /> : null
      }
      {/* Thirdstep */}
      {(stepper == 2) ?
        <Step3 /> : null
      }
    </div>
  );
}

export default App;
