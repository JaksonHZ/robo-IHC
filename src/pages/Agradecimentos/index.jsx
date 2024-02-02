import React, { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";

export default function Agradecimento() {
  const { fontSize } = useContext(FontSizeContext);

  const calculateDynamicFontSize = (baseFontSize) => {
    // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
    return baseFontSize * (fontSize / 40);
  };

  return (
    <div className={styles.body}>
      <ConfigButton />
      <CustomFontSize />
      <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Obrigado por usar o robô do DC!</h1>
      <img src="src\assets\bot.png" alt="Não foi possível encontrar a imagem :(" />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <input type="button" value="VOLTAR AO INÍCIO" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
      </Link>
    </div>
  );
}

