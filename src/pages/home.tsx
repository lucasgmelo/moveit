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

interface HomeProps {
  level : number;
  currentExperiente: number;
  challengesCompleted: number;
}

const SCREEN = {
  LOADING: 'loading',
  HOME: 'home',
  RANKING: 'ranking',
}

export default function Home(props: HomeProps) {

  const [screen, setScreen] = useState(SCREEN.LOADING);
  const { user, userData, handleUser, handleUserData } = useContext(LoginContext);
  const router = useRouter();

  useEffect(() => {
    GetUser(user);
  }, []);
  
  const GetUser = async (user: string) => {
    const res = await axios.get(`https://api.github.com/users/${user}`);
  }

  return (
    <ChallengesProvider level={props.level} currentExperiente={props.currentExperiente} challengesCompleted={props.challengesCompleted} >

      {screen === SCREEN.LOADING && (
        <Loader />
      )}

      {screen === SCREEN.HOME && (
        <div className={styles.container}>
        <Head>
          <title>Início | se.apruma</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
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