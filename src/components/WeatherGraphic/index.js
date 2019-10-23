import React from 'react'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import iconArray from '../WeatherIcons'

const WeatherGraphic = props => {
    const { results } = props

    let isMetric = true

    const [state, setState] = React.useState({
        tempSymbol: 'C',
        system: 'Metric',
        currentTemp: '--',
        currentText: '--',
        currentIcon: undefined,
        feelTemp: '--',
        currentSpeed: '--',
        windSymbol: 'km/h',
    });
    const onChange = name => async event => {
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
        } catch(error) {
            alert('Please Refresh')
        }
    }
    return (
        <div className="WeatherGraphic">
            <Typography component="div">
                <Grid direction='row' spacing={0}>
                    <Grid container>
                        <Grid item xs={2}>Current Weather:</Grid>
                        <Grid item xs={4}>{state.currentTemp} °{state.tempSymbol}</Grid>
                        <Grid item xs={2}>{state.currentText}</Grid>
                        <Grid item xs={2}><img src={iconArray[state.currentIcon]} alt='Weather Icon'></img></Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>Real Feel:</Grid>
                        <Grid item xs={1}>{state.feelTemp} °{state.tempSymbol}</Grid>
                        <Grid item>Precipitation:</Grid>
                        <Grid item xs={1}></Grid>
                        <Grid item>Wind:</Grid>
                        <Grid item>{state.currentSpeed} {state.windSymbol}</Grid>
                    </Grid>
                    <Grid container>
                        
                    </Grid>
                    <Grid item>
                        <Grid component="label" container alignItems="right" spacing={0}>
                            <Grid item>Imperial (F, mph)</Grid>
                            <Grid item>
                                <Switch
                                    checked={state.isMetric}
                                    onChange={onChange()}
                                    value="isMetric"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />
                            </Grid>
                            <Grid item>Metric (C, km/h)</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
            <button onClick={onChange()}>Load</button>
            <hr />
        </div>
    )
}

export default WeatherGraphic
