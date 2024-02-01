import React, { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButtonBlue from "../../components/ConfigButtonBlue/ConfigButton";
import robo from "../../assets/bot.png";
export default function SobreNos() {
  const { fontSize } = useContext(FontSizeContext);

  const calculateDynamicFontSize = (baseFontSize) => {
    // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
    return baseFontSize * (fontSize / 40);
  };

  return (
    <div className={styles.leftContent}>
      <ConfigButtonBlue />
      <CustomFontSize />
      <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Sobre nós</h1>
      <div className={styles.p} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>
        <p>Somos um grupo de alunos cursando </p>
        <p>Interação Humano Computador (IHC),</p>
        <p>e esse é um dos nossos projetos </p>
        <p>desenvolvido durante a disciplina.</p>
        <p>Esse projeto visa identificar o que</p>
        <p>o individuo está sentindo e </p>
        <p>ajudá-lo a se sentir melhor.</p>
        <p>Esperamos que goste.</p>
        <img className={styles.img} src={robo} alt="Não foi possível encontrar a imagem :(" />

      </div>
    </div>
  );
}

