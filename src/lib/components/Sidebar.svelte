<script lang="ts">
	import { LINKS } from '$lib/utilities/constants';
	import LinkedinIcon from './LinkedinIcon.svelte';
	import GithubIcon from './GithubIcon.svelte';
	import profilePicture from '../assets/liam_grossman.jpg';
	import { page } from '$app/state';
</script>

<aside class="flex h-full flex-col space-y-7 border-b md:justify-between md:border-b-0">
	<div class="space-y-5">
		<div>
			<img src={profilePicture} class="mb-5 h-28 w-28 rounded-full" alt="Headshot" />
			<h1 class="mb-3 text-lg font-bold">👋 Hi, I'm Liam!</h1>
			<p>
				I'm a Software Engineer at<br />
				{' '}
				<a href={LINKS.GCC} target="_blank" rel="noopener noreferrer">
					<span class="text-blue-600 hover:text-blue-800"> Deutsche Bank. </span>
				</a>
			</p>
		</div>
		<div class="flex flex-col space-y-3">
			<a href="/experience">
				<span
					class={`font-medium ${
						page.url.pathname === '/experience' ? 'underline decoration-blue-600 decoration-2' : ''
					}`}
				>
					Experience
				</span>
			</a>
			<a href="/projects">
				<span
					class={`font-medium ${
						page.url.pathname === '/projects' ? 'underline decoration-blue-600 decoration-2' : ''
					}`}
				>
					Projects
				</span>
			</a>
		</div>
	</div>
	<div class="flex space-x-3">
		<a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
			<GithubIcon className="w-5 h-5 opacity-60 grayscale-60" />
		</a>
		<a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
			<LinkedinIcon className="w-5 h-5 opacity-60 grayscale-60" />
		</a>
	</div>
</aside>
