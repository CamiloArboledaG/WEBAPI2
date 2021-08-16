import React, { Component } from "react";
import { Typography, TextField, Button } from "@material-ui/core";

class News extends Component {

    constructor(props) {
        super(props);
        this.state = { News: [] };
        this.handleChange = this.handleChange.bind(this);
    }



    getData = response_data => {

        
        const articles = response_data.articles;
        const articulos= articles[0];
        const autor = articulos.author;

        const data = {
            autor,
        }
        return data;
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'News')
            .then(response => response.json())
            .then(data => {
                const newData = this.getData(data);
                this.setState({ News: newData })
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
        
        fetch(process.env.REACT_APP_API + 'News/' + this.state.value, {
            method: 'Get',
            header: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
            .then(data => {
                const newData = this.getData(data);
                this.setState({ News: newData })
            })
    }


    render() {

        const { News } = this.state;

        return (
            <div>
                <TextField type="text" value={this.state.value} onChange={this.handleChange} />
                <Button variant="contained" color="primary" type="submit" onClick={this.componentDidUpdate}>Buscar</Button>
                <Typography>Es: {News.autor}</Typography>
                
            </div>
        )
    }
}

export default News;