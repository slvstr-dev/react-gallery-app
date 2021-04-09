import React, { Component } from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import styles from "./style.module.css";

class Search extends Component {
    state = {};

    render() {
        return (
            <form className={styles["search-form"]}>
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    required
                />

                <button type="submit" className={styles["search-button"]}>
                    <SearchIcon />
                </button>
            </form>
        );
    }
}

export default Search;
