import GalleryList from "./Components/GalleryList";

import styles from "../Gallery/style.module.css";

const Gallery = () => {
    return (
        <div className={styles["photo-container"]}>
            <h2>Results</h2>

            <GalleryList />
        </div>
    );
};

export default Gallery;
