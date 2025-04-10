import { MantineSize, Title } from '@mantine/core';

export default function LogoStyleTitle({ title, size }: { title: string; size: MantineSize | number }) {
	return (
		<div style={{ position: 'relative' }}>
			<Title size={size} className="logo-title-top" style={{ zIndex: '15' }} pos={'relative'}>
				{title}
			</Title>
		</div>
	);
}
