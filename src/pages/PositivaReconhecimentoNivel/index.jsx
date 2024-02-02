import { useContext, useState } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
export default function PositivaReconhecimentoNivel(){
    const { fontSize } = useContext(FontSizeContext);
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
    };

    return(
        <div className={styles.body}>
            <ConfigButton />
            <CustomFontSize />
            <p className={styles.firstSon} style={{ fontSize: `${fontSize}px` }}>Qual o nível dessa emoção</p>
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
