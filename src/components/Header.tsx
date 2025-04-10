import { Box, Burger, Container, Flex, Title } from '@mantine/core';
import { useState } from 'react';

const linkProps = [
	{ path: '#home', label: 'Home' },
	{ path: '#projects', label: 'Projects' },
	{ path: '#skills', label: 'Skills' },
	{ path: '#experience', label: 'Experience' },
	{ path: '#about', label: 'About' },
	{ path: '#contact', label: 'Contact' },
];
const headerLinks = linkProps.map(({ label, path }) => <a key={label} href={path}>{label}</a>);

function Hamburger({ onClick}: {onClick: () => void}) {
	return (
		<Flex onClick={onClick} align={'center'} className="header-burger" hiddenFrom='sm'>
			<Burger />
		</Flex>
	);
}

function ToolbarLinks() {
	return (
		<Flex gap={'md'} visibleFrom="sm">
			{headerLinks}
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
			hiddenFrom='sm'
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
	return (
		<Box className="header">
			<Container p={'md'}>
				<Flex gap={'md'} align={'center'} justify={'space-between'}>
					<Title style={{zIndex: 20}} size={'lg'} className='title'>RyanKTT</Title>
					<ToolbarLinks />
					<Hamburger onClick={toggleAccordion}/>
				</Flex>
			<AccordionLinks active={accordionActive}/>
			</Container>
		</Box>
	);
}
