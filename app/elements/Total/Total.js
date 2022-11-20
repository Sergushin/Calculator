import { Moving } from '@mui/icons-material';
import styles from './Total.module.scss'
const Total = ({children}) => {
    return (
        <div className={styles.total}>
            <Moving className={styles.moving} />
            <span>$ {children}</span>
        </div>
    );
}

export default Total;
