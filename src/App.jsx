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
  Footer
} from "./components";
import SocialSidebar from "./components/Sidebar";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-black min-h-screen">
        <Navbar />  
        <main className="pt-40">
          <SocialSidebar />
          <Hero />
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
          </div>
          <Footer/>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;