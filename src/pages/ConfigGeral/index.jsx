import React, { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButtonBlue from "../../components/ConfigButtonBlue/ConfigButton";
import robo from "../../assets/bot.png";
export default function ConfigGeral() {
  const { fontSize } = useContext(FontSizeContext);

  const calculateDynamicFontSize = (baseFontSize) => {
    // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
    return baseFontSize * (fontSize / 40);
  };

  return (
    <div className={styles.leftContent}>
      <ConfigButtonBlue />
      <CustomFontSize />
      <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Configurações</h1>
      <img className={styles.img} src={robo} alt="Não foi possível encontrar a imagem :(" />
      <Link to="/SobreNos" style={{ textDecoration: 'none' }}>
        <input type="button" value="Sobre nós" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }} />
      </Link>
    </div>
  );
}

