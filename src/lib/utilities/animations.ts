import { animate } from 'motion/mini';

function fadeBlurIn(element: HTMLElement) {
	element.style.opacity = '0';
	element.style.filter = 'blur(2px)';
	element.style.transform = 'scale(.98)';
	animate(
		element,
		{
			opacity: 1,
			filter: 'blur(0px)',
			transform: 'scale(1)'
		},
		{
			duration: 0.25,
			ease: 'easeOut'
		}
	);
}

export const animations = {
	fadeBlurIn
};
