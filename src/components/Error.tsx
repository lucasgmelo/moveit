import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/components/Error.module.css'

function Error() {
    const router = useRouter();

    return (
        <div className={styles.ErrorContainer}>
            <div>
                <p>eita, mulenga! aconteceu alguma presepada ;( presta atenção pra escrever teu user direito</p>
                <button onClick={() => {
                    router.push('./')
                }} >clica aqui pra voltar, visse</button>
            </div>
        </div>
    )
}

export default Error
