// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import { createTheme, ListItem, MantineProvider, rem, Text } from '@mantine/core';
import '@mantine/core/styles.css';
import { ModalsProvider } from '@mantine/modals';
import { useState } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import { Context } from './Context';
import './scss/_index.scss';

export default function App() {
	const theme = createTheme({
		primaryColor: 'blue',
		fontFamily: 'Montserrat, sans-serif',
		fontSizes: {
			xs: rem(13),
			sm: rem(14),
			md: rem(16),
			lg: rem(18),
			xl: rem(21),
			ul: rem(44),
		},
		components: {
			Text: Text.extend({
				defaultProps: { c: 'dark.6', fw: '500' },
			}),
			ListItem: ListItem.extend({
				defaultProps: { c: 'dark.6', fw: '500' },
			}),
		},
	});

	const [darkMode, setDarkMode] = useState<boolean | null>(null)

	return (
		<Context.Provider value={{ darkMode, setDarkMode }}>
			<MantineProvider defaultColorScheme="light" forceColorScheme="light" theme={theme}>
				<ModalsProvider>
					<Header />
					<Landing />
					<Projects />
					<Skills />
					<Experience />
					<About />
					<Contact />
					<Footer />
				</ModalsProvider>
			</MantineProvider>
		</Context.Provider>
	);
}
