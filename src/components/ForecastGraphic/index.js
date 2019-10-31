import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import HourForecast from '../HourForecast'

const ForecastGraphic = props => {
    const forecast = props
    const forecastArray = forecast.results
    return (
        <div className="ForecastGraphic">
            <h2>Forecast</h2>
            <Grid container justify='center'>
                {forecastArray.map(prediction => <HourForecast key={prediction.EpochDateTime} prediction={prediction} />)}
            </Grid>
        </div>
    )
}

export default ForecastGraphic
