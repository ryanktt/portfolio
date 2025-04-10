import { Box, Button, Container, Flex, rem, Title } from '@mantine/core';

const iconLinkProps = [
	{ icon: 'fab fa-linkedin', path: 'https://www.linkedin.com/in/ryan-kayro-6338ab209/' },
	{ icon: 'fab fa-github-square', path: 'https://github.com/ryanktt' },
];

function IconLink({ icon, path }: { icon: string; path: string }) {
	return (
		<a href={path} target="_blank" rel="noopener noreferrer" className="icon-link">
			<i style={{ fontSize: rem(35), paddingTop: '1px' }} className={icon}></i>
		</a>
	);
}

export default function Landing() {
	const iconLinks = iconLinkProps.map(({ icon, path }, i) => <IconLink key={i} icon={icon} path={path} />);

	return (
		<Box id="home" className="landing section">
			<Container p={'md'} className="landing-container">
				<Flex direction={'column'} gap={'xl'}>
					<div>
						<Flex align={'baseline'}>
							<Title className="title one" mr={'xs'}>
								Hello, I'm
							</Title>
							<Title className="title one name">Ryan Kayro</Title>
						</Flex>
						<Title className="title two">A Software Developer</Title>
					</div>
					<Flex justify={'center'} gap={'sm'}>
						{iconLinks}
					</Flex>
					<a href="#projects">
						<Button w={'100%'} className="button" size="md" radius={'md'}>
							Checkout My Work
						</Button>
					</a>
				</Flex>
			</Container>
		</Box>
	);
}
