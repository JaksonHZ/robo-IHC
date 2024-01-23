import { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";

export default function Home(){
    const { fontSize } = useContext(FontSizeContext);

    return(
        <div className={styles.body}>
            <CustomFontSize />
            <h1 className={styles.firstSon} style={{ fontSize: `${fontSize}px` }}>Olá!</h1>
            <h1 style={{ fontSize: `${fontSize}px` }}>Eu sou o robô anfitrião do DC!</h1>
            <h1 style={{ fontSize: `${fontSize}px` }}>Gostaria de iniciar um atendimento?</h1>
            <img src="src\assets\bot.png" alt="Não foi possível encontrar a imagem :(" />
            <input type="button" value="INICIAR" className={styles.button} />
            <p>Ao clicar em INICIAR você estará concordando com os termos de uso</p>
        </div>

    )
}