<script lang="ts">
	import { animations } from '$lib/utilities/animations';
	import db_logo from '$lib/assets/db.svg';
	import thymely_logo from '$lib/assets/thymely.svg';
	import node_logo from '$lib/assets/node.svg';
	import python_logo from '$lib/assets/python.svg';
	import gcc_logo from '$lib/assets/gcc.ico';
	import { LINKS } from '$lib/utilities/constants';
</script>

{#snippet textWithLogo({ logo, text }: { logo: string; text: string })}
	<button
		class="flex cursor-pointer items-center space-x-1 rounded-full border border-gray-300 px-2 text-black transition ease-in-out hover:bg-gray-100/[.3]"
	>
		<img src={logo} class="h-[12px] w-[12px]" alt={text} />
		<span class="text-sm text-black">{text}</span>
	</button>
{/snippet}

<section use:animations.fadeBlurIn class="space-y-3">
	<div class="border-b font-medium border-gray-300 text-black space-y-3 p-5" style={`background-color: rgb(255, 255, 255);
background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.04' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");`}>
		<h2 class="text-lg">👋 Hi, I'm Liam! I'm currently exploring...</h2>
		<div class="space-y-2 text-sm">
			<h3>Machine Learning</h3>
			<h3>Artifical Intelligence</h3>
			<h3>AI Enablement</h3>
			<h3>Developer Experience</h3>
			<h3>Human Computer Interaction</h3>
		</div>
	</div>
	<div class="space-y-3 px-5">
		<p class="inline-block leading-7">
			My name is Liam and I am a Software Engineer at <a
				target="_blank"
				rel="noopener noreferrer"
				href={LINKS.DB}
				class="inline-block"
			>
				{@render textWithLogo({
					logo: db_logo,
					text: 'Deutsche Bank'
				})}
			</a>.  I work under the Engineering Platform and Practices team to develop bespoke AI/ML solutions to increase developer productivity. I am also a 
			proud graduate of
			<a href={LINKS.GCC} target="_blank" rel="noopener noreferrer" class="inline-block">
				{@render textWithLogo({
					logo: gcc_logo,
					text: 'Grove City College'
				})}</a
			>, were I majored in Computer Science and Data Science.
		</p>
		<p class="leading-7">
			My interest are in building systems that reach the equibulirum of performance and <a
				href="https://en.wikipedia.org/wiki/Developer_Experience"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-800 transition ease-in-out hover:text-blue-900 underline"
			>
				developer productivity</a
			>. To hone in on this interest, I frequently try different technologies, paradigms, and
			develop open-source abstractions to help others build better software.
		</p>
		<p class="leading-7">
			Lately I have building AI related libraries in the <a
				href="https://nodejs.org"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-block"
			>
				{@render textWithLogo({
					logo: node_logo,
					text: 'Node.js'
				})}</a
			>
			and
			<a href="https://python.org" target="_blank" rel="noopener noreferrer" class="inline-block"
				>{@render textWithLogo({
					logo: python_logo,
					text: 'Python'
				})}</a
			>
			ecosystems. I'm planning on sharing what I learn here on my website soon with a new blog! If we
			haven't met, feel free to connect with me on
			<a
				href={LINKS.LINKEDIN}
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-800 underline transition ease-in-out hover:text-blue-900">LinkedIn</a
			>, I'm always willing to learn something new!
		</p>
	</div>
</section>
