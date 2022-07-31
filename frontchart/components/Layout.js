
import styles from "../styles/Home.module.css"

const Layout = ({ children }) => {
    return (
        <>
            <div className={styles.container}>
                <div className={style.main}></div>
                {children}
            </div>
        </>
    )
}