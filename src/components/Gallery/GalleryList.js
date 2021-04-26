import { GalleryItem } from "./GalleryItem";
import { NotFound } from "../NotFound";

/**
 *
 * @param data
 * @returns {JSX.Element}
 * @constructor
 */
export const GalleryList = ({ data }) => {
    if (data.length === 0) {
        return (
            <NotFound
                title="Hmm... no results"
                message="Seems like your search request didn't match any images. Please try another query!"
            />
        );
    }

    const listItems = data.map((item) => (
        <GalleryItem key={item.id} data={item} />
    ));

    return <ul>{listItems}</ul>;
};
