import { useContext } from "react";
import styles from "./feedrotina.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";

export default function FeedbackRotina(){
    const { fontSize } = useContext(FontSizeContext);

    const calculateDynamicFontSize = (baseFontSize) => {
        // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
        return baseFontSize * (fontSize / 40);
      };

    return(
        <div className={styles.body}>
            <CustomFontSize />
            <ConfigButton />
            <p className={styles.title} style={{ fontSize: `${fontSize}px` }}>Você está se sentindo melhor?</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />
            <div className={styles.containerButton}>
            <Link to="/satisfacao" style={{ textDecoration: 'none' }}>
                <input className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} type="button" value="SIM" />
            </Link> 
            <Link to="/satisfacao" style={{ textDecoration: 'none' }}>
                <input className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} type="button" value="NÃO" />
            </Link> 
            </div>
        </div>
    )
}