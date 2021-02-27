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

interface HomeProps {
  level : number;
  currentExperiente: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider level={props.level} currentExperiente={props.currentExperiente} challengesCompleted={props.challengesCompleted} >
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