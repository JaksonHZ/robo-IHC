import { useContext } from "react";
import styles from "./styles.module.css";
import CustomFontSize from "../../components/CustomFontSize/CustomFontSize";
import ConfigButton from "../../components/ConfigButton/ConfigButton";
import { FontSizeContext } from "../../context/ContextFontSize";
import { Link } from "react-router-dom";

export default function TermosDeUso(){
    const { fontSize } = useContext(FontSizeContext);

    const calculateDynamicFontSize = (baseFontSize) => {
        // Aqui você pode ajustar o fator multiplicativo ou aditivo conforme necessário
        return baseFontSize * (fontSize / 40);
    };

    return(
        <div className={styles.body} style={{ color: 'white' }}>
            <ConfigButton />
            <CustomFontSize />
            <h1 className={styles.firstSon} style={{ fontSize: `${calculateDynamicFontSize(40)}px` }}>Termos de Uso</h1>
            <p style={{ fontSize: `${calculateDynamicFontSize(16)}px` }}>
                Bem-vindo ao serviço de atendimento automatizado do Departamento de  Computação da UFSCar. Ao utilizar este serviço, você concorda com os seguintes termos de uso:
            </p>
            <ol style={{ fontSize: `${calculateDynamicFontSize(14)}px` }}>
                <li>
                <strong>Finalidade do Serviço:</strong> Este serviço destina-se a fornecer informações e assistência relacionadas aos assuntos do Departamento de Computação da UFSCar.
                </li>

                <li>
                <strong>Utilização Responsável:</strong> O usuário concorda em utilizar o serviço de maneira responsável e respeitosa. Qualquer uso indevido, abusivo ou violação destes termos pode resultar em restrição de acesso.
                </li>

                <li>
                <strong>Precisão da Informação:</strong> O Departamento de Computação da UFSCar se esforça para fornecer informações precisas e atualizadas. No entanto, não garantimos a precisão ou integridade de todas as informações apresentadas.
                </li>

                <li>
                <strong>Privacidade:</strong> As interações com o robô podem ser registradas para melhorar a qualidade do serviço, mas as informações pessoais dos usuários serão tratadas com confidencialidade de acordo com as políticas de privacidade aplicáveis.
                </li>

                <li>
                <strong>Limitação de Responsabilidade:</strong> O Departamento de Computação da UFSCar não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequentes decorrentes do uso ou incapacidade de uso deste serviço.
                </li>

                <li>
                <strong>Alterações nos Termos:</strong> Reservamo-nos o direito de revisar e atualizar estes termos de uso a qualquer momento. Recomendamos que os usuários revisem periodicamente os termos para estar ciente de quaisquer alterações.
                </li>
            </ol>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <input type="button" value="VOLTAR" className={styles.button} />
            </Link>
            
        </div>

    )
}
