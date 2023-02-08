import Download from "./components/download/Download";
import Feature from "./components/features/Feature";
import Footer from "./components/footer/Footer";
import { Navbar , Header } from "./components/index";
import Questions from "./components/questions/Questions";
import Subscribe from "./components/subscribe/Subscribe";
import "./index.css"

function App() {
  return (
    <main>
      <header className="header">
        <Navbar/>
        <Header/>
      </header>
      <Feature/>
      <Download/>
      <Subscribe/>
      <Questions/>
      <Footer/>
    </main>
  );
}

export default App;
