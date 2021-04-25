import { GalleryList } from "./GalleryList";
import styles from "./style.module.css";

/**
 *
 */
export const Gallery = ({ title, data }) => {
    return (
        <div className={styles["photo-container"]}>
            <h2>Results: {title}</h2>

            <GalleryList data={data} />
        </div>
    );
};
