import PropTypes from "prop-types";

/**
 *
 * @param src
 * @returns {JSX.Element}
 * @constructor
 */
const GalleryItem = ({ data }) => {
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

export default GalleryItem;
