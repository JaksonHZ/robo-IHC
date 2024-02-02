import React, { useContext } from "react";
import styles from "./anxious.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";


export default function Ansiedade()
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
            <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Estou muito ansioso no ambiente da faculdade e me sinto pressionado</h1>
            <Link to="/meditacao"  style={{ textDecoration: 'none' }}>
                  <input type="button" className={styles.repeat} value="REPETIR MEDITAÇÃO?" style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
            <div className={styles.Container}>
                <div className={styles.balao}>
                    <img src="src\assets\exercitar.png" alt="Não foi possível encontrar imagem" />
                    <p className={styles.subtitle}>SE EXERCITE!</p>
                    <p>Reserve um momento do seu dia para desestressar! Chama até seu gatinho se tiver.</p>
                </div>
                <div className={styles.balao}>
                    <img src="src\assets\natureza.png" alt="Não foi possível encontrar imagem" />
                    <p className={styles.subtitle}>FAÇA ATIVIDADES EM CONTATO COM A NATUREZA!</p>
                    <p>Bora encontrar uma cachoeira!</p>
                </div>
                <div className={styles.balao}>
                    <img src="src\assets\profissional.png" alt="Não foi possível encontrar imagem" />
                    <p className={styles.subtitle}>PROCURE UM PROFISSIONAL</p>
                    <p>Quem vai saber mesmo como te instruir é um profissional!</p>
                </div>
            </div>
            
            <div className={styles.allback}>
            <Link to="/respostas_prontas" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
                  <input type="button" value="CONCLUIR" className={styles.finalize} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
        </div>

    );
}