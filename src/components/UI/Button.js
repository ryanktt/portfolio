import React from 'react';

const Button = (props) => {
	const { children, path, small, dark } = props;
	let { type } = props;
	let classes = 'button';
	if (small) classes = `${classes} small`;
	if (dark) classes = `${classes} dark`;
	if (!type) type = 'button';

	let target = '_blank';
	if (path) if (path.includes(window.location.href)) target = '';

	if (type === 'submit')
		return (
			<button className={classes} type={type}>
				{children}
			</button>
		);
	return (
		<a target={target} href={path}>
			<button className={classes} type={type}>
				{children}
			</button>
		</a>
	);
};

export default Button;
