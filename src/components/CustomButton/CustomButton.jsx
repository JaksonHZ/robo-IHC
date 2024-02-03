/* eslint-disable react/prop-types */
import styles from "./CustomButton.module.css"

export default function CustomButton({text, onClick, className, style}){
  return(
    <div className={className}>
      <button className={styles.button}  onClick={onClick} style={style}>
        <span>{text}</span>
      </button>
    </div>
  )
}