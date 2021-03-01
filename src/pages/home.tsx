import { GetServerSideProps } from 'next';
import Head from 'next/head';
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import ChallengeBox from "../components/ChallengeBox";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from '../contexts/ChallengesContext';
import React, { useContext, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import axios from 'axios';
import { LoginContext } from '../contexts/LoginContext';
import { useRouter } from 'next/router';
import Error from '../components/Error';

interface HomeProps {
  level : number;
  currentExperiente: number;
  challengesCompleted: number;
}

const SCREEN = {
  HOME: 'home',
  LOADING: 'loading',
  ERROR: 'error',
  RANKING: 'ranking',
}

export default function Home(props: HomeProps) {

  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [screen, setScreen] = useState(SCREEN.LOADING);
  const router = useRouter();
  const { user } = router.query;

  const getUser = async (user) => {
    const res = await axios.get(`
    https://api.github.com/users/${user}`)
    .then((res) => {
      setPhoto(res.data.avatar_url);
      setName(res.data.login);
      setScreen(SCREEN.HOME);
    })
    .catch((err) => {
      setScreen(SCREEN.ERROR);
    })
  };
  
  useEffect(() => {
    getUser(user);
  }, []);
  

  return (
    <ChallengesProvider level={props.level} currentExperiente={props.currentExperiente} challengesCompleted={props.challengesCompleted} >

        <Head>
          <title>Início | se.apruma</title>
        </Head>

      {screen === SCREEN.LOADING && (
        <Loader />
      )}

      {screen === SCREEN.RANKING && (
        <h1>oi</h1>
      )}

      {screen === SCREEN.ERROR && (
        <Error />
      )}

      {screen === SCREEN.HOME && (
        <div className={styles.container}>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile url={photo} username={name} />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
             </div>
            </section>
          </CountdownProvider>
        </div>
      )}

    </ChallengesProvider>  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const { level, currentExperiente, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
    level: Number(level),
    currentExperiente: Number(currentExperiente),
    challengesCompleted: Number(challengesCompleted),
    }
  }
}