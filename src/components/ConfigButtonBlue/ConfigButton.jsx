// ConfigButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import { FaQuestion } from "react-icons/fa";

const ConfigButtonBlue = () => {
    return (
        <div className={styles.configButton}>
            <Link to="/ConfigGeral">
                <FaQuestion color='white' size={32}/>
            </Link>
        </div>
    );
};

export default ConfigButtonBlue;

