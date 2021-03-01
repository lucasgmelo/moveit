import React from 'react'
import styles from '../styles/components/Loader.module.css'

function Loader() {
    return (
        <div className={styles.LoaderContainer}>
            <img src="line_1.svg" />
            <img src="line_2.svg" />
            <img src="line_1.svg" />
        </div>
    )
}

export default Loader
