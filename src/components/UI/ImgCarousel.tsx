import { Carousel, CarouselSlide } from '@mantine/carousel';
import { Image, useMantineTheme } from '@mantine/core';
import { nanoid } from 'nanoid/non-secure';
import { useEffect, useState } from 'react';

export default function ImgCarousel({
	imgSrcs,
	controlColor,
	width,
}: {
	imgSrcs: string[];
	controlColor?: string;
	width?: number | string;
}) {
	const theme = useMantineTheme();
	const [key, setKey] = useState<string | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setKey(nanoid(3));
		}, 500);
	}, []);

	return (
		<Carousel
			controlSize={40}
			w={width}
			key={key}
			styles={{ control: { background: controlColor ? theme.colors[controlColor][2] : theme.white, border: '1px solid' +  theme.colors[controlColor || 'dark'][0]   }  }}
		>
			{imgSrcs.map((src) => (
				<CarouselSlide key={src} h={330} pl={'md'} pr={'md'}>
					<Image
						fit="cover"
						w={'auto'}
						maw={'90%'}
						fetchPriority="high"
						h={'100%'}
						src={src}
						radius={'md'}
						style={{ margin: '0 auto' }}
					/>
				</CarouselSlide>
			))}
		</Carousel>
	);
}
