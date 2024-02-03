import { useContext, useState } from "react";
import styles from "./styles.module.css";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import Background from "../../components/Background/Background";

export default function PositivaReconhecimentoNivel(){
    const { fontSize } = useContext(FontSizeContext);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
    };

    return(
        <div className={styles.body}>
            <Background />
            <ConfigButton />
            <p style={{ fontSize: `${fontSize}px`, color: 'white' }}>Qual o nível dessa emoção</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />
            <div className={styles.containerButton}>
                {[...Array(10).keys()].map((number) => (
                    <button
                        key={number + 1}
                        className={`${styles.button} ${selectedButton === number + 1 ? styles.selected : ''}`}
                        onClick={() => handleButtonClick(number + 1)}
                    >
                        {number + 1}
                    </button>
                ))}

            </div>

            {selectedButton && <CustomButton className={styles.nextButton} text={"Prosseguir"} />}
        </div>
    );
}
