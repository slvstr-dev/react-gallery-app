import PropTypes from "prop-types";

/**
 *
 * @param src
 * @returns {JSX.Element}
 * @constructor
 */
const GalleryItem = ({ src }) => {
    return (
        <li>
            <img src={src} alt="" />
        </li>
    );
};

GalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
};

export default GalleryItem;
