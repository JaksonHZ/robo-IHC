// ConfigButton.js
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { FaQuestion } from "react-icons/fa";

const ConfigButton = () => {
    return (
        <div className={styles.configButton}>
            <Link to="/ConfigGeral">
                <FaQuestion size={32}/>
            </Link>
        </div>
    );
};

export default ConfigButton;

