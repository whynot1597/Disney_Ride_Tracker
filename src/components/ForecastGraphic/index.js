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
import HourForecast from '../HourForecast'

const useStyles = makeStyles(theme => ({
    card: {
        minWidth: 200,
        backgroundColor: theme.palette.secondary.main,
        margin: theme.spacing(1),
    },
    title: {
        fontSize: 20,
    },
    pos: {
        marginBottom: 1,
    },
}));

const ForecastGraphic = props => {
    const forecast = props
    const forecastArray = forecast.results
    return (
        <div className="ForecastGraphic">
            <Grid container component='label'>
                {forecastArray.map(prediction => <HourForecast key={prediction.EpochDateTime} prediction={prediction} />)}
            </Grid>
        </div>
    )
}

export default ForecastGraphic
