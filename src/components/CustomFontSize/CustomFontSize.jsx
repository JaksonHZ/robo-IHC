// CustomFontSize.js
import { useContext } from 'react';
import React, { useState } from 'react';
import { FontSizeContext } from '../../context/ContextFontSize';
import styles from './CustomFontSize.module.css';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function CustomFontSize() {
  const { fontSize, changeFontSize } = useContext(FontSizeContext);

  return (
    <div className={styles.container}>
      <FaCircleMinus className={styles.icon} color='#FFF' size={32} onClick={() => changeFontSize(40)} />
      <span style={{ fontSize: `40px`}}>A</span>
      <FaCirclePlus className={styles.icon} color='#FFF' size={32} onClick={() => changeFontSize(60)} />
    </div>
  );
}
