import styles from '../styles/components/Sidebar.module.css';

function Sidebar() {
    return (
        <div className={styles.SidebarContainer}>
            <a href="/">
                <img src="icons/logo.svg" alt="Logo"/>
            </a>
            <div>
                <ul className={styles.Navigation}>
                    <li>
                        <span></span>
                        <img src="icons/home.svg" alt=""/>
                    </li>
                    <li>
                        <img src="icons/award.svg" alt=""/>
                    </li>
                </ul>
            </div>
            <span></span>
        </div>
    )
}

export default Sidebar
