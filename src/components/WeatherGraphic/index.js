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
        minWidth: 200,
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    },
    title: {
        fontSize: 20,
    },
}));

const WeatherGraphic = props => {
    const { results } = props

    let isMetric = false

    const [state, setState] = React.useState({
        tempSymbol: 'F',
        system: 'Imperial',
        currentTemp: '--',
        currentText: '--',
        currentIcon: undefined,
        feelTemp: '--',
        currentSpeed: '--',
        windSymbol: 'mph',
    });
    const handleChange = name => event => {
        try {
            isMetric = event.target.checked
            setState({
                ...state,
                tempSymbol: isMetric ? 'C' : 'F',
                currentTemp: isMetric ? results.Temperature.Metric.Value : results.Temperature.Imperial.Value,
                feelTemp: isMetric ? results.RealFeelTemperature.Metric.Value : results.RealFeelTemperature.Imperial.Value,
                currentText: results.WeatherText,
                currentIcon: results.WeatherIcon - 1,
                windSymbol: isMetric ? 'km/h' : 'mph',
                currentSpeed: isMetric ? results.Wind.Speed.Metric.Value : results.Wind.Speed.Imperial.Value,
            })
        } catch (error) {
            alert('Please Refresh')
        }
    }
    const classes = useStyles();

    return (
        <div className="WeatherGraphic">
            <Typography component="div" align='center'>
                <Grid container justify='center'>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Current Weather
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

                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Real Feel
                            </Typography>
                        <Typography variant="h5" component="h2">
                            {state.feelTemp} °{state.tempSymbol}
                        </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Wind
                            </Typography>
                        <Typography variant="h5" component="h2">
                            {state.currentSpeed} {state.windSymbol}
                        </Typography>
                    </CardContent>
                    <CardActions>

                    </CardActions>
                </Card>
                <Grid component="label" container alignItems="right" spacing={0}>
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
                </Grid>
            </Grid>
            </Typography>
        </div>
    )
}

export default WeatherGraphic
