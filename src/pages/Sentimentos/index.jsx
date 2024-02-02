import React, { useContext } from "react";
import styles from "./feelings.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";

export default function Sentimentos()
{
    const { fontSize } = useContext(FontSizeContext);

    const calculateDynamicFontSize = (baseFontSize) => {
      // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
      return baseFontSize * (fontSize / 40);
    };

    return (
        <div className={styles.body}>
          <ConfigButton />
          <CustomFontSize />
          <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Qual opção mais se aproxima do que você está sentindo?</h1>
          <div className={styles.Container}>
            <div className={styles.cards}>
              <img src="src\assets\tristeza.png" alt="Imagem não encontrada" />
              <Link to="/" style={{ textDecoration: 'none' }}>
                <input type="button" value="Tristeza" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
              </Link>
            </div>
            <div className={styles.cards}>
              <img src="src\assets\raiva.png" alt="Imagem não encontrada" />
              <Link to="/" style={{ textDecoration: 'none' }}>
                <input type="button" value="Raiva" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
              </Link>
            </div>
            <div className={styles.cards}>
              <img src="src\assets\alegria.png" alt="Imagem não encontrada" />
              <Link to="/" style={{ textDecoration: 'none' }}>
                <input type="button" value="Alegria" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
              </Link>  
            </div>
            <div className={styles.cards}>
              <img src="src\assets\neutro.png" alt="Imagem não encontrada" />
              <Link to="/" style={{ textDecoration: 'none' }}>
                <input type="button" value="Neutro" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
              </Link>              
            </div>
            <div className={styles.cards}>
              <img src="src\assets\nervosismo.png" alt="Imagem não encontrada" />
              <Link to="/" style={{ textDecoration: 'none' }}>
                <input type="button" value="Nervosismo" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
              </Link>
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