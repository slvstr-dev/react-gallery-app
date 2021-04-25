import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";
import styles from "./style.module.css";

/**
 *
 */
export const Search = ({ handleSubmit, onSearchChange }) => {
    return (
        <form className={styles["search-form"]} onSubmit={handleSubmit}>
            <input
                type="search"
                onChange={onSearchChange}
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

// export default Search;
