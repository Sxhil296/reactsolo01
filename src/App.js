import About from "./components/About";
import Buttons from "./components/Buttons";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Photo from "./components/Photo";


function App() {
  return (
    <div className="container">
     <Photo />
     <Buttons />
     <About />
     <Interests />
     <Footer />
    </div>
  );
}

export default App;
