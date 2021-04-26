import PropTypes from "prop-types";

/**
 * Display single gallery item
 * @param {Object[]} data
 * @returns {JSX.Element}
 * @constructor
 */
export const GalleryItem = ({ data }) => {
    return (
        <li>
            <img
                src={`https://live.staticflickr.com/${data.server}/${data.id}_${data.secret}.jpg`}
                alt={data.title}
            />
        </li>
    );
};

GalleryItem.propTypes = {
    data: PropTypes.object.isRequired,
};
