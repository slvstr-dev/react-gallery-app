import styles from "./style.module.css";
import PropTypes from "prop-types";

/**
 * Display information when query returns no results or requested route doens't excist
 * @param {string} title
 * @param {string} message
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

NotFound.propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
};

NotFound.defaultProps = {
    title: "404",
    message:
        "Sadly this page doesn't exist. Please use the navigation or search to paint your screen with some cool images!",
};
