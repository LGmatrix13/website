<script lang="ts">
	import { LINKS } from '$lib/utilities/constants';
	import LinkedinIcon from './LinkedinIcon.svelte';
	import GithubIcon from './GithubIcon.svelte';
	import { page } from '$app/state';
</script>

<aside
	class="flex h-full flex-col space-y-7 border-b border-gray-300 p-7 md:justify-between md:border-b-0"
>
	<div class="flex flex-col space-y-5 transition ease-in-out">
		<a href="/">
			<button
				class="cursor-pointer rounded-lg bg-gray-900 px-2.5 py-1 tracking-wide transition ease-in-out hover:bg-gray-950"
			>
				<span class="transform text-sm font-medium tracking-wider text-white uppercase">Liam Grossman</span>
			</button>
		</a>
		<div class="flex flex-col font-medium space-y-3">
			<a href="/">
				<span class={`${page.url.pathname === '/' ? 'text-gray-950 font-medium' : 'hover:text-gray-950'}`}>
					About Me
				</span>
			</a>
			<a href="/experience">
				<span class={`${page.url.pathname === '/experience' ? 'text-gray-950 font-medium' : 'hover:text-gray-950'}`}>
					Experience
				</span>
			</a>
			<a href="/projects">
				<span class={`${page.url.pathname === '/projects' ? 'text-gray-950 font-medium' : 'hover:text-gray-950'}`}>
					Projects
				</span>
			</a>
			<a href="/bookmarks">
				<span class={`${page.url.pathname === '/bookmarks' ? 'text-gray-950 font-medium': 'hover:text-gray-950'}`}>
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
