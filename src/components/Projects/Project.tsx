import { Badge, Button, Flex, rem, Text, Title, useMantineTheme } from '@mantine/core';
import { MouseEventHandler } from 'react';
import ImgCarousel from '../UI/ImgCarousel';

export interface IProject {
	tags: string[];
	title: string;
	description: string;
	releaseDate: string;
	color: string;
	secondaryColor: string;
	features: string[];
	siteSrc?: string;
	imgSrcs?: string[];
	codeSrcs?: string[];
}

const Project = (props: IProject) => {
	const theme = useMantineTheme();
	const {
		description,
		imgSrcs,
		secondaryColor,
		releaseDate,
		tags,
		title,
		color,
		codeSrcs,
		features,
		siteSrc,
	} = props;

	const tagList = (
		<div>
			{tags.map((tag) => (
				<Badge className="tag" color={`${color}.7`} key={tag}>
					{tag}
				</Badge>
			))}
		</div>
	);

	const openCodeUrls: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		codeSrcs?.forEach((url) => {
			window.open(url);
		});
	};

	const openWebsiteUrl: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault();
		window.open(siteSrc);
	};

	const featureList = (
		<ul>
			{features.map((feat) => (
				<li>
					<Text c={'dark.4'}>{feat}</Text>
				</li>
			))}
		</ul>
	);

	return (
		<div className="project">
			<Flex gap={'md'} justify={'space-between'} direction={'column'} w={'100%'}>
				<Flex justify={'space-between'}>
					<Title size={'xl'} c={`${color}.8`}>
						{title}
					</Title>
					<Text size="sm" c={'dark.3'}>
						{releaseDate}
					</Text>
				</Flex>
				<Text size="md" c={'dark.4'} miw={300}>
					{description}
				</Text>
				<Flex className="feat-tag-box">
					<div className="features">
						<Title fw={600} size={'md'} c={`${color}.8`}>
							Features
						</Title>
						{featureList}
					</div>
					<div className="tags">
						<Title fw={600} size={'md'} c={`${color}.8`} mb={'md'}>
							Technologies
						</Title>
						{tagList}
					</div>
				</Flex>

				<div style={{ margin: `${rem(10)} 0` }}>
					{imgSrcs?.length ? <ImgCarousel imgSrcs={imgSrcs} controlColor={color} /> : null}
				</div>

				<Flex gap={'xs'}>
					<Button
						color={theme.colors[secondaryColor][7]}
						size="sm"
						radius={'sm'}
						w={120}
						onClick={openWebsiteUrl}
					>
						<i className="fas fa-eye"></i> Website
					</Button>
					<Button
						color={theme.colors[color][7]}
						size="sm"
						radius={'sm'}
						w={120}
						onClick={openCodeUrls}
					>
						<i className="fas fa-code"></i> Code
					</Button>
				</Flex>
			</Flex>
		</div>
	);
};

export default Project;
