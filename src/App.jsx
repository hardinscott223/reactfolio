import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";
import SocialSidebar from "./components/section/Sidebar";
import Cursor from "./components/museum/Cursor";

const App = () => {
  return (
    <BrowserRouter 
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
    <Cursor />
      <div className="bg-background text-primary min-h-screen">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Social Sidebar */}
        <SocialSidebar />

        {/* Main Content */}
        <main>
          <Hero />

          <section id="about">
            <About />
          </section>

          <section id="work">
            <Experience />
          </section>

          <section id="tech">
            <Tech />
          </section>

          <section id="projects">
            <Works />
          </section>

          <section id="feedbacks">
            <Feedbacks />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;