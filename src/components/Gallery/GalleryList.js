import GalleryItem from "./GalleryItem";
import NotFound from "./NotFound";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const GalleryList = () => {
    const data = [
        {
            key: 0,
            src:
                "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
        },
        {
            key: 1,
            src:
                "https://farm5.staticflickr.com/4342/36338751244_316b6ee54b.jpg",
        },
        {
            key: 2,
            src:
                "https://farm5.staticflickr.com/4343/37175099045_0d3a249629.jpg",
        },
        {
            key: 3,
            src:
                "https://farm5.staticflickr.com/4425/36337012384_ba3365621e.jpg",
        },
    ];

    const listItems =
        data.length === 0 ? (
            <NotFound />
        ) : (
            data.map((item) => <GalleryItem key={item.key} src={item.src} />)
        );

    return <ul>{listItems}</ul>;
};

export default GalleryList;
