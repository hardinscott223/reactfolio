import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Loader,
  Navbar,
  Tech,
  Works,
} from "./components";

const App = () => {
  return (
    <div>
      <BrowserRouter>{/* Your routes will go here */}</BrowserRouter>
    </div>
  );
};

export default App;
