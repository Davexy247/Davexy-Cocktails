import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { SplitText } from "gsap/all";
import Navbar from "./components/Navbar";
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  <main>
    <Navbar />
  </main>;
};

export default App;
