import React, { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";

export default function Home() {
  const { fontSize } = useContext(FontSizeContext);

  const calculateDynamicFontSize = (baseFontSize) => {
    // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
    return baseFontSize * (fontSize / 40);
  };

  return (
    <div className={styles.body}>
      <ConfigButton />
      <CustomFontSize />
      <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Olá!</h1>
      <h1 style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Eu sou o robô anfitrião do DC!</h1>
      <h1 style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Gostaria de iniciar um atendimento?</h1>
      <img src="src\assets\bot.png" alt="Não foi possível encontrar a imagem :(" />
      <Link to="/reconhecimento" style={{ textDecoration: 'none' }}>
        <input type="button" value="INICIAR" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
      </Link>
      <p style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>
        Ao clicar em INICIAR você estará concordando com os <Link to="/termos_de_uso" style={{ color: 'white' }}>Termos de Uso</Link>.
      </p>
    </div>
  );
}

