import axios from 'axios';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ChallengeBox from "../components/ChallengeBox";
import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/Countdown";
import Error from '../components/Error';
import ExperienceBar from "../components/ExperienceBar";
import Loader from '../components/Loader';
import Profile from "../components/Profile";
import Sidebar from '../components/Sidebar';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from "../contexts/CountdownContext";
import styles from '../styles/pages/Home.module.css';

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
        <div className={styles.HomeContainer}>
          <Sidebar />
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