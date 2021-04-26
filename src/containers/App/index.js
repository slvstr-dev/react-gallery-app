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
            searchResults: [],
            cats: [],
            dogs: [],
            computers: [],
        },
        query: "",
        loading: true,
    };

    componentDidMount() {
        const isSearchPage = this.props.location.pathname.includes("/search");

        if (isSearchPage) {
            const query = this.props.location.search.replace(/\?query=/, "");

            if (query.length > 0) {
                this.performSearch(query, true);
            }
        } else {
            this.performSearch("coding", true);
        }

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
                query: event.target.value,
            };
        });
    };

    /**
     * Handle search request by fetching data and appending page to history
     * @param {Object} event
     */
    handleSearchSubmit = (event) => {
        event.preventDefault();
        this.performSearch(this.state.query, true);
        this.props.history.push(`/search?query=${this.state.query}`);
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
                        render={() =>
                            this.state.loading ? (
                                <h2>Loading...</h2>
                            ) : (
                                <Gallery data={this.state.data.searchResults} />
                            )
                        }
                    />

                    <Route
                        path={"/cats"}
                        render={() =>
                            this.state.loading ? (
                                <h2>Searching for cat images...</h2>
                            ) : (
                                <Gallery
                                    title="Cats"
                                    data={this.state.data.cats}
                                />
                            )
                        }
                    />

                    <Route
                        path="/dogs"
                        render={() =>
                            this.state.loading ? (
                                <h2>Searching for dogs images...</h2>
                            ) : (
                                <Gallery
                                    title="Dogs"
                                    data={this.state.data.dogs}
                                />
                            )
                        }
                    />

                    <Route
                        path="/computers"
                        render={() =>
                            this.state.loading ? (
                                <h2>Searching for computer images...</h2>
                            ) : (
                                <Gallery
                                    title="Computers"
                                    data={this.state.data.computers}
                                />
                            )
                        }
                    />

                    <Route
                        path="/search"
                        render={() =>
                            this.state.loading ? (
                                <h2>Searching for images...</h2>
                            ) : (
                                <Gallery
                                    title={this.props.location.search}
                                    data={this.state.data.searchResults}
                                />
                            )
                        }
                    />

                    <Route
                        render={() => (
                            <NotFound
                                title="404"
                                message="Sadly this page doesn't exist. Please use the navigation or search to paint your screen with some cool images!"
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
