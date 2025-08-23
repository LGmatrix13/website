<script lang="ts">
	interface Props {
		title: string;
		description: string;
	}

	let { title, description }: Props = $props();
</script>

<div class="space-y-2 border-b border-gray-300 p-5 last:border-b-0">
	<h2 class="font-semibold text-black">{title}</h2>
	<p>{description}</p>
</div>
