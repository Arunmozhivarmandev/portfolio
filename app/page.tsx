import Banner from './components/home/Banner';
import Skills from './components/home/skills';
import Experience from './components/home/Experience';
import PortfolioShowcase from './components/home/projects';

export default function Home() {
  return (
    <>
      <Banner />
      <Experience />
      <PortfolioShowcase />
      <Skills />
    </>
  );
}
