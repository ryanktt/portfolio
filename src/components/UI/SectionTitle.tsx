import { Center, Text, Title } from '@mantine/core';

export default function SectionTitle({
	title,
	description,
	color,
}: {
	title: string;
	description?: string;
	color?: string;
}) {
	return (
		<Center style={{flexDirection: 'column'}} mb={50}>
			<Title size={28} c={color}>
				{title}
			</Title>
			<Text size='lg' c={color}>{description}</Text>
		</Center>
	);
}
