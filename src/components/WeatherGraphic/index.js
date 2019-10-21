import React from 'react'
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import iconArray from '../WeatherIcons'

const WeatherGraphic = props => {
    const { results } = props

    const [state, setState] = React.useState({
        isMetric: true,
        symbol: 'C',
        system: 'Metric',
        currentTemp: '--',
        currentText: '--',
        currentIcon: ''
    });
    const handleChange = name => event => {
        try {
            setState({ 
                ...state, 
                [name]: event.target.checked, 
                symbol: event.target.checked ? 'C' : 'F',
                system: event.target.checked ? 'Metric' : 'Imperial',
                currentTemp: event.target.checked ? results.Temperature.Metric.Value : results.Temperature.Imperial.Value, 
                currentText: results.WeatherText,                    currentIcon: results.WeatherIcon - 1,
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
                        <Grid item xs={2}>Current Weather</Grid>
                        <Grid item xs={4}>{state.currentTemp} °{state.symbol}</Grid>
                        <Grid item xs={2}>{state.currentText}</Grid>
                        <Grid item xs={2}><img src={iconArray[7]}></img></Grid>
                    </Grid>
                    <Grid item>
                        <Grid component="label" container alignItems="right" spacing={0}>
                            <Grid item>F</Grid>
                            <Grid item>
                                <Switch
                                    checked={state.isMetric}
                                    onChange={handleChange('isMetric')}
                                    value="isMetric"
                                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                                />
                            </Grid>
                            <Grid item>C</Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Typography>
            <hr />
        </div>
    )
}

export default WeatherGraphic
