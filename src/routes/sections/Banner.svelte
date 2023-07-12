<script lang="ts">
	import { TrialForm } from '$lib'
	import { storyblokEditable, type StoryblokComponent } from '@storyblok/svelte'
	export let blok: StoryblokComponent
</script>

<section
	use:storyblokEditable={blok}
	id="hero"
	class=" flex w-full flex-col bg-[#f9f9f9] lg:flex-row"
>
	<div class="w-full">
		<figure>
			<img class="max-w-full" src={blok.image_banner?.filename} alt={blok.image_banner?.alt} />
		</figure>
	</div>
	<div class="relative w-full bg-white py-4">
		<div class="mx-auto w-full lg:absolute lg:bottom-0 lg:right-0 lg:mx-0 lg:max-w-[490px]">
			{#each blok.trialForm as item}
				<TrialForm id="registerForm" blok={item} />
			{/each}
		</div>
	</div>
</section>
