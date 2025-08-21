<script lang="ts">
	import { LINKS } from '$lib/utilities/constants';
	import LinkedinIcon from './LinkedinIcon.svelte';
	import GithubIcon from './GithubIcon.svelte';
	import profilePicture from '../assets/liam_grossman.jpg';
	import { page } from '$app/state';
</script>

<aside
	class="flex h-full flex-col space-y-7 border-b border-gray-300 p-7 md:justify-between md:border-b-0"
>
	<div class="space-y-5">
		<button
			class="cursor-pointer rounded-lg bg-blue-700 px-3 py-1 tracking-wide transition ease-in-out hover:bg-blue-800"
		>
			<span class="transform text-sm font-medium text-white">LIAM GROSSMAN</span>
		</button>
		<div class="flex flex-col space-y-3">
			<a href="/">
				<span
					class={`font-medium ${
						page.url.pathname === '/' ? 'underline decoration-blue-600 decoration-2' : ''
					}`}
				>
					About Me
				</span>
			</a>
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
			<a href="/blog">
				<span
					class={`font-medium ${
						page.url.pathname === '/blog' ? 'underline decoration-blue-600 decoration-2' : ''
					}`}
				>
					Blog
				</span>
			</a>
		</div>
	</div>
	<div class="flex space-x-3">
		<a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
			<GithubIcon
				className="w-5 h-5 opacity-60 grayscale-60 hover:opacity-80 transition ease-in-out"
			/>
		</a>
		<a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
			<LinkedinIcon
				className="w-5 h-5 opacity-60 grayscale-60 hover:opacity-80 transition ease-in-out"
			/>
		</a>
	</div>
</aside>
