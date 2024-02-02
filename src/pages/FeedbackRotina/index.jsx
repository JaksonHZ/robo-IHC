import { useContext } from "react";
import styles from "./feedrotina.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import { Link } from "react-router-dom";

export default function FeedbackRotina(){
    const { fontSize } = useContext(FontSizeContext);

    return(
        <div className={styles.body}>
            <CustomFontSize />
            <p className={styles.title} style={{ fontSize: `${fontSize}px` }}>Você está se sentindo melhor?</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />
            <div className={styles.containerButton}>
            <Link to="/agradecimento" style={{ textDecoration: 'none' }}>
                <input className={styles.button} style={{ fontSize: `${20}px`}} type="button" value="SIM" />
            </Link> 
            <Link to="/agradecimento" style={{ textDecoration: 'none' }}>
                <input className={styles.button} style={{ fontSize: `${20}px` }} type="button" value="NÃO" />
            </Link> 
            </div>
        </div>
    )
}