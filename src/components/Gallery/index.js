import GalleryList from "./GalleryList";

import styles from "./style.module.css";

const Gallery = () => {
    return (
        <div className={styles["photo-container"]}>
            <h2>Results</h2>

            <GalleryList />
        </div>
    );
};

export default Gallery;
