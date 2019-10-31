import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import iconArray from '../WeatherIcons'

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 100,
        minHeight: 200,
        backgroundColor: theme.palette.primary.main,
        margin: theme.spacing(.2),
    },
    title: {
        fontSize: 20,
    },
}));

const HourForecast = props => {
    const { prediction } = props
    console.log(prediction)

    let isMetric = false

    const [state, setState] = React.useState({
        tempSymbol: 'F',
        currentTemp: '--',
        currentText: '--',
        currentIcon: undefined,
        currentTime: '--'
    });
    const formatTime = timeString => {
        const timeObject = new Date(timeString)
        let hours = timeObject.getHours()
        let AMorPM = null
        if (hours > 12) {
            AMorPM = 'PM'
            hours = hours % 12
        } else {
            AMorPM = 'AM'
        }
        return `${hours} ${AMorPM}`
    }
    const handleChange = name => event => {
        try {
            isMetric = event.target.checked
            const formatedTime = formatTime(prediction.DateTime)
            setState({
                ...state,
                currentTime: formatedTime,
                currentTemp: prediction.Temperature.Value,
                currentText: prediction.WeatherText,
                currentIcon: prediction.WeatherIcon - 1,
            })
        } catch (error) {
            console.log(error)
            alert('Please Refresh')
        }
    }
    const classes = useStyles() 
    return (
        <div className="WeatherGraphic">
            <Typography component="div" align='center'>
                <Grid container>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {state.currentTime}
                            </Typography>
                        <Typography variant="h5" component="h2">
                            {state.currentTemp} °{state.tempSymbol}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            <img src={iconArray[state.currentIcon]} />
                        </Typography>
                        <Typography variant="subtitle1" component="h2">
                            {state.currentText}
                        </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                {/* <Grid component="label" container alignItems="right" spacing={0}>
                    <Grid item>Imperial (F, mph)</Grid>
                    <Grid item>
                        <Switch
                            checked={state.isMetric}
                            onChange={handleChange()}
                            value="isMetric"
                            inputProps={{ 'aria-label': 'checkbox with default color' }}
                        />
                    </Grid>
                    <Grid item>Metric (C, km/h)</Grid>
                </Grid> */}
            </Grid>
            </Typography>
        </div>
    )
}

export default HourForecast
