import styles from "./style.module.css";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const NotFound = () => {
    return (
        <li className={styles["not-found"]}>
            <h3>No Results Found</h3>

            <p>You search did not return any results. Please try again.</p>
        </li>
    );
};

export default NotFound;
