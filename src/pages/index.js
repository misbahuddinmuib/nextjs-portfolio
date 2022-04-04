import Achievements from '../components/Achievements/Achievements';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import Skills from '../components/Skills/Skills';
import About from '../components/About/About';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <About />
      <Skills />
      <Achievements />
      <Features />
    

    </Layout>
  );
};

export default Home;
