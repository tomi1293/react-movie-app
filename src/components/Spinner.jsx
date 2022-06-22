import styles from "./Spinner.module.css"

export const Spinner = () => {
  return (
    <div className={styles.loaderContainer}>
        <span className={styles.loader}></span>
    </div>
  )
}
