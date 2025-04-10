import { Box, Container, Flex, Image, List, ListItem, Text, Title } from '@mantine/core';
import engaged from '../../assets/experience/engaged-logo.png';
import { HandleAnimationInView } from '../hooks/handle-animation-in-view';
import SectionTitle from './UI/SectionTitle';

const experienceProps = [
	{
		logo: engaged,
		title: 'Head of Backend - EngagED SA',
		duration: { start: '2021', finish: 'Present' },
		description: (
			<Flex direction={'column'} gap={10}>
				<Text>
					At EngagED SA, I had the privilege of working on a new API from scratch with my team,
					where I undertook the challenge of developing and maintaining a serverless API for a white
					label education platform. During my tenure, I played a pivotal role in shaping the
					platform's core functionality, focusing on several key features, such as:
				</Text>
				<List withPadding spacing={'sm'} w={'95%'}>
					<ListItem>
						<b>Course and Class Management:</b> Developed the foundational features for course and
						class management, including course creation, room allocation, chapter structuring, and
						lesson management. Along with lighting fast course/chapter/lesson copy functionality.
					</ListItem>
					<ListItem>
						<b>File Storage Integration:</b> Integrated file storage functionality, enabling users
						to upload and manage course-related materials securely.
					</ListItem>
					<ListItem>
						<b>Enrollment System Optimization:</b> Implemented an enrollment system, leveraging
						AWS SQS for streamlined data analytics and enhanced performance.
					</ListItem>
					<ListItem>
						<b>Certificate Builder:</b> Certificate Builder: Developed a certificate builder tool
						that allows for the creation of personalized templates while offering various
						generation options based on student course progress or manual inputs.
					</ListItem>
					<ListItem>
						<b>Payment Implementations:</b> Orchestrated the integration of payment solutions,
						including Payment Gateway, Invoice, Checkout. Recurring payment options such as
						Subscription and Payment Schedule.
					</ListItem>
					<ListItem>
						<b>Split Rules Configuration:</b> Implemented split rules configuration that allow
						fine control of what each recipient will earn from a payment, as well as Checkout
						affiliation system that works across organizations.
					</ListItem>
				</List>
				<Text>
					Throughout my time at EngagED SA, I had the privilege of learning from experienced
					colleagues who generously shared their knowledge and expertise. Their guidance and
					mentorship were invaluable in helping me navigate complex technical challenges and develop
					effective solutions.
				</Text>
				<Text>
					As I transitioned into the role of the sole backend developer, the skills and insights
					imparted by my mentors served as a solid foundation, empowering me to take on new
					responsibilities with confidence. Even in moments of autonomy, I never felt alone, knowing
					that I could rely on the support and expertise of my colleagues whenever needed.
				</Text>
				<Text>
					This collaborative learning environment not only accelerated my technical growth but also
					fostered a strong sense of teamwork and camaraderie. Together, we tackled ambitious
					projects, celebrated shared successes, and learned from each other's experiences, creating
					a culture of continuous learning and improvement.
				</Text>
			</Flex>
		),
	},
];

export default function Experience() {
	HandleAnimationInView('.xp-item');

	const experiences = experienceProps.map(({ description, logo, duration, title }) => (
		<div className="xp-item">
				<Flex align={'center'} justify={'space-between'} wrap={'wrap'} gap={8}>
					<Image src={logo} w={120} className="logo" />

					<Text size={'sm'} c={'dimmed'}>
						{duration.start} - {duration.finish}
					</Text>
				</Flex>
				<Title mt={'sm'} mb={'sm'} fw={700} c={'dark.6'} size={'xl'}>
					{title}
				</Title>
			{description}
		</div>
	));

	return (
		<Box id="experience" w={'100vw'} className="experience section">
			<Container className="container">
				<SectionTitle title="Experience" color="white" />
				{experiences}
			</Container>
		</Box>
	);
}
