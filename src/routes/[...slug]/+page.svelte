<!-- <script lang="ts">
	import Banner from '../sections/Banner.svelte'
	import DayAtOurSchool from '../sections/DayAtOurSchool.svelte'
	import Facilities from '../sections/Facilities.svelte'
	import Foundation from '../sections/Foundation.svelte'
	import WhyChooseUs from '../sections/WhyChooseUs.svelte'
	import FAQ from '../sections/FAQ.svelte'
</script>

<div class="h-full w-full">
	<Banner />
	<Foundation />
	<DayAtOurSchool />
	<Facilities />
	<WhyChooseUs />
	<FAQ />
</div> -->

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
