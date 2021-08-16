import React, { Component } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import WeatherCard from "./WeatherCard";

class Weather extends Component {


    constructor(props) {
        super(props);
        this.state = { Weather: [], value: '', data: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleclick = this.handleclick.bind(this);

    }

    getWeatherState = response_data => {
        return "SUN"
    }

    getData = response_data => {
        const { humidity, temp, pressure, feels_like } = response_data.main;
        const feels_likeFloat = parseFloat(feels_like);
        const feels1 = feels_likeFloat - 273.15;
        const feels = parseInt(feels1);
        const tempfloat = parseFloat(temp);
        const temperatura1 = tempfloat - 273.15;
        const temperatura = parseInt(temperatura1);
        const { speed } = response_data.wind;
        const weatherStateTemp = this.getWeatherState(response_data);
        const { description } = response_data.weather[0];
        const name = response_data.name;

        const data = {
            name,
            weatherState: weatherStateTemp,
            temperatura,
            description,
            wind: `${speed} m/s`,
            pressure,
            humidity,
            feels,

        }
        return data;
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Weather')
            .then(response => response.json())
            .then(data => {
                const newData = this.getData(data);
                this.setState({ Weather: newData })
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    componentDidUpdate() {
        this.handleSubmit();
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    handleSubmit() {

        fetch(process.env.REACT_APP_API + 'Weather/' + this.state.value, {
            method: 'Get',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                const newData = this.getData(data);
                this.setState({ Weather: newData })
            })
    }

    handleclick() {
        this.setState({ data: this.state.data.concat(this.state.Weather) });
    }

    render() {
        const { Weather } = this.state;
        const { data } = this.state;
        return (
            <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                    <Grid item xs={12} sm={12} md={6}>
                    <form style={{ display: "flex", margin: "3rem" }}>
                        <TextField type="text" value={this.state.value} onChange={this.handleChange} style={{ marginRight: "3rem" }} />
                        <Button variant="contained" color="primary" onClick={this.handleclick} style={{ backgroundColor: "#76323F" }}>añadir</Button>
                    </form>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                    <WeatherCard
                        name={Weather.name}
                        temperatura={Weather.temperatura}
                        description={Weather.description}
                        wind={Weather.wind}
                        pressure={Weather.pressure}
                        humidity={Weather.humidity}
                        feels={Weather.feels}
                    />
                    </Grid>

                    

                    </Grid>
                    
                </div>

                <div style={{ display: "flex", margin: "2rem", backgroundColor: "#76323F", maxWidth: "18rem", borderRadius: "1rem", boxShadow: "1px 1px 2px gray" }}>
                    <Typography variant="h5" style={{ color: 'white', display: "flex", margin: "1rem" }}>weather cards added</Typography>
                </div>
                <div>
                    <Grid container>
                        {
                            data.map((weat) =>
                                <Grid item xs={12} sm={12} md={6} lg={4}>
                                    <WeatherCard
                                        name={weat.name}
                                        temperatura={weat.temperatura}
                                        description={weat.description}
                                        wind={weat.wind}
                                        pressure={weat.pressure}
                                        humidity={weat.humidity}
                                        feels={weat.feels}
                                    />
                                </Grid>

                            )
                        }
                    </Grid>
                </div>


            </div >
        )
    }
}

export default Weather;