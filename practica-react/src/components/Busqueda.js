import React, {Component} from "react";

class Busqueda extends Component{

    constructor(props){
        super(props);
        this.state={Weather:[]}
      }

      getWeatherState = response_data =>{
          return "SUN"
      }

      getData= response_data => {
          const {humidity, temp} =response_data.main;
          const {speed} = response_data.wind;
          const weatherStateTemp = this.getWeatherState(response_data);

          const data = {
              humidity,
              temp,
              weatherState: weatherStateTemp,
              wind: `${speed} m/s`
          }
          return data;
      }
    
      refreshList(){
        fetch(process.env.REACT_APP_API+'Weather')
        .then(response=>response.json())
        .then(data => {
            const newData = this.getData(data);
            this.setState({Weather: newData})
        })
      }

      componentDidMount(){
          this.refreshList();
      }

      componentDidUpdate(){
          this.refreshList();
      }


    render(){

        const {Weather} =this.state;
        
        return(
            <div>
                {Weather.wind}
            </div>
        )
    }
}

export default Busqueda;