import { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";

export default function RespostasProntas(){
    const { fontSize } = useContext(FontSizeContext);

    return(
        <div className={styles.body}>
            <CustomFontSize />
            <h1 className={styles.firstSon} style={{ fontSize: `${fontSize}px` }}>O que mais te incomoda nesse momento?</h1>
            <input type="button" value="ESTOU TENDO PROBLEMAS NOS MEUS ESTUDOS DA FACULDADE" className={styles.button} />
            <input type="button" value="ESTOU TENDO PROBLEMAS FAMILIARES E ME SENTINDO SÓ" className={styles.button} />
            <input type="button" value="ESTOU MUITO ANSIOSO NO AMBIENTE DA FACULDADE E ME SINTO PRESSIONADO" className={styles.button} />
            <input type="button" value="NÃO SEI INFORMAR" className={styles.button} />
        </div>

    )
}