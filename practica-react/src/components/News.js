import React, { Component } from "react";

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = { News: [] }
    }



    getData = response_data => {

        
        const articles = response_data.articles;
        const News = null;



        const data = {
            articles,
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
        this.refreshList();
    }


    render() {

        const { News } = this.state;

        return (
            <div>
                {News.author}
            </div>
        )
    }
}

export default Weather;