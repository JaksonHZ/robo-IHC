import React, { useContext } from "react";
import styles from "./rep.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import amigos from "../../assets/amigos.png";
import tabelapsico from "../../assets/tabelapsico.png";


export default function MorarRep()
{
    const { fontSize } = useContext(FontSizeContext);

    const calculateDynamicFontSize = (baseFontSize) => {
      // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
      return baseFontSize * (fontSize / 40);
    };

    return (
        <div className={styles.body}>
          <ConfigButton />
          <CustomFontSize />
            <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(32)}px` }}>Não, divido casa com amigos (república, pensão, etc)</h1>
            <div className={styles.Container} >
                <div className={styles.balao1}>
                    <p style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>Nesses momentos é de extrema importância que você se aproxime os seus amigos e até mesmo compartilhe os seu sentimentos com eles.</p>
                    <img src={amigos} alt="Não foi possível encontrar imagem" />
                </div>
                <div className={styles.balao2}>
                    <p style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>Recomendo também que você procure a ajuda de um profissional para melhor lhe orientar. No QR Code abaixo, há uma tabela com alguns psicólogos disponíveis em São Carlos.</p>
                    <img src={tabelapsico} alt="Não foi possível encontrar imagem" />
                </div>
            </div>
            
            <div className={styles.allback}>
            <Link to="/sentindo_so" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
            <Link to="/reconhecimento/feedback/rotina" style={{ textDecoration: 'none' }}>
                  <input type="button" value="CONCLUIR" className={styles.finalize} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
        </div>

    );
}