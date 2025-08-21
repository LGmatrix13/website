<script lang="ts">
	interface Props {
		title: string;
		href: string;
	}
	let { title, href }: Props = $props();
</script>

<div class="border-b border-gray-300 last:border-b-0">
	<a {href} target="_blank" rel="noopener noreferrer">
		<div class="p-5">
			{title}
		</div>
	</a>
</div>
