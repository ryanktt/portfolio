/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

/** Sets animation className `.animate` when element is viewed. */
export function HandleAnimationInView(elemQuerySelector: string) {
	useEffect(() => {
		const elements = document.querySelectorAll(elemQuerySelector);
		elements.forEach((elem) => {
			const observer = new IntersectionObserver(
				(entries) => {
					observerCallback(entries, observer);
				},
				{ threshold: 0.3 },
			);
			observer.observe(elem);
		});
		const observerCallback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('animate');
				}
			});
		};
	}, []);
}
