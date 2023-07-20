<script context="module" lang="ts">
	export type SubTitleProps = { props?: { class: string }; content: string }
</script>

<script lang="ts">
	export let title: string
	export let subTitle: SubTitleProps[]
</script>

<div class="flex flex-col gap-2.5 text-center text-xs text-neutral-700 lg:mx-auto lg:max-w-5xl">
	<h2 class="text-lg font-extrabold text-green-700 lg:text-[42px] lg:leading-[76px]">
		{title}
	</h2>
	{#each subTitle as { content, props }, i (i)}
		<p {...props} class="text-xs lg:text-base {props?.class}">
			{content}
		</p>
	{/each}
</div>
