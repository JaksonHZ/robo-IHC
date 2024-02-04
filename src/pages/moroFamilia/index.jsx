import React, { useContext } from "react";
import styles from "./family.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import familia from "../../assets/familya.png";
import tabelapsico from "../../assets/tabelapsico.png";


export default function MorarFamilia()
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
            <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Não, moro com familiares</h1>
            <div className={styles.Container}>
                <div className={styles.balao1}>
                    <p style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>Tente manter uma boa relação com seus pais, converse com eles e além de tudo, tente se expressar caso queira ir atrás de passar mais tempo com as novas amizades.</p>
                    <img src={familia} alt="Não foi possível encontrar imagem" />
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