import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { FaArrowLeft } from "react-icons/fa";

const ArrowLeft = () => {
    return (
        <div className={styles.arrowleft}>
            <Link to="/">
                <FaArrowLeft size={32}/>
            </Link>
        </div>
    );
};

export default ArrowLeft;
