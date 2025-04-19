import { Box, Container, Group, Text } from '@mantine/core';

import aws from '../../assets/icons/aws.png';
import css from '../../assets/icons/css.svg';
import docker from '../../assets/icons/docker.svg';
import expressjs from '../../assets/icons/expressjs.svg';
import git from '../../assets/icons/git.svg';
import github from '../../assets/icons/github.svg';
import graphql from '../../assets/icons/graphql.svg';
import html from '../../assets/icons/html.svg';
import javascript from '../../assets/icons/javascript.svg';
import mongodb from '../../assets/icons/mongodb.svg';
import mysql from '../../assets/icons/mysql.svg';
import nestjs from '../../assets/icons/nestjs.svg';
import nodejs from '../../assets/icons/nodejs.svg';
import npm from '../../assets/icons/npm.svg';
import react from '../../assets/icons/react.svg';
import redux from '../../assets/icons/redux.svg';
import restapi from '../../assets/icons/restapi.png';
import sass from '../../assets/icons/sass.svg';
import serverless from '../../assets/icons/serverless.svg';
import typescript from '../../assets/icons/typescript.svg';
import yarn from '../../assets/icons/yarn.svg';
import { HandleAnimationInView } from '../hooks/handle-animation-in-view';
import SectionTitle from './UI/SectionTitle';

const skillsProps = [
	{ imgSrc: html, label: 'HTML' },
	{ imgSrc: css, label: 'CSS' },
	{ imgSrc: javascript, label: 'JavaScript' },
	{ imgSrc: typescript, label: 'TypeScript' },
	{ imgSrc: nodejs, label: 'NodeJS' },
	{ imgSrc: expressjs, label: 'ExpressJs' },
	{ imgSrc: nestjs, label: 'NestJs' },
	{ imgSrc: aws, label: 'AWS' },
	{ imgSrc: graphql, label: 'GraphQL' },
	{ imgSrc: restapi, label: 'Api REST' },
	{ imgSrc: docker, label: 'Docker' },
	{ imgSrc: serverless, label: 'Serverless' },
	{ imgSrc: npm, label: 'NPM' },
	{ imgSrc: yarn, label: 'Yarn' },
	{ imgSrc: sass, label: 'Sass' },
	{ imgSrc: react, label: 'React' },
	{ imgSrc: redux, label: 'Redux' },
	{ imgSrc: mysql, label: 'MySQL' },
	{ imgSrc: mongodb, label: 'MongoDB' },
	{ imgSrc: git, label: 'Git' },
	{ imgSrc: github, label: 'GitHub' },
];

export default function Skills() {
	HandleAnimationInView('.icons')

	const skills = skillsProps.map(({ imgSrc, label }) => (
		<div key={label} className="icon">
			<img alt={`${label}-img`} src={imgSrc} />
			<Text size="xs" c={'dark.8'}>{label}</Text>
		</div>
	));

	return (
		<Box id="skills" w={'100vw'} className="skills section">
			<Container className='container'>
				<SectionTitle title="Skills" description="Technologies I've worked with" />
				<Group gap={35} justify="center" className="icons" w={'100%'}>
					{skills}
				</Group>
			</Container>
		</Box>
	);
}
