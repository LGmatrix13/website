<script lang="ts">
	import { animations } from '$lib/utilities/animations';
</script>

{#snippet textWithLogo({ logo, text }: { logo: string; text: string })}
	<button class="flex items-center space-x-1 rounded-full border border-gray-300 px-2">
		<img src={logo} class="h-[12px] w-[12px]" />
		<span class="text-sm">{text}</span>
	</button>
{/snippet}

<section use:animations.fadeBlurIn class="space-y-3 p-7">
	<p class="inline-block leading-7">
		My name is Liam and I am a Software Engineer at <a href="https://db.com" class="inline-block">
			{@render textWithLogo({
				logo: 'https://prod2.master.db.com/application/themes/default/favicon/favicon-32x32.png',
				text: 'Deutsche Bank'
			})}
		</a>, where I am building payment infrastructure in the corporate bank division. I also
		co-founded
		<a href="https://thymely.ai" class="inline-block">
			{@render textWithLogo({
				logo: 'https://preview.thymely.ai/favicon.svg',
				text: 'Thymely'
			})}</a
		>, an AI application to help higher education instutions boost student engagement. I am a proud
		graduate of
		<a href="https://gcc.edu" class="inline-block">
			{@render textWithLogo({
				logo: 'https://www.gcc.edu/Portals/0/favicon2.ico?ver=YAYNUauHSRuGuyTHR0TUjA%3d%3d',
				text: 'Grove City College'
			})}</a
		>, were I majored in Computer Science and Data Science.
	</p>
	<p class="leading-7">
		My interest are in building systems that reach the equibulirum of performance and <a
			href="https://en.wikipedia.org/wiki/Developer_Experience"
			class="text-blue-600"
		>
			developer productivity</a
		>. To hone in on this interest, I frequently try different technologies, paradigms, and develop
		open-source abstractions to help others build better software.
	</p>
	<p class="leading-7">
		Lately I have building AI related libraries in the <a
			href="https://nodejs.org"
			class="inline-block"
		>
			{@render textWithLogo({
				logo: 'https://nodejs.org/static/images/favicons/favicon.png',
				text: 'Node.js'
			})}</a
		>
		and
		<a href="https://python.org" class="inline-block"
			>{@render textWithLogo({
				logo: 'https://www.python.org/static/favicon.ico',
				text: 'Python'
			})}</a
		>
		ecosystems. I try to share what I learn here on my blog. My latest posts are below! Feel free to
		connect with me on
		<a href="https://linkedin.com/in/liam_grossman" class="text-blue-600">LinkedIn</a>, I'm always
		willing to learn something new!
	</p>
</section>
