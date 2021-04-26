import { GalleryItem } from "./GalleryItem";
import { NotFound } from "../NotFound";
import styles from "./style.module.css";
import PropTypes from "prop-types";

/**
 * Display list of gallery items
 * @param {Object[]} data
 * @param {string} title
 * @returns {JSX.Element}
 * @constructor
 */
export const Gallery = ({ data, title }) => {
    const listItems = data.map((item) => (
        <GalleryItem key={item.id} data={item} />
    ));

    if (title) {
        title = `You've searched for "${title
            .replace(/\?query=/, "")
            .replace(/%20/g, " ")}"`;
    } else {
        title =
            "Here are some random images! What images are you looking for today?";
    }

    if (data.length === 0) {
        return (
            <NotFound
                title="Hmm... no matched results"
                message="Seems like your search request didn't match any images. Let's try another query!"
            />
        );
    }

    return (
        <div className={styles["photo-container"]}>
            <h2>{title}</h2>

            <ul>{listItems}</ul>
        </div>
    );
};

Gallery.propTypes = {
    data: PropTypes.array.isRequired,
    title: PropTypes.string,
};
