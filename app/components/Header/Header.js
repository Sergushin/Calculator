import styles from "./Header.module.scss";
const Header = () => {
    return (
        <div className={styles.header}>
            <div>
                <span >Calculate your Mortgage</span>
                <span className={styles.type}>Loan type</span>
            </div>

        </div>
    );
}


export default Header;