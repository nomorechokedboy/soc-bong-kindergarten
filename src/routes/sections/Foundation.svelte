<script lang="ts">
	import { SectionTitle } from '$lib'
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'

	export let blok: StoryblokComponent
</script>

<section
	class="flex flex-col gap-2.5 bg-white px-4 py-12"
	id="foundation"
	use:storyblokEditable={blok}
>
	{#each blok.sectionTitle as { title, subTitle }}
		<SectionTitle {title} {subTitle} />
	{/each}
	<figure class="mt-5 grid place-items-center">
		<img src={blok.image?.filename} alt={blok.image?.alt} />
	</figure>
</section>
