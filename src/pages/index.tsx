import { useRouter } from 'next/router';
import React from 'react'
import styles from '../styles/pages/Index.module.css';

export default function index() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img src="icons/icon.svg" alt="Ícone"/>
      <section>
        <img src="my_logo.svg" alt="Logo"/>
        <div className={styles.login}>
          <h3>Bem-vindo</h3>
          <div>
            <img src="icons/Github.svg" alt="Github"/>
            <p>Faça seu login com o Github para começar.</p>
          </div>
          <form className={styles.input} onSubmit={(event) => {
            event.preventDefault();
            router.push('/home');
          }}>
            <input type="text" placeholder="Digite seu username"/>
            <button type="submit" >
              <img src="icons/arrow_right.svg" alt="Continuar"/>
            </button>
          </form>
        </div>
      </section>
    </div>  )
}
