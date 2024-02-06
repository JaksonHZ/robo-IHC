import React, { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import robo from "../../assets/bot.png";
import { useNavigate } from "react-router-dom";

export default function Agradecimento() {
  const { fontSize } = useContext(FontSizeContext);
  const navigate = useNavigate();
  const calculateDynamicFontSize = (baseFontSize) => {
    // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
    return baseFontSize * (fontSize / 40);
  };

  const handleNavigation = () => {
    navigate("/");
    window.location.reload();
  }

  return (
    <div className={styles.body}>
      <ConfigButton />
      <CustomFontSize />
      <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Obrigado por usar o robô do DC!</h1>
      <img src={robo} alt="Não foi possível encontrar a imagem :(" />
        <input onClick={() => handleNavigation()} type="button" value="VOLTAR AO INÍCIO" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
    </div>
  );
}

