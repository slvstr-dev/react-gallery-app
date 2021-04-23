import GalleryList from "./GalleryList";
import styles from "./style.module.css";

/**
 *
 */
const Gallery = ({ data }) => {
    return (
        <div className={styles["photo-container"]}>
            <h2>Results</h2>

            <GalleryList data={data} />
        </div>
    );
};

export default Gallery;
