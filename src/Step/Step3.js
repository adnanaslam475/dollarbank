import { useSelector } from 'react-redux';
import CustomView from "../components/CustomView/CustomView";
import Options from '../components/Option/Option';
const Step3 = props => {
    const check = useSelector(state => state.counter.value);
    return (
        <div>
            {check > 0 &&

                <div>
                    <p>Here’s what we recommend, based on your preferences and needs…</p>
                    <CustomView title="Everything Checking" detail="$50 initial deposit required"
                        value={true} buttonName="Buy Now" value1="Schedule an Appointment" value2="Print Recommendation" />
                    <p style={{ margin: '2rem' }}>Why?</p>
                    <Options title="With the $3,000 average monthly balance you plan on keeping in the account, the service fee would be removed for you. You can also avoid the fee by making 6 payments a month." />
                    <Options title="You can potentially save on the rates for your Dollar Bank mortgage with this account" />
                    <Options title="Using the ATM is a common activity for you, and non-Dollar Bank usage won’t incur a fee from us" />
                    <Options title="You mentioned you might be writing checks, and this gets 50% off of check orders through us." />
                    <Options title="Earning money on your account is important for you, and balances over $1 accrue interest." />
                    <p style={{ margin: '2rem 0' }}>Your account relationship is most complete with a linked savings product… you can add this when you open your new account</p>
                    <CustomView title="Everything Checking" detail="$50 initial deposit required"
                        value={false} buttonName="Buy Now" value2="Account Details" />
                    <Options title="This account is free with a linked Everything Checking and makes it easy to set up automated transfers." />
                    <Options title="Optional automated transfers can be set up in case of an overdraft on your checking account. If it happens, we’ll pull any available funds in savings to cover and charge $10 (instead of our typical nonsufficient funds fee)" />
                </div>}
            {check == 0 &&

                <div>
                    <p style={{ margin: '2rem 0' }}>Want a second opinion? Here’s another good option for you.</p>
                    <CustomView title="Free Checking" detail="$50 initial deposit required" value={true} buttonName="Buy Now" value1="Schedule an Appointment"
                        value2="Print Recommendation" />
                    <p style={{ margin: '3rem' }}>Why?</p>
                    <Options title="Optional automated transfers can be set up in case of an overdraft on your checking account. If it happens, we’ll pull any available funds in savings to cover and charge $10 (instead of our typical nonsufficient funds fee" />
                </div>}
        </div>
    )
}
export default Step3;