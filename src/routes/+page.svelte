<script lang="ts">
	import { animations } from '$lib/utilities/animations';
	import db_logo from '$lib/assets/db.svg';
	import thymely_logo from '$lib/assets/thymely.svg';
	import node_logo from '$lib/assets/node.svg';
	import python_logo from '$lib/assets/python.svg';
	import gcc_logo from '$lib/assets/gcc.ico';
</script>

{#snippet textWithLogo({ logo, text }: { logo: string; text: string })}
	<button
		class="flex cursor-pointer items-center space-x-1 rounded-full border border-gray-300 px-2 text-black transition ease-in-out hover:bg-gray-100/[.3]"
	>
		<img src={logo} class="h-[12px] w-[12px]" alt={text} />
		<span class="text-sm font-medium text-black">{text}</span>
	</button>
{/snippet}

<section use:animations.fadeBlurIn class="space-y-3">
	<h2 class="px-5 pt-5 text-lg font-bold text-black">👋 Hi, I'm Liam!</h2>
	<div class="space-y-3 px-5">
		<p class="inline-block leading-7">
			My name is Liam and I am a Software Engineer at <a
				target="_blank"
				rel="noopener noreferrer"
				href="https://db.com"
				class="inline-block"
			>
				{@render textWithLogo({
					logo: db_logo,
					text: 'Deutsche Bank'
				})}
			</a>, where I am building payment infrastructure in the corporate bank division. I also
			co-founded
			<a href="https://thymely.ai" target="_blank" rel="noopener noreferrer" class="inline-block">
				{@render textWithLogo({
					logo: thymely_logo,
					text: 'Thymely'
				})}</a
			>, an AI application to help higher education instutions boost student engagement. I am a
			proud graduate of
			<a href="https://gcc.edu" target="_blank" rel="noopener noreferrer" class="inline-block">
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
				class="text-blue-600 transition ease-in-out hover:text-blue-800"
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
			ecosystems. I try to share what I learn here on my
			<a
				href="/blog"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 transition ease-in-out hover:text-blue-800">blog</a
			>. My latest posts are below! Feel free to connect with me on
			<a
				href="https://linkedin.com/in/liam_grossman"
				target="_blank"
				rel="noopener noreferrer"
				class="text-blue-600 transition ease-in-out hover:text-blue-800">LinkedIn</a
			>, I'm always willing to learn something new!
		</p>
	</div>
</section>
