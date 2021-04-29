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
            random: [],
            cats: [],
            dogs: [],
            computers: [],
            searchResults: [],
        },
        latestQuery: "",
        loading: true,
    };

    componentDidMount() {
        this.performSearch("random", false);
        this.performSearch("cats", false);
        this.performSearch("dogs", false);
        this.performSearch("computers", false);
    }

    /**
     * Fetch requested images from the Flickr API
     * @param {string} query
     * @param {boolean} isSearchQuery
     */
    performSearch = (query, isSearchQuery) => {
        this.setState((prevState) => {
            return {
                ...prevState,
                loading: true,
            };
        });

        fetch(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
            .then((response) => response.json())
            .then((responseData) =>
                this.setState((prevState) => {
                    const key = isSearchQuery ? "searchResults" : query;

                    return {
                        ...prevState,
                        data: {
                            ...prevState.data,
                            [key]: responseData["photos"]["photo"],
                        },
                        loading: false,
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
                            <Gallery
                                loading={this.state.loading}
                                latestQuery="/"
                                data={this.state.data.random}
                            />
                        )}
                    />

                    <Route
                        exact
                        path={"/cats"}
                        render={() => (
                            <Gallery
                                loading={this.state.loading}
                                latestQuery="Cats"
                                data={this.state.data.cats}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/dogs"
                        render={() => (
                            <Gallery
                                loading={this.state.loading}
                                latestQuery="Dogs"
                                data={this.state.data.dogs}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/computers"
                        render={() => (
                            <Gallery
                                loading={this.state.loading}
                                latestQuery="Computers"
                                data={this.state.data.computers}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/search/:query"
                        render={() => (
                            <Gallery
                                loading={this.state.loading}
                                data={this.state.data.searchResults}
                                latestQuery={this.state.latestQuery}
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
