import PropTypes from "prop-types";

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
