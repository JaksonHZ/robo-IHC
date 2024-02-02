import React, { useContext } from "react";
import styles from "./livalone.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";
import ConfigButton from "../../components/ConfigButton/ConfigButton";


export default function MorarSo()
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
            <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Sim, moro só</h1>
            <div className={styles.Container}>
                <div className={styles.balao1}>
                    <p>Tente entrar em contato com algum familiar ou amigo próximo e compartilhe o que você está sentindo nesse momento, além de realizarem alguma atividade de lazer juntos.</p>
                    <img src="src\assets\soamigos.png" alt="Não foi possível encontrar imagem" />
                </div>
                <div className={styles.balao2}>
                    <p>Recomendo também que você procure a ajuda de um profissional para melhor lhe orientar. No QR Code abaixo, há uma tabela com alguns psicólogos disponíveis em São Carlos.</p>
                    <img src="src\assets\tabelapsico.png" alt="Não foi possível encontrar imagem" />
                </div>
            </div>
            
            <div className={styles.allback}>
            <Link to="/sentindo_so" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
            <Link to="/" style={{ textDecoration: 'none' }}>
                  <input type="button" value="CONCLUIR" className={styles.finalize} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
        </div>

    );
}