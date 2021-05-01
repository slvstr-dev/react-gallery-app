import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { Search } from "../../components/Search";
import { Nav } from "../../components/Nav";
import { Gallery } from "../../components/Gallery";
import { NotFound } from "../../components/NotFound";

import { apiKey } from "../../config";

import styles from "./style.module.css";

/**
 * React Gallery App
 */
class App extends Component {
    state = {
        data: {
            random: {
                images: [],
                loading: true,
            },
            cats: {
                images: [],
                loading: true,
            },
            dogs: {
                images: [],
                loading: true,
            },
            computers: {
                images: [],
                loading: true,
            },
            searchResults: {
                images: [],
                loading: true,
            },
        },
        latestQuery: "",
    };

    componentDidMount() {
        this.performSearch("random", false);
        this.performSearch("cats", false);
        this.performSearch("dogs", false);
        this.performSearch("computers", false);
    }

    /**
     * Fetch requested images from the Flickr API
     * @param query
     * @param isSearchQuery
     */
    performSearch = (query, isSearchQuery) => {
        const queryData = isSearchQuery ? "searchResults" : query;

        this.setState((prevState) => {
            return {
                ...prevState,
                data: {
                    ...prevState.data,
                    [queryData]: {
                        ...prevState.data[queryData],
                        loading: true,
                    },
                },
            };
        });

        fetch(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
            .then((response) => response.json())
            .then((responseData) =>
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        data: {
                            ...prevState.data,
                            [queryData]: {
                                images: responseData["photos"]["photo"],
                                loading: false,
                            },
                        },
                    };
                })
            )
            .catch((error) => {
                console.error("Fetching data failed: ", error);
            });
    };

    /**
     * Set state of query on search input change
     * @param {Object} event
     */
    onSearchInputChange = (event) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                latestQuery: event.target.value,
            };
        });
    };

    /**
     * Handle search request by fetching data and appending page to history
     * @param {Object} event
     */
    handleSearchSubmit = (event) => {
        event.preventDefault();
        this.performSearch(this.state.latestQuery, true);
        this.props.history.push(`/search/${this.state.latestQuery}`);
        event.currentTarget.reset();
    };

    render() {
        return (
            <div className={styles.container}>
                <Search
                    handleSearchSubmit={this.handleSearchSubmit}
                    onSearchInputChange={this.onSearchInputChange}
                />

                <Nav />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Gallery queryData={this.state.data.random} />
                        )}
                    />

                    <Route
                        exact
                        path={"/cats"}
                        render={() => (
                            <Gallery queryData={this.state.data.cats} />
                        )}
                    />

                    <Route
                        exact
                        path="/dogs"
                        render={() => (
                            <Gallery queryData={this.state.data.dogs} />
                        )}
                    />

                    <Route
                        exact
                        path="/computers"
                        render={() => (
                            <Gallery queryData={this.state.data.computers} />
                        )}
                    />

                    <Route
                        exact
                        path="/search/:query"
                        render={() => (
                            <Gallery
                                queryData={this.state.data.searchResults}
                                performSearch={this.performSearch}
                            />
                        )}
                    />

                    <Route render={() => <NotFound />} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
