import { Box, Container, Flex, Image, rem, Text, useMantineTheme } from '@mantine/core';
import eye from '../../assets/photos/eye.jpg';
import joana from '../../assets/photos/joana.jpg';
import lake from '../../assets/photos/lake.jpg';
import lookahead from '../../assets/photos/lookahead.jpg';
import lookup from '../../assets/photos/lookup.jpg';
import meMobile from '../../assets/photos/me-mobile.jpg';
import me from '../../assets/photos/me.jpg';
import mountain from '../../assets/photos/mountain.jpg';
import tree from '../../assets/photos/tree.jpg';
import { HandleAnimationInView } from '../hooks/handle-animation-in-view';
import ImgCarousel from './UI/ImgCarousel';
import SectionTitle from './UI/SectionTitle';

export default function About() {
	const theme = useMantineTheme();
	HandleAnimationInView('.about');

	const content = (
		<Flex direction={'column'} gap={'lg'} className="content">
			<Text size={'xl'} className="title">
				I'm a Software Developer from Piraquara, Brazil. I believe that by working together we can
				bring our ideas to life.
			</Text>
			<Text className="text">
				Well, I can start by clarifying that I'm not the best writer, so my bad. One thing I can say
				confidently about myself, though, is my resilience and ability to overcome challenges — but
				this is not just me saying it, it's my past experiences. Having gone through and overcome so
				many complex challenges in this period of time that I've been a programmer made me realize I'm
				capable of way more than I previously thought, and it helped me become the person and
				professional I am today.
			</Text>
			<Text className="text">
				I'm passionate about learning and creating new technologies, writing clean, easily readable,
				and maintainable code that is also performant. Sharing knowledge has invaluable potential to
				me, as I appreciate feedback and constructive criticism from fellow programmers.
			</Text>
		</Flex>
	);

	const content2 = (
		<Flex direction={'column'} gap={'lg'}>
			<Text className="text2">
				When I'm not coding, I enjoy music, watching series/anime, and gaming. On weekends, my main
				hobbies are hiking and/or biking while registering everything along the way. I really enjoy
				being out in nature — to me, it feels freeing and calming.
			</Text>
			<Text className="text2">
				Though amateurish, I'm a big fan of photography. There's something about capturing a good time
				in high definition that feels good — perhaps it's because I appreciate the feeling of
				nostalgia from looking at the pictures later. Here are some pictures I've taken for
				illustration:
			</Text>
		</Flex>
	);

	const carousel = (
		<ImgCarousel imgSrcs={[mountain, lookup, lookahead, eye, joana, lake, tree]} controlColor="blue" />
	);

	return (
		<Box id="about" w={'100vw'} className="about section">
			<Container className="container">
				<SectionTitle title="About Me" />
				<Flex gap={'lg'} visibleFrom="xs">
					<div style={{ padding: theme.spacing.sm }} className="image">
						<Image radius={'md'} miw={350} src={me} />
					</div>
					{content}
				</Flex>
				<Flex mt={'lg'} wrap={'wrap'} justify={'space-between'} visibleFrom="xs">
					<div style={{ minWidth: rem(300), maxWidth: '45%' }}>{content2}</div>
					<div
						className="carousel"
						style={{ minWidth: rem(300), maxWidth: '55%', padding: theme.spacing.md }}
					>
						{carousel}
					</div>
				</Flex>

				<Flex gap={'lg'} direction={'column'} hiddenFrom="xs">
					<div className="image">
						<Image radius={'md'} fit="cover" mah={200} src={meMobile} />
					</div>
					{content}
				</Flex>
				<Flex mt={'lg'} wrap={'wrap'} justify={'space-between'} hiddenFrom="xs" gap={'lg'}>
					{content2}
					<div className="carousel">{carousel}</div>
				</Flex>
			</Container>
		</Box>
	);
}
