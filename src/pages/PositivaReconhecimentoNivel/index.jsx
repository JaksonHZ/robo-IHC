import { useContext, useState, useEffect } from "react";
import styles from "./styles.module.css";
import { FontSizeContext } from "../../context/ContextFontSize";
import robo from "../../assets/bot.png";
import CustomButton from "../../components/CustomButton/CustomButton";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import Background from "../../components/Background/Background";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PositivaReconhecimentoNivel(){
    const { fontSize } = useContext(FontSizeContext);
    const [selectedButton, setSelectedButton] = useState(null);
    const navigate = useNavigate();
    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
    };

    const handleNavigation = () => {
        navigate("/reconhecimento/positiva");
    }

    useEffect(() => {
        //const emotion = localStorage.getItem('emotion');

        axios.get(`http://192.168.1.100:5000/led/changeExpression/9`)
        .then(response => {
            console.log("teste" + response.data);
        }).catch(error => {
            console.log(error);
        });
    },[])

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

            {selectedButton && <CustomButton className={styles.nextButton} text={"Prosseguir"} onClick={handleNavigation} />}
        </div>
    );
}
