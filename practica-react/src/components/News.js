import React, { Component } from "react";
import { Typography, TextField,  Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { Message } from "@material-ui/icons";

class News extends Component {

    constructor(props) {
        super(props);
        this.state = { News: [], value: ''};
        this.handleChange = this.handleChange.bind(this);
    }



    getData = response_data => {


        const articles = response_data.articles;
        const articulos = []
        for (let i = 0; i < 10; i++) {
            articulos[i] = articles[i]
        }

        return articulos;
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
    componentDidUpdate(){
        this.handleSubmit();
    }


    handleChange(event) {
        this.setState({ value: event.target.value });
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
            <div style={{ margin: "2rem", padding: "1rem", backgroundColor: "#a19185", borderRadius: "1rem", boxShadow: "1px 1px 2px gray" }}>
                <Typography variant="h4" style={{ color: 'white', display: "flex", margin: "1rem" }}>News</Typography>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                    <Grid container style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                        <Grid item xs={12} sm={12} md={6}>
                            <form style={{ display: "flex", margin: "3rem" }}>
                                <TextField type="text" value={this.state.value} onChange={this.handleChange} style={{ marginRight: "3rem" }} />
                            </form>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                        </Grid>



                    </Grid>

                </div>

                <div style={{ display: "flex", margin: "2rem", backgroundColor: "#76323F", borderRadius: "1rem", boxShadow: "1px 1px 2px gray" }}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant="h5" style={{ color: 'white', display: "flex", margin: "1rem" }}>News</Typography>

                        </Grid>

                        <Grid item xs={12}>
                            <div style={{ margin: "3rem" }}>
                                <Grid container >
                                    {
                                        
                                        News.map((noti) =>
                                                <Grid item xs={12} sm={12} md={6} lg={4} spacing={2}>
                                                <NewsCard
                                                    author={noti.author}
                                                    description={noti.description}
                                                    publishedAt={noti.publishedAt}
                                                    title={noti.title}
                                                    url={noti.url}
                                                    urlToImage={noti.urlToImage}
                                                    content={noti.content}
                                                />
                                            </Grid>
                                        
                                            

                                        )
                                    }

                                </Grid>
                            </div>

                        </Grid>

                    </Grid>
                </div>


            </div >
        )
    }
}

export default News;