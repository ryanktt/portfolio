import { Box, Button, Card, Container, Flex, Group, Image, Text, useMantineTheme } from '@mantine/core';
import { modals } from '@mantine/modals';
import forum from '../../../assets/projects/forum/logo.jpg';
import quaestio from '../../../assets/projects/quaestio/logo.png';

import { HandleAnimationInView } from '../../hooks/handle-animation-in-view';
import SectionTitle from '../UI/SectionTitle';
import Project, { IProject } from './Project';

import quaestioEditQuestSrc from '../../../assets/projects/quaestio/edit.png';
import quaestioMetricsSrc from '../../../assets/projects/quaestio/metrics.png';
import quaestioNewQuestSrc from '../../../assets/projects/quaestio/new.png';
import quaestioQuestionEditSrc from '../../../assets/projects/quaestio/question.png';
import quaestioRespondSrc from '../../../assets/projects/quaestio/respond.png';
import quaestioSampleSrc from '../../../assets/projects/quaestio/sample.png';

import forumCategories from '../../../assets/projects/forum/categories.png';
import forumQuote from '../../../assets/projects/forum/quote.png';
import forumRegister from '../../../assets/projects/forum/register.png';
import forumThread from '../../../assets/projects/forum/thread.png';
import forumThreads from '../../../assets/projects/forum/threads.png';

const questionProjectProps = {
	logoSrc: quaestio,
	title: 'Quaestio',
	description:
		'Personalize, track, and manage your questionnaires easily. Quaestio is a questionnaire platform that grants you full control of your questionnaires in a simple, easy to use way, while still providing countless form options that will cover your every use case.',
	features: [
		'Granular Configuration',
		'Personalization Options',
		'Questionnaire Metrics',
		'Response Feedback',
		'Rich Text Descriptions',
		'5 Different Question Types',
		'AWS SQS implementation for safe response processing',
	],
	color: 'indigo',
	secondaryColor: 'violet',
	imgSrcs: [
		quaestioSampleSrc,
		quaestioNewQuestSrc,
		quaestioEditQuestSrc,
		quaestioQuestionEditSrc,
		quaestioMetricsSrc,
		quaestioRespondSrc,
	],
	releaseDate: 'March, 2025',
	siteSrc: 'https://quaestio-beta.vercel.app/',
	codeSrcs: ['https://github.com/ryanktt/quaestio-back', 'https://github.com/ryanktt/quaestio-front'],
	tags: [
		'HTML',
		'CSS',
		'SASS',
		'JavaScript',
		'Mantine',
		'Webpack',
		'TypeScript',
		'NestJS',
		'MongoDB',
		'NodeJS',
		'Yarn',
		'React',
		'GraphQL',
		'AWS SQS',
		'AWS Lambda',
		'Serverless',
	],
};

const forumProjectProps = {
	logoSrc: forum,
	title: 'FórumPlayers',
	description:
		'A gaming community-driven platform enabling moderated discussions and content sharing. Developed from scratch and with no UI libraries, this was intended to reinforce my knowladge on basic programming concepts, while also helping on learning and applying the more advanced ones.',
	siteSrc: 'https://forum-client.onrender.com/',
	codeSrcs: ['https://github.com/ryanktt/forum-players'],
	features: ['Authentication', 'Like/Dislike', 'Content Moderation', 'Private Message', 'Quote Notification', 'BBCode'],
	tags: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'NodeJs', 'NPM', 'ExpressJs', 'React', 'Redux'],
	releaseDate: 'August, 2021',
	color: 'yellow',
	imgSrcs: [forumCategories, forumRegister, forumThreads, forumThread, forumQuote],
	secondaryColor: 'red',
};

function ProjectCard({ imgSrc, projectProps }: { projectProps: IProject; imgSrc: string }) {
	const theme = useMantineTheme();
	const openModal = () => {
		modals.open({
			size: 'xl',
			centered: true,
			padding: 'lg',
			styles: { content: { border: `2px solid ${theme.colors[projectProps.color][1]}` } },
			radius: 'md',
			withCloseButton: false,
			overlayProps: { backgroundOpacity: 0.3, blur: 2 },
			zIndex: 500,
			children: <Project {...projectProps} />,
		});
	};

	return (
		<Card className="project-card" shadow="sm" h={500} padding="lg" radius="md" maw={440} miw={300}>
			<Flex justify={'space-between'} h={'100%'} direction={'column'}>
				<div>
					<Card.Section component="a" href="https://mantine.dev/">
						<Image src={imgSrc} height={'auto'} alt="project-img" />
					</Card.Section>

					<Group justify="space-between" mt="md" mb="xs">
						<Text fw={500}>{projectProps.title}</Text>
						<Text c={'dark.3'} size="sm">
							{projectProps.releaseDate}
						</Text>
					</Group>

					<Text size="sm" c="dark.3">
						{projectProps.description}
					</Text>
				</div>

				<Button color={'pink'} onClick={openModal} fullWidth mt="md" radius="md">
					View Project Details
				</Button>
			</Flex>
		</Card>
	);
}

export default function Projects() {
	HandleAnimationInView('.project-card');

	return (
		<Box id="projects" className="projects section">
			<Container className="container">
				<SectionTitle title="Projects" description="You won't regret checking them out" color="white" />
				<Group justify="center" gap={'xl'}>
					<ProjectCard key={'quaestio'} imgSrc={quaestio} projectProps={questionProjectProps} />
					<ProjectCard key={'forum-players'} imgSrc={forum} projectProps={forumProjectProps} />
				</Group>
			</Container>
		</Box>
	);
}
