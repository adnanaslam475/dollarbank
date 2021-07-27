import Slider from '../components/Slider/Slider';
import { Button } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
import classes from './Step2.module.scss';

const Step2 = props => {
    return (
        <div>
            <h1>We’re Here to Find You a New Account</h1>
            <p>Dollar Bank has minimal account fees, and many can be reduced with either maintaining an average
                monthly collected balance or performing activities, like using your account to make payments.
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                <p>How much would you typically keep in your checking account</p>
                <HelpIcon fontSize="large"
                    style={{ color: '#2774AE' }} />
            </div>
            <div className={classes.SliderTop}>
                <div style={{
                    display: 'flex', justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <p className={classes.para}>$0    </p>
                    <p className={[classes["para"], classes["check1"]].join(' ')} >$2,500</p>
                    <p className={[classes["para"], classes["check1"]].join(' ')}>$4,000+</p>
                </div>
                <Slider  />
                <div className={classes.SliderButtom}>
                    <p className={classes.para}>Some free options</p>
                    <p className={[classes["para"], classes["check"]].join(' ')} >All free options</p>
                    <p className={classes.para}>                      </p>
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>


                <Button onClick={props.nextStep} variant="contained" className={classes.Button}>
                    Show me my Recommendation
                </Button>
            </div>
        </div>
    )
}
export default Step2;