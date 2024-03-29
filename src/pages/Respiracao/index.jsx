import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";

export default function Respiracao() {
  const [started, setStarted] = useState(false);
  const [size, setSize] = useState(150); 
  const [isInhaling, setIsInhaling] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let interval;
    if (started) {
      interval = setInterval(() => {
        setSize((prevSize) => {
          if (isInhaling) {
            const newSize = prevSize + (469 - 150) / 5;
            if (newSize >= 469) {
              setIsInhaling(false);
            }
            return newSize;
          } else {
            const newSize = prevSize - (469 - 150) / 5; 
            if (newSize <= 150) {
              setIsInhaling(true);
            }
            return newSize;
          }
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [started, isInhaling]);
  function handleStop(){
    setStarted(false);
    setSize(150);
    setIsInhaling(true);
  }

  const handleNavigation = () => {
    navigate("/meditacao");
  }

  return (
    <div className={styles.body}>

      {
      started 
      ? <p>Fique tranquilo e concentre-se na respiração</p>
      : <p>Caso deseje iniciar o exercício de respiração guiada clique em começar</p>
      }
      

      <div
        className={styles.bigCircle}
      >
        <div className={styles.smallCircle} 
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transition: 'width 1s linear, height 1s linear',
          }}
        >
          {started ? (isInhaling ? 'Inspire' : 'Expire') : (
            <CustomButton text={"Começar"} onClick={() => setStarted(true)} />
          )}
        </div>
      </div>

      {started && (
        <CustomButton text={"Parar"} onClick={handleStop} />
      )}

      <CustomButton className={styles.buttonNext} text={"Seguir"} onClick={handleNavigation} />
    </div>
  );
}
