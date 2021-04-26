import styles from "./style.module.css";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const NotFound = ({ title, message }) => {
    return (
        <section className={styles["not-found"]}>
            <h3>{title}</h3>

            <p>{message}</p>
        </section>
    );
};
