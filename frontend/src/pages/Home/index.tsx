import Navbar from "../../components/Navbar";
import AboutMe from "../../components/AboutMe";
import Greet from "../../components/Greet";
import Projects from "../../components/Projects";
import Blog from "../../components/Blog";
import Links from "../../components/Links";
import Footer from "../../components/Footer";
import StarBackground from "../../components/StarBackground";

const Home = () => {
  return (
    <>
      <StarBackground />
      <Navbar />
      <main>
        <section id="home">
          <Greet />
        </section>
        <section id="aboutMe">
          <AboutMe />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="blog">
          <Blog />
        </section>
        <section id="links">
          <Links />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;

