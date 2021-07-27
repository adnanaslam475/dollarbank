import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { counterAction } from '../../store/index';
import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles({
    root: {
        width: '100%'
    }
});




export default function Sliderr() {
    const dispatch = useDispatch();
    const val = useSelector(value => value.counter.value)
    const classes = useStyles();
    function valuetext(value) {
        dispatch(counterAction.sliderValue(value))
        return value
    }


    return (
        <div className={classes.root}>
            <Slider
                defaultValue={val}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={100}
                marks
                min={0}
                max={4000}
                style={{color:'#2774AE'}}
            />
            {console.log(val)}
        </div>
    );
}
