import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import { FaArrowLeft } from "react-icons/fa";

const ArrowLeft = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(-1); // Navega para trás na pilha de histórico
    };

    return (
        <div className={styles.arrowleft}>
            <button onClick={handleClick}>
                <FaArrowLeft size={32}/>
            </button>
        </div>
    );
};

export default ArrowLeft;