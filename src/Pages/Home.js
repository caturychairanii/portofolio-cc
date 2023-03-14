import Navbar from "../Components/Navbar";
import Banner from "../Components/Banner";
import About from "../Components/About";
import Education from "../Components/Education";
import Skills from "../Components/Skills";
import Project from "../Components/Project";
import Contact from "../Components/Contact";

const Home = () => {
    return (
        <>

            <Navbar />
            <main className="l-main">

                <Banner />

                <About />

                <Education />

                <Skills />

                <Project />

                <Contact />
            </main>

        </>
    )
}

export default Home;