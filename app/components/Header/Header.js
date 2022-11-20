import styles from "./Header.module.scss";
const Header = ({children,title}) => {
    return (
        <div className={styles.header}>
            <div>
                <span>{children}</span>
                <span className={styles.type}>{title}</span>
            </div>

        </div>
    );
}


export default Header;