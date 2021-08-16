import React, { Component } from "react";
import { Button, TextField, Typography } from "@material-ui/core";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = { Weather: [], value: '' };
        this.handleChange = this.handleChange.bind(this);

    }

    getWeatherState = response_data => {
        return "SUN"
    }

    getData = response_data => {
        var today = new Date();
        var hour = today.getHours() + ":" + today.getMinutes();

        const { humidity, temp, pressure, feels_like } = response_data.main;
        const feels_likeFloat = parseFloat(feels_like);
        const feels = feels_likeFloat - 273.15;
        const tempfloat = parseFloat(temp);
        const temperatura = tempfloat - 273.15;

        const { speed, deg } = response_data.wind;
        const weatherStateTemp = this.getWeatherState(response_data);
        const { description } = response_data.weather[0];
        const name = response_data.name;

        const data = {
            hour,
            temperatura,
            description,
            wind: `${speed} m/s`,
            deg,
            pressure,
            humidity,
            feels,
            name,
            weatherState: weatherStateTemp,

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
        this.setState({value: event.target.value});
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


    render() {

        const { Weather } = this.state;

        return (
            <div>
                <form >
                <TextField type="text" value={this.state.value} onChange={this.handleChange} />
                <Button variant="contained" color="primary" type="submit" onClick={this.componentDidUpdate}>Buscar</Button>
                <Typography>Es: {Weather.wind}</Typography>
                </form>


            </div >
        )
    }
}

export default Weather;