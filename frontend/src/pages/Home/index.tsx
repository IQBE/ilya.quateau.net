import Navbar from "../../components/Navbar";
import AboutMe from "../../components/AboutMe";
import Greet from "../../components/Greet";
import Projects from "../../components/Projects";
import Blog from "../../components/Blog";
import Links from "../../components/Links";
import Footer from "../../components/Footer";

import "./Home.module.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Greet />
        <AboutMe />
        <Projects />
        <Blog />
        <Links />
      </main>
      <Footer />
    </>
  );
};

export default Home;

