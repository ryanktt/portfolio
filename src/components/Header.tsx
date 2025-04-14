import { Box, Container, Flex, rem, Title } from '@mantine/core';
import { useEffect, useState } from 'react';
import ModeSwitcher from './UI/ModeSwitcher';

const linkProps = [
	{ path: '#home', label: 'Home' },
	{ path: '#projects', label: 'Projects' },
	{ path: '#skills', label: 'Skills' },
	{ path: '#experience', label: 'Experience' },
	{ path: '#about', label: 'About' },
	{ path: '#contact', label: 'Contact' },
];
const headerLinks = linkProps.map(({ label, path }) => (
	<a key={label} href={path}>
		{label}
	</a>
));

function Hamburger({ onClick }: { onClick: () => void }) {
	return (
		<Flex gap={'xl'} hiddenFrom="sm" align={'center'}>
			<ModeSwitcher />
			<Flex onClick={onClick} align={'center'} className="header-burger">
				<i className="fa fa-bars" aria-hidden="true"></i>
			</Flex>
		</Flex>
	);
}

function ToolbarLinks() {
	return (
		<Flex gap={'md'} visibleFrom="sm" align={'center'}>
			{headerLinks}
			<ModeSwitcher />
		</Flex>
	);
}

function AccordionLinks({ active }: { active: boolean }) {
	return (
		<Flex
			className={`header-accordion ${active ? 'active' : ''}`}
			gap={'lg'}
			direction={'column'}
			p={'lg'}
			align={'center'}
			hiddenFrom="sm"
		>
			{headerLinks}
		</Flex>
	);
}

export default function Header() {
	const [accordionActive, setAccordionActive] = useState(false);

	const toggleAccordion = () => {
		setAccordionActive(!accordionActive);
	};

	/* When the user scrolls down, hide the header. When the user scrolls up, show the header */
	useEffect(() => {
		let prevScrollPos = window.scrollY;

		const header = document.querySelector('.header') as HTMLElement;
		const accordion = document.querySelector('.header-accordion') as HTMLElement;

		if (!header) return;
		console.log(rem(-57))
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;

			if (prevScrollPos >= currentScrollPos) {
				header.style.top = '0';
			} else {
				header.style.top = rem(-57);
				accordion?.classList.remove('active');
			}

			prevScrollPos = currentScrollPos;
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<Box className="header">
			<Container className="container">
					<Flex gap={'md'} w={'100%'} h={'100%'} align={'center'} justify={'space-between'}>
						<Title style={{ zIndex: 20 }} size={'lg'} className="title">
							RyanKTT
						</Title>
						<ToolbarLinks />

						<Hamburger onClick={toggleAccordion} />
					</Flex>
					<AccordionLinks active={accordionActive} />
			</Container>
		</Box>
	);
}
