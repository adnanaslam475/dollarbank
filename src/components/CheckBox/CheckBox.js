import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const CheckBox = props => {
    return (
        <FormControlLabel style={{ alignItems: 'flex-start' }}
            control={
                <Checkbox
                    name="checkedB"
                    color="primary"
                    style={{color:'#2774AE'}}
                />
            }
            label={<p>{props.title}</p>}
        />
    )
}
export default CheckBox;