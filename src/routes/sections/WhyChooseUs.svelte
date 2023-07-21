<script lang="ts">
	import { Reason } from '$lib'
	import { storyblokEditable, type StoryblokComponent } from '@storyblok/svelte'

	type ReasonProps = { src: string; alt?: string; title: string; content: string }
	export let blok: StoryblokComponent
</script>

<section class="bg-[#ebeff2] py-12" id="why" use:storyblokEditable={blok}>
	<div class="mx-auto flex max-w-screen-2xl flex-col gap-5 px-4">
		<h2 class="text-center text-base font-extrabold text-green-700 lg:text-[42px]/10">
			{blok.title}
		</h2>
		<div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
			{#each blok.reasons as reason}
				<Reason blok={reason} />
			{/each}
		</div>
	</div>
</section>
