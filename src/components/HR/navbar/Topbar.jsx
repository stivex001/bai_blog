import styles from "./navbar.module.css"

const Topbar = () => {
  return (
    <div className={styles.topbar}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <p>Logo</p>
            </div>
            <div className={styles.right}>
                iudfug
            </div>
        </div>
    </div>
  )
}

export default Topbar