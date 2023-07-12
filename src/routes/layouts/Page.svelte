<script lang="ts">
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
	import type { StoryblokComponentProps } from '@storyblok/svelte/dist/StoryblokComponent.svelte'
	export let blok: StoryblokComponentProps
</script>

{#key blok}
	<div use:storyblokEditable={blok} class="px-6">
		{#each blok.body as item}
			<StoryblokComponent blok={item} />
		{/each}
	</div>
{/key}
