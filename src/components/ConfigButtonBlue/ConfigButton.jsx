// ConfigButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ConfigButtonBlue = () => {
    return (
        <Link to="/ConfigGeral">
            <button className={styles.configButton}></button>
        </Link>
    );
};

export default ConfigButtonBlue;

