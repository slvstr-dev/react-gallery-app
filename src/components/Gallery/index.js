import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GalleryItem } from "./GalleryItem";
import { NotFound } from "../NotFound";
import styles from "./style.module.css";
import PropTypes from "prop-types";

/**
 * Display list of gallery items
 * @param {boolean} loading
 * @param {string} latestQuery
 * @param {func} performSearch
 * @param {Object[]} data
 * @returns {JSX.Element}
 * @constructor
 */
export const Gallery = ({ loading, latestQuery, performSearch, data }) => {
    // The history hook provides access to the history object
    const history = useHistory();

    const currentQuery = history.location.pathname
        .replace(/(search)|(\/)/g, "")
        .replace(/%20/g, " ");

    // The useEffect hook is like a componentDidMount function for function components
    useEffect(() => {
        if (history.location.pathname.includes("/search/")) {
            if (currentQuery !== latestQuery) {
                performSearch(currentQuery, true);
            }
        }
    }, []);

    const listItems = data.map((item) => (
        <GalleryItem key={item.id} data={item} />
    ));

    let title = currentQuery
        ? `You've searched for ${currentQuery} images`
        : "Below are some images to get started. Let's find some images yourself!";

    if (loading) {
        return <h2>Loading {currentQuery} images...</h2>;
    } else if (listItems.length === 0) {
        return (
            <NotFound
                title="Hmm... no matched results"
                message="Let's try another query!"
            />
        );
    } else {
        return (
            <div className={styles["photo-container"]}>
                <h2>{title}</h2>

                <ul>{listItems}</ul>
            </div>
        );
    }
};

Gallery.propTypes = {
    loading: PropTypes.bool.isRequired,
    latestQuery: PropTypes.string.isRequired,
    performSearch: PropTypes.func,
    data: PropTypes.array.isRequired,
};
