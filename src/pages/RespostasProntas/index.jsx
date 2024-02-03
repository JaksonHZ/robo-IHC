import { useContext } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import ConfigButton from "../../components/ConfigButton/ConfigButton";

export default function RespostasProntas(){
    const { fontSize } = useContext(FontSizeContext);

    const calculateDynamicFontSize = (baseFontSize) => {
      // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
      return baseFontSize * (fontSize / 40);
    };

    return(
        <div className={styles.body}>
            <CustomFontSize />
            <ConfigButton />
            <h1 className={styles.firstSon} style={{ fontSize: `${fontSize}px` }}>O que mais te incomoda nesse momento?</h1>
            <Link to="/problemas_nos_estudos" style={{ textDecoration: 'none' }}>
                <input style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} type="button" value="ESTOU TENDO PROBLEMAS NOS MEUS ESTUDOS DA FACULDADE" className={styles.button} />
            </Link>
            <Link to="/sentindo_so" style={{ textDecoration: 'none' }}>
                <input style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} type="button" value="ESTOU TENDO PROBLEMAS FAMILIARES E ME SENTINDO SÓ" className={styles.button} />
            </Link>
            <Link to="/ansiedade" style={{ textDecoration: 'none' }}>
                <input style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} type="button" value="ESTOU MUITO ANSIOSO NO AMBIENTE DA FACULDADE E ME SINTO PRESSIONADO" className={styles.button} />
            </Link>
            <Link to="/semInfo" style={{ textDecoration: 'none' }}>
                <input style={{ fontSize: `${calculateDynamicFontSize(18)}px` }} type="button" value="NÃO SEI INFORMAR" className={styles.button} />
            </Link>

            <div className={styles.allback}>
            <Link to="/meditacao" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
            <Link to="/reconhecimento/feedback/rotina" style={{ textDecoration: 'none' }}>
                  <input type="button" value="CONCLUIR" className={styles.finalize} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
        </div>

    )
}