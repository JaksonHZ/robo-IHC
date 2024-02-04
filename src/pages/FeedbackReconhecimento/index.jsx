import { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useLocation, useNavigate } from 'react-router-dom';

export default function FeedbackReconhecimento(){
    const { fontSize } = useContext(FontSizeContext);
    const location = useLocation();
    const { emotion } = location.state || {};
    const navigate = useNavigate();

    function handleYes(){
        console.log("yes");
        localStorage.setItem('emotion', emotion);
        navigate('/reconhecimento/positivanivel');
    }

    function handleNo(){
        navigate('/sentimentos');
    }

    const translate = {
        "Happy": "Feliz",
        "Sad": "Triste",
        "Angry": "Bravo",
        "Surprise": "Supreso",
        "Neutral": "Neutro",
        "Disgust": "Nervoso",
    }
    
    return(
        <div className={styles.body}>
            <CustomFontSize />
            <p className={styles.firstSon} style={{ fontSize: `${fontSize}px` }}>Aparentemente você está se sentindo</p>
            <p style={{ fontSize: `${fontSize}px` }}>{translate[emotion]}</p>
            <p style={{ fontSize: `${fontSize}px` }}>Voce realmente está se sentindo assim?</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />
            <div className={styles.containerButton}>
              <CustomButton text={"SIM"} onClick={handleYes}/>
              <CustomButton text={"NÃO"} onClick={handleNo}/>
            </div>
        </div>

    )
}