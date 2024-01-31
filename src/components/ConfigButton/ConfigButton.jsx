// ConfigButton.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const ConfigButton = () => {
    return (
        <Link to="/config">
            <button className={styles.configButton}></button>
        </Link>
    );
};

export default ConfigButton;

