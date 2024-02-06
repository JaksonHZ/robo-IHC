import { useState } from "react";
import styles from "./styles.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export default function Meditacao() {
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();


  const handleNavigation = () => {
    navigate("/respostas_prontas");
  }


  return (
    <div className={styles.body}>

      {
      started 
      ? <p>Inicie o video a seguir, e siga suas instruções</p>
      : <p>Etapa de respiração concluída, deseja seguir para etapa de meditação?</p>
      }
      

      <div className={styles.bigCircle}>
        {started 
        ? <iframe width="560" height="315" src="https://www.youtube.com/embed/RylLBe8yAwc?si=1b4uZFcrI_8MN8HB" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
        
        : <CustomButton text={"Começar"} onClick={() => setStarted(true)} />}

      </div>

     { !started &&
      <CustomButton className={styles.buttonCancel} text={"Cancelar"} onClick={handleNavigation} />}

      {started &&
      <CustomButton className={styles.buttonNext} text={"Concluir"} onClick={handleNavigation} />}
    </div>
  );
}
