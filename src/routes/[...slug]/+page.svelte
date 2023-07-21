<script lang="ts">
	import { onMount } from 'svelte'
	import { useStoryblokBridge, StoryblokComponent } from '@storyblok/svelte'
	import type { PageData } from './$types'
	export let data: PageData

	$: ({ story } = data)
	onMount(() => {
		if (story) {
			useStoryblokBridge(story.id, (newStory) => (story = newStory))
		}
	})
</script>

{#key story}
	<div class="h-full w-full">
		{#if story}
			<StoryblokComponent blok={story.content} />
		{/if}
	</div>
{/key}
