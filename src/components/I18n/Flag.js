import React from 'react';

const Flag = ({ image, isSelected, ...props }) => (
	<div className={isSelected ? 'flag selected' : 'flag'} {...props}>
		<img alt="flag" src={image} />
	</div>
);

export default Flag;
