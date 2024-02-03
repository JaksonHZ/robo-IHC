// CustomFontSize.js
import { useContext } from 'react';
import React, { useState } from 'react';
import { FontSizeContext } from '../../context/ContextFontSize';
import styles from './CustomFontSize.module.css';
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

export default function CustomFontSize() {
  const { fontSize, changeFontSize } = useContext(FontSizeContext);

  const aumentarTexto = () => {
    if(fontSize < 60)
      changeFontSize(fontSize + 5)
  }

  const diminuirTexto = () => {
    if(fontSize > 40)
      changeFontSize(fontSize - 5)
  }

  return (
    <div className={styles.container}>
      <FaCircleMinus className={styles.icon} color='#FFF' size={32} onClick={() => diminuirTexto()} />
      <span style={{ fontSize: `40px`}}>A</span>
      <FaCirclePlus className={styles.icon} color='#FFF' size={32} onClick={() => aumentarTexto()} />
    </div>
  );
}
