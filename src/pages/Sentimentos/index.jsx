import React, { useContext } from "react";
import styles from "./feelings.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import { useNavigate } from "react-router-dom";
import tristeza from "../../assets/tristeza.png";
import raiva from "../../assets/raiva.png";
import alegria from "../../assets/alegria.png";
import neutro from "../../assets/neutro.png";
import nervosismo from "../../assets/nervosismo.png";
export default function Sentimentos()
{
    const { fontSize } = useContext(FontSizeContext);
    const navigate = useNavigate();
    const calculateDynamicFontSize = (baseFontSize) => {
      // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
      return baseFontSize * (fontSize / 40);
    };

    const handleNavigate = (emotion) => {
      localStorage.setItem('emotion', emotion);
      navigate('/reconhecimento/positivanivel');
    }


    return (
        <div className={styles.body}>
          <ConfigButton />
          <CustomFontSize />
          <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Qual opção mais se aproxima do que você está sentindo?</h1>
          <div className={styles.Container}>
            <div className={styles.cards} onClick={() => handleNavigate("Sad")}>
              <img src={tristeza} alt="Imagem não encontrada" />
                <input type="button" value="Tristeza" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </div>
            <div className={styles.cards} onClick={() => handleNavigate("Angry")}>
              <img src={raiva} alt="Imagem não encontrada" />
                <input type="button" value="Raiva" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </div>
            <div className={styles.cards} onClick={() => handleNavigate("Happy")}>
              <img src={alegria} alt="Imagem não encontrada" />
                <input type="button" value="Alegria" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </div>
            <div className={styles.cards} onClick={() => handleNavigate("Neutral")}>
              <img src={neutro} alt="Imagem não encontrada" />
                <input type="button" value="Neutro" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </div>
            <div className={styles.cards} onClick={() => handleNavigate("Disgust")}>
              <img src={nervosismo} alt="Imagem não encontrada" />
                <input type="button" value="Nervosismo" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </div>
          </div>
          <div className={styles.allback}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
        </div>
      );
}