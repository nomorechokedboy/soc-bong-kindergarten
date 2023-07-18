<script lang="ts">
	import { Button } from '$lib'
	import { storyblokEditable, type StoryblokComponent } from '@storyblok/svelte'
	import { showForm } from '$lib/stores'

	export let blok: StoryblokComponent

	function handleOpenForm() {
		$showForm = true
	}
</script>

<section
	use:storyblokEditable={blok}
	id="hero"
	class=" flex w-full flex-col bg-[#f9f9f9] lg:flex-row"
>
	{#if blok}
		<div class="w-full">
			<figure>
				<img class="max-w-full" src={blok.image_banner?.filename} alt={blok.image_banner?.alt} />
			</figure>
		</div>
		<div class="relative grid w-full place-items-center py-4">
			<Button class="font-bold text-white" on:click={handleOpenForm}>Đăng ký ngay</Button>
		</div>
	{/if}
</section>
