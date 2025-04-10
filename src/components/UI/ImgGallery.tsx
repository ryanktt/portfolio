import { PhotoProvider, PhotoView } from 'react-photo-view';

export default function ImgGallery({ imgSrcs }: { imgSrcs: string[] }) {
	return (
		<PhotoProvider  speed={() => 300} maskOpacity={1}>
			{imgSrcs.map((src, index) => (
				<PhotoView key={index} src={src}>
					<div
						className="gallery-img"
						style={{
							display: index === 0 ? 'flex' : 'none',
						}}
					>
						<img style={{ width: '100%' }} src={src} alt={`image-${index}`} />
					</div>
				</PhotoView>
			))}
		</PhotoProvider>
	);
}
