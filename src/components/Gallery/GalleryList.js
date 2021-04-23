import GalleryItem from "./GalleryItem";
import NotFound from "./NotFound";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GalleryList = ({ data }) => {
    const listItems =
        data.length === 0 ? (
            <NotFound />
        ) : (
            data.map((item) => <GalleryItem key={item.id} data={item} />)
        );

    return <ul>{listItems}</ul>;
};

export default GalleryList;
