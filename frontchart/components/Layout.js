import styles from "../styles/Home.module.css"
import Meta from "./Meta"
import Navigationbar from '../components/Navigationbar'


const Layout = ({ children }) => {

    return (
        <>
            <Meta title="房地产透视" />
            <Navigationbar />
            <div className={styles.container}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout