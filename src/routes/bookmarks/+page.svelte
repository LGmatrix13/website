<script>
	import Bookmark from '$lib/components/Bookmark.svelte';
	import { animations } from '$lib/utilities/animations';
</script>

<section id="blog" class="flex flex-grow flex-col" use:animations.fadeBlurIn>
	<h2 class="px-5 pt-5 text-lg font-bold text-black">Bookmarks</h2>
	<Bookmark
		title="It's Not Your Fault You're Behind In Life – A Software Engineer's Struggle"
		href="https://www.youtube.com/watch?v=clF2waKBQvk"
	/>
	<Bookmark title={`Developer Excellence`} href="https://youtube.com/watch?v=96VlfN7ViyE" />
	<Bookmark
		title="Software Is Changing (Again)"
		href="https://www.youtube.com/watch?v=LCEmiRjPEtQ"
	/>
	<Bookmark
		title="Programming with a love of the implicit"
		href="https://medium.com/signal-v-noise/programming-with-a-love-of-the-implicit-66629bb81ee7"
	/>
	<Bookmark title="Experts have it easy" href="https://boydkane.com/essays/experts" />
	<Bookmark
		title="How to increase your surface area for luck"
		href="https://usefulfictions.substack.com/p/how-to-increase-your-surface-area"
	/>
	<Bookmark title="Codin' Dirty" href="https://htmx.org/essays/codin-dirty/" />
	<Bookmark title="Complexity Budget" href="https://htmx.org/essays/complexity-budget/" />
	<Bookmark title="Software As Art" href="https://www.youtube.com/watch?v=vekEjoMSi38" />
</section>
