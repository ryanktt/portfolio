import style from './Portfolio.scss';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar/Navbar';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Experience from '../../components/Experience';

function Portfolio() {
	return (
		<div className={style.Portfolio}>
			<Navbar />
			<Header />
			<Skills />
			<Projects />
			<Experience />
			<Contact />
			<Footer />
		</div>
	);
}

export default Portfolio;
