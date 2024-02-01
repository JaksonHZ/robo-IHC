// ConfigButton.js
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { MdOutlineSettings } from "react-icons/md";
const ConfigButton = () => {
    return (
        <div className={styles.configButton}>
            <Link to="/ConfigGeral">
                <MdOutlineSettings size={40} color='black'/>
            </Link>
        </div>
    );
};

export default ConfigButton;

