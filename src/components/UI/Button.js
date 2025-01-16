import { HashLink } from 'react-router-hash-link';
import React from 'react';

const Button = (props) => {
	const { children, path, small, dark, isHashLink } = props;
	let { type } = props;
	let classes = 'button';
	if (small) classes = `${classes} small`;
	if (dark) classes = `${classes} dark`;
	if (!type) type = 'button';

	let target = '_blank';
	if (path)
		if (path.includes('https://ryanktt.github.io/portfolio/')) target = '';

	if (type === 'submit')
		return (
			<button className={classes} type={type}>
				{children}
			</button>
		);

	const button = (
		<button className={classes} type={type}>
			{children}
		</button>
	);

	return !isHashLink ? (
		<a target={target} href={path}>
			{button}
		</a>
	) : (
		<HashLink smooth to={path}>
			{button}
		</HashLink>
	);
};

export default Button;
