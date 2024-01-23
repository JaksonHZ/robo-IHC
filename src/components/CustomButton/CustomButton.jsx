/* eslint-disable react/prop-types */
import styles from "./CustomButton.module.css"

export default function CustomButton({text, onClick, className}){
  return(
    <div className={className}>
      <button className={styles.button} onClick={onClick}>
        <span>{text}</span>
      </button>
    </div>
  )
}