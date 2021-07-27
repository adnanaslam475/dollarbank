import { Button } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import classes from './CustomView.module.scss';


const CustomView = props => {
    return (
        <div className={classes.Custom}>
            <div className={classes.CustomOption} >
                <PlayArrowIcon fontSize="large" style={{ color: '#2774AE' }} />
                <h3>{props.title}</h3>
            </div>
            <p>{props.detail}</p>
            {props.value &&
                <div className={classes.CustomOptionn}>
                    <Button className={classes.button}>
                        {props.buttonName}
                    </Button>
                    <a href="/" className={classes.aTag} >{props.value1}</a>
                </div>
            }
            <a href="/" className={classes.aTag} >{props.value2}</a>
        </div>
    )
}
export default CustomView;