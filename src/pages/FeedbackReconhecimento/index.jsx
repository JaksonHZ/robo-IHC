import { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useLocation, useNavigate } from 'react-router-dom';
import ConfigButton from "../../components/ConfigButton/ConfigButton";

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
        navigate('/sentimentos', {state: {emotion: emotion}});
    }

    const translate = {
        "Happy": "Feliz",
        "Sad": "Triste",
        "Angry": "Bravo",
        "Surprise": "Supreso",
        "Neutral": "Neutro",
        "Disgust": "Nervoso",
    }
    
    const calculateDynamicFontSize = (baseFontSize) => {
        // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
        return baseFontSize * (fontSize / 40);
      };

    return(
        <div className={styles.body}>
            <ConfigButton />
            <CustomFontSize />
            <p className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px`, marginBottom: '5px' }}>Aparentemente você está se sentindo</p>
            <p style={{ fontSize: `${calculateDynamicFontSize(40)}px`, marginBottom: '5px', marginTop: '0px' }}>{translate[emotion]}</p>
            <p style={{ fontSize: `${calculateDynamicFontSize(40)}px`, marginBottom: '5px', marginTop: '0px' }}>Voce realmente está se sentindo assim?</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />
            <div className={styles.containerButton}>
              <CustomButton text={"SIM"} onClick={handleYes}/>
              <CustomButton text={"NÃO"} onClick={handleNo}/>
            </div>
        </div>

    )
}