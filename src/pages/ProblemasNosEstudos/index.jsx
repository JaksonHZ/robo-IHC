import { useContext } from "react";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import { FontSizeContext } from "../../context/ContextFontSize";

export default function ProblemasNosEstudos(){
    const { fontSize } = useContext(FontSizeContext);
    
    const calculateDynamicFontSize = (baseFontSize) => {
        // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
        return baseFontSize * (fontSize / 40);
      };

    return(
        <div className={styles.body}>
            <CustomFontSize />
            <h1 className={styles.firstSon} style={{ fontSize: `${fontSize}px` }}>Estou tendo problemas nos meus estudos da faculdade</h1>
            <div className={styles.button} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>
                <p>Você conhece o ProEstudo?</p>
                <p>O objetivo principal do ProEstudo é apoiar os alunos de graduação</p>
                <p>da UFSCar em desenvolver e aprimorar seu repertório de estudo.</p>
                <p>Esse projeto oferece palestras, oficinas e atendimentos</p>
                <p>individuais realizados em salinhas no piso 5 da BCo.</p>
                <p>Caso queira saber mais, pode entrar em contato com eles pelo e-mail,</p>
                <p>Instagram, escanear o QRCode ou responder o forms do ProEstudo na bio do Instagram.</p>
                <img src="src/assets/qrcode_proestudo.png" alt="QR Code ProEstudo" className={styles.qrcodeImage} />               
                <img src="src/assets/proestudo.png" alt="ProEstudo" className={styles.proestudoImage} />
                <p>@proestudo_ufscar</p>
                <p>proestudo@ufscar.br</p>
                
                <div className={styles.allback}>
            <Link to="/respostas_prontas" style={{ textDecoration: 'none' }}>
                  <input type="button" value="VOLTAR" className={styles.back} style={{ fontSize: `${calculateDynamicFontSize(16)}px` }} />
            </Link>
          </div>
            </div>
            
        </div>

    )
}
