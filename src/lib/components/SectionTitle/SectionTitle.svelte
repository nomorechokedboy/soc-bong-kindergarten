<script context="module" lang="ts">
	export type SubTitleProps = { props?: { class: string }; content: string }
</script>

<script lang="ts">
	export let title: string
	export let subTitles: SubTitleProps[]
</script>

<div class="flex flex-col gap-2.5 text-center text-xs text-neutral-700">
	<h2 class="text-lg font-extrabold text-indigo-950 lg:text-[42px]/10">
		{title}
	</h2>
	{#each subTitles as { content, props }, i (i)}
		<p {...props}>
			{content}
		</p>
	{/each}
</div>
