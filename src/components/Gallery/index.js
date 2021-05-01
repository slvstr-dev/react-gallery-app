import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { GalleryItem } from "./GalleryItem";
import { NotFound } from "../NotFound";
import styles from "./style.module.css";
import PropTypes from "prop-types";

/**
 * Display list of gallery items
 * @param {func} performSearch
 * @param {Object[]} queryData
 * @returns {JSX.Element}
 * @constructor
 */
export const Gallery = ({ performSearch, queryData }) => {
    // The history hook provides access to the history object
    const history = useHistory();

    const currentQuery = history.location.pathname
        .replace(/(search)|(\/)/g, "")
        .replace(/%20/g, " ");

    // The useEffect hook is like a componentDidMount function for function components
    useEffect(() => {
        if (
            history.location.pathname.includes("/search/") &&
            history.action === "POP"
        ) {
            performSearch(currentQuery, true);
        }
    }, [
        history.location.pathname,
        history.action,
        performSearch,
        currentQuery,
    ]);

    const listItems = queryData.images.map((item) => (
        <GalleryItem key={item.id} data={item} />
    ));

    let title = currentQuery
        ? `You've searched for ${currentQuery} images`
        : "Below are some images to get started. Let's find some images yourself!";

    if (queryData.loading) {
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
    performSearch: PropTypes.func,
    queryData: PropTypes.object.isRequired,
};
