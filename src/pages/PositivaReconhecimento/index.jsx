import { useContext } from "react";
import styles from "./styles.module.css";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import Background from "../../components/Background/Background";
import { useNavigate } from "react-router-dom";

export default function PositivaReconhecimento(){
    const { fontSize } = useContext(FontSizeContext);
    const navigate = useNavigate();
    // const handleButtonClick = (buttonValue) => {
    //     setSelectedButton(buttonValue);
    // };

    const handleNavigationYes = () => {
        navigate("/respiracao");
    }

    const handleNavigationNo = () => {
        navigate("/respostas_prontas");
    }


    return(
        <div className={styles.body}>
            <Background />
            <ConfigButton />
            <p style={{ fontSize: `${fontSize}px`, color: 'white' }}>Gostaria de iniciar uma respiração e meditação guiada por voz?</p>
            <img src={robo} alt="Não foi possível encontrar a imagem :(" />   
            <div className={styles.containerButton}>
                <CustomButton text={"Não"} onClick={handleNavigationNo} />
                <CustomButton text={"Sim"}  onClick={handleNavigationYes}/>
            </div>
        </div>
    );
}
