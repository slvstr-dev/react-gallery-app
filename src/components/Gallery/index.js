import { GalleryList } from "./GalleryList";
import styles from "./style.module.css";

/**
 *
 */
export const Gallery = ({ title, data }) => {
    const decodedTitle = decodeURI(
        title.replace(/\?query=/, "".replace(/%20/g, " "))
    );

    return (
        <div className={styles["photo-container"]}>
            <h2>You've searched for "{decodedTitle}"</h2>

            <GalleryList data={data} />
        </div>
    );
};
