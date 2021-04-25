import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import { apiKey } from "../../config";
import { Search } from "../../components/Search";
import { Nav } from "../../components/Nav";
import { Gallery } from "../../components/Gallery";
import { NotFound } from "../../components/Gallery/NotFound";

import styles from "./style.module.css";

class App extends Component {
    state = {
        data: {
            searchResults: [],
            cats: [],
            dogs: [],
            computers: [],
        },
        query: "",
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

        this.performSearch("cats");
        this.performSearch("dogs");
        this.performSearch("computers");
    }

    performSearch = (query, isSearchQuery) => {
        fetch(
            `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        )
            .then((response) => response.json())
            .then((responseData) =>
                this.setState((prevState) => {
                    const key = isSearchQuery ? "searchResults" : query;

                    return {
                        data: {
                            ...prevState.data,
                            [key]: responseData.photos.photo,
                        },
                    };
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
        this.performSearch(this.state.query, true);
        this.props.history.push(`/search?query=${this.state.query}`);
        event.currentTarget.reset();
    };

    render() {
        return (
            <div className={styles.container}>
                <Search
                    handleSubmit={this.handleSubmit}
                    onSearchChange={this.onSearchChange}
                />

                <Nav />

                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <Gallery data={this.state.data.searchResults} />
                        )}
                    />

                    <Route
                        path={"/cats"}
                        render={() => (
                            <Gallery title="Cats" data={this.state.data.cats} />
                        )}
                    />

                    <Route
                        path="/dogs"
                        render={() => (
                            <Gallery
                                title={"Dogs"}
                                data={this.state.data.dogs}
                            />
                        )}
                    />

                    <Route
                        path="/computers"
                        render={() => (
                            <Gallery
                                title="Computers"
                                data={this.state.data.computers}
                            />
                        )}
                    />

                    <Route
                        path="/search"
                        render={() => (
                            <Gallery
                                title={this.props.location.search.replace(
                                    /\?query=/,
                                    ""
                                )}
                                data={this.state.data.searchResults}
                            />
                        )}
                    />

                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
