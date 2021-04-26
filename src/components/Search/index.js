import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import styles from "./style.module.css";
import PropTypes from "prop-types";

/**
 * Display search input
 * @param {func} handleSearchSubmit
 * @param {func} onSearchInputChange
 * @returns {JSX.Element}
 * @constructor
 */
export const Search = ({ handleSearchSubmit, onSearchInputChange }) => {
    return (
        <form className={styles["search-form"]} onSubmit={handleSearchSubmit}>
            <input
                type="search"
                onChange={onSearchInputChange}
                name="search"
                placeholder="Search"
                required
            />

            <button type="submit" className={styles["search-button"]}>
                <SearchIcon />
            </button>
        </form>
    );
};

Search.propTypes = {
    handleSearchSubmit: PropTypes.func.isRequired,
    onSearchInputChange: PropTypes.func.isRequired,
};
