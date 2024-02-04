import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import ConfigButton from "../../components/ConfigButton/ConfigButton";

export default function satisfacao(){
    const { fontSize } = useContext(FontSizeContext);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
    };

    const calculateDynamicFontSize = (baseFontSize) => {
        // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
        return baseFontSize * (fontSize / 40);
      };

    return(
        <div className={styles.body}>
            <ConfigButton />
            <CustomFontSize />
            <p style={{ fontSize: `${fontSize}px`, color: 'white', textAlign:'center', marginTop:'0px' }}>Qual o nível da emoção<br></br>
            que está sentindo após a pratica sugerida?</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />
            <div className={styles.containerButton} >
                {[...Array(10).keys()].map((number) => (
                    <button
                        key={number + 1}
                        className={`${styles.button} ${selectedButton === number + 1 ? styles.selected : ''}`}
                        style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} 
                        onClick={() => handleButtonClick(number + 1)}
                    >
                        {number + 1}
                    </button>
                ))}

            </div>
            <Link to="/agradecimentos" style={{ textDecoration: 'none' }}>
            {selectedButton && <CustomButton className={styles.nextButton} text={"Prosseguir"} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />}
            </Link>
        </div>
    );
}
