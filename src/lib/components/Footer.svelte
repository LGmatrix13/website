<script lang="ts">
	import { LINKS } from '$lib/utilities/constants';
</script>

<div class="mb-7 flex justify-center space-x-3 text-gray-500 ease-in-out">
	<a href={LINKS.GITHUB} target="_blank" rel="noopener noreferrer">
		<p class="hover:text-gray-800">GitHub</p>
	</a>
	<a href={LINKS.LINKEDIN} target="_blank" rel="noopener noreferrer">
		<p class="hover:text-gray-800">LinkedIn</p>
	</a>
	<a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
		<p class="hover:text-gray-800">Résumé</p>
	</a>
	<a href="mailto:me@liamgrossman.com">
		<p class="hover:text-gray-800">Email</p>
	</a>
</div>
