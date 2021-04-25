import { GalleryItem } from "./GalleryItem";
import { NotFound } from "./NotFound";

/**
 *
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
export const GalleryList = ({ data }) => {
    if (data.length === 0) {
        return <NotFound />;
    }

    const listItems = data.map((item) => (
        <GalleryItem key={item.id} data={item} />
    ));

    return <ul>{listItems}</ul>;
};
