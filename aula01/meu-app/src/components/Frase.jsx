import styles from './Frase.module.css'
function Frase(){
    return(
        <div className={styles.Conteiner}>
            <p className={styles.content}>este é um componente com uma frase</p>
        </div>
    )
}
export default Frase