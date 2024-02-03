import React, { useContext } from "react";
import styles from "./lonely.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";


export default function SentindoSo()
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
            <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(32)}px` }}>Estou tendo problemas familiares e me sentindo só</h1>
            <h1 style={{ fontSize: `${calculateDynamicFontSize(32)}px` }}>Você mora só?</h1>
            <Link to="/morar_com_amigos" style={{ textDecoration: 'none' }}>
                <input type="button" value="Não, divido casa com amigos (república, pensão, etc)" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} />
            </Link> 
            <Link to="/morar_com_familiares" style={{ textDecoration: 'none' }}>
                <input type="button" value="Não, moro com familiares" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} />
            </Link> 
            <Link to="/moroSo" style={{ textDecoration: 'none' }}>
                <input type="button" value="Sim, em São Carlos moro só" className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} />
            </Link> 

            <div className={styles.allback}>
            <Link to="/respostas_prontas" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
        </div>

    );
}