import { Box, Container, Flex } from '@mantine/core';
import { HandleAnimationInView } from '../hooks/handle-animation-in-view';

export default function Footer() {
	HandleAnimationInView('.icons');

	return (
		<Box id="footer" w={'100vw'} className="footer">
			<Container className="container">
				<Flex justify={'space-between'}>
					<p>© 2021 https://ryanktt.github.io/portfolio</p>
					<Flex gap={'xs'} align={'center'}>
						<div>
							<a
								className="icon-link"
								href="https://github.com/ryanktt"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-github-square"></i>
							</a>
						</div>
						<div>
							<a
								className="icon-link"
								href="https://www.linkedin.com/in/ryan-kayro-6338ab209/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-linkedin"></i>
							</a>
						</div>
					</Flex>
				</Flex>
			</Container>
		</Box>
	);
}
