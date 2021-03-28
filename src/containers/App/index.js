import Search from "../Search";
import Nav from "../Nav";
import Gallery from "../Gallery";

import styles from "../App/style.module.css";

const App = () => {
    return (
        <div className={styles.container}>
            <Search />
            <Nav />
            <Gallery />
        </div>
    );
};

export default App;
