import React from 'react';
import resume from '../../assets/CV.pdf';

const Resume = () => {
	return (
		<section style={{ padding: 0 }}>
			<iframe
				src={resume}
				style={{
					width: '100%',
					height: '100vh',
					border: 'none',
				}}
				title="Resume"
			></iframe>
		</section>
	);
};

export default Resume;
