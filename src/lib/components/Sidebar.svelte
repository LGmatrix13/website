<script lang="ts">
	import { LINKS } from '$lib/utilities/constants';
	import LinkedinIcon from './LinkedinIcon.svelte';
	import GithubIcon from './GithubIcon.svelte';
	import { page } from '$app/state';
</script>

<aside
	class="flex h-full flex-col space-y-7 border-b border-gray-300 p-7 md:justify-between md:border-b-0"
>
	<div class="flex flex-col space-y-5 transition ease-in-out hover:text-black">
		<a href="/">
			<button
				class="cursor-pointer rounded-lg bg-blue-700 px-3 py-1 tracking-wide transition ease-in-out hover:scale-110 hover:-rotate-2 hover:bg-blue-800"
			>
				<span class="transform text-sm font-extrabold text-white">LIAM GROSSMAN</span>
			</button>
		</a>
		<div class="flex flex-col space-y-3">
			<a href="/">
				<span class={`${page.url.pathname === '/' ? 'font-semibold text-black' : ''}`}>
					About Me
				</span>
			</a>
			<a href="/experience">
				<span class={`${page.url.pathname === '/experience' ? 'font-semibold text-black ' : ''}`}>
					Experience
				</span>
			</a>
			<a href="/projects">
				<span class={`${page.url.pathname === '/projects' ? 'font-semibold text-black ' : ''}`}>
					Projects
				</span>
			</a>
			<a href="/open-source">
				<span class={`${page.url.pathname === '/open-source' ? 'font-semibold text-black ' : ''}`}>
					Open Source
				</span>
			</a>
			<a href="/resume.pdf">
				<span>Resume</span>
			</a>
			<a href="/bookmarks">
				<span class={`${page.url.pathname === '/bookmarks' ? 'font-semibold text-black' : ''}`}>
					Bookmarks
				</span>
			</a>
		</div>
	</div>
	<div class="flex space-x-3">
		<a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
			<GithubIcon
				className="w-4 h-4 opacity-60 grayscale-60 hover:opacity-80 transition ease-in-out"
			/>
		</a>
		<a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
			<LinkedinIcon
				className="w-4 h-4 opacity-60 grayscale-60 hover:opacity-80 transition ease-in-out"
			/>
		</a>
	</div>
</aside>
