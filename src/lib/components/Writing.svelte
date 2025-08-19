<script lang='ts'>
  interface Props {
    title: string,
    description: string 
  }

  let { title, description }: Props = $props();
</script>

<div class="space-y-2 p-5 border-b last:border-b-0">
  <h2 class="font-medium">{title}</h2>
  <p>{description}</p>
</div>