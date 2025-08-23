<script lang="ts">
	interface Props {
		company: string;
		position: string;
		description: string;
	}

	let { company, position, description }: Props = $props();
</script>

<div
	class="flex flex-row items-center justify-between space-x-5 border-b border-gray-300 p-5 last:border-b-0"
>
	<div class="space-y-2">
		<div class="space-y-1">
			<h2 class="font-semibold text-black">{company}</h2>
			<h3 class="text-sm font-medium text-black">{position}</h3>
		</div>
		<p>{description}</p>
	</div>
</div>
