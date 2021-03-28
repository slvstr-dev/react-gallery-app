import { ReactComponent as SearchIcon } from "../../assets/svg/search.svg";

import styles from "../Search/style.module.css";

const Search = () => {
    return (
        <form className={styles["search-form"]}>
            <input type="search" name="search" placeholder="Search" required />

            <button type="submit" className={styles["search-button"]}>
                <SearchIcon />
            </button>
        </form>
    );
};

export default Search;
