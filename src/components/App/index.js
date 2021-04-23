import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import apiKey from "../../config";
import Search from "../Search";
import Nav from "../Nav";
import Gallery from "../Gallery";
import NotFound from "../Gallery/NotFound";

import styles from "./style.module.css";

class App extends Component {
    state = {
        data: [],
        query: "undefined",
    };

    componentDidMount() {
        this.performSearch(this.state.query);
    }

    performSearch = (query) => {
        fetch(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
            .then((response) => response.json())
            .then((responseData) =>
                this.setState((prevState) => {
                    return { ...prevState, data: responseData.photos.photo };
                })
            );
    };

    onSearchChange = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                query: event.target.value,
            };
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.performSearch(this.state.query);
        event.currentTarget.reset();
    };

    render() {
        return (
            <Router>
                <div className={styles.container}>
                    <Search
                        handleSubmit={this.handleSubmit}
                        onSearchChange={this.onSearchChange}
                    />
                    <Nav handlePageChange={this.handlePageChange} />

                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => <Redirect to="/dogs" />}
                        />

                        <Route
                            path="/cats"
                            render={() => (
                                <Gallery
                                    category="cats"
                                    data={this.state.data}
                                />
                            )}
                        />

                        <Route
                            path="/dogs"
                            render={() => (
                                <Gallery
                                    category="dogs"
                                    data={this.state.data}
                                />
                            )}
                        />

                        <Route
                            path="/computers"
                            render={() => (
                                <Gallery
                                    category="computers"
                                    data={this.state.data}
                                />
                            )}
                        />

                        <Route path="*" render={() => <NotFound />} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
