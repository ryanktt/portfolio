import style from  './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className={style.App}>
      <Navbar/>
      <Header/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
