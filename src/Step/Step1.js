import Dragger from '../components/Dragger/Dragger';
import Options from '../components/Option/Option';
import { Button } from '@material-ui/core';
import CheckBox from '../components/CheckBox/CheckBox';
import classes from './Step1.module.scss';

const Step1 = props => {
    return (
        <div>
            <h1>We’re Here to Find You a New Account</h1>
            <p>Think about how you like to bank. Which features matter most to you? Drag the features from the first column to the second, and
                rearrange to what’s most important. Don’t worry if something you need isn’t listed — it could be a feature all of our accounts offer, like
                convenient branches and Online and Mobile Banking features.
            </p>
            <div className={classes.Dragger}>

                <Dragger />
            </div >
            <div className={classes.CheckBox} >
                <CheckBox title="Getting my statement in the mail" />
                <CheckBox title="Earning interest on my balance" />
                <CheckBox title="Visiting an ATM to get cash" />
                <CheckBox title="Writing checks" />
            </div>
            <p style={{ marginBottom: '1rem', marginLeft: '2.5rem' }}>Quick reminder - all Dollar Bank accounts offer..</p>
            <Options title="Full-service banking from any of our convenient locations, and free Dollar Bank ATMs" />
            <Options title="Debit card with multiple design options Bank anywhere, anytime with Online and Mobile Banking, including mobilecheck deposit" />
            <Options title="Instantly pay friends and family electronically with Zelle" />
            <Options title="Pay your bills electronically from a centralised place with Online Bill Pay" />
            <div style={{ textAlign: 'center' }}>
                <Button onClick={props.nextStep} variant="contained"
                    className={classes.NextButton}>
                    Next Question
                </Button>
            </div>
        </div>
    )
}
export default Step1;