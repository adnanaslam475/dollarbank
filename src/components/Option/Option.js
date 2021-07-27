import React from 'react'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import classes from './Option.module.scss';
const Options = props => {
    return (
        <div className={classes.Option} >
            <CheckCircleIcon className={classes.CircleIcon} />
            <p>{props.title}</p>
        </div>

    )
}
export default Options;