import dynamic from 'next/dynamic';
import Banner from './components/home/Banner';
import Skills from './components/home/skills';
import Experience from './components/home/Experience';

export default function Home() {
  return (
    <>
      <Banner />
      <Skills />
      <Experience />
    </>
  );
}
