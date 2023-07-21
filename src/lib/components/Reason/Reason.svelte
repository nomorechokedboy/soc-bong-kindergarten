<script lang="ts">
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
	import SvelteMarkdown from 'svelte-markdown'

	export let blok: StoryblokComponent
</script>

<figure use:storyblokEditable={blok}>
	<img class="h-auto max-w-full" src={blok.img?.filename} alt={blok.img?.alt} />
	<figcaption class="mt-2.5 flex flex-col gap-4">
		<h4 class="text-base font-semibold uppercase text-green-700">
			{blok.title}
		</h4>
		<p class="text-sm font-medium text-neutral-700">
			<SvelteMarkdown source={blok?.content} />
		</p>
	</figcaption>
</figure>
