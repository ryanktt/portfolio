import style from './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Skills from './components/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
	return (
		<div className={style.App}>
			<Navbar />
			<Header />
			<Skills />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
