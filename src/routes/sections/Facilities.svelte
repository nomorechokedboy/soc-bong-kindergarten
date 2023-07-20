<script lang="ts">
	import { SectionTitle } from '$lib'
	import emblaCarouselSvelte, { type EmblaCarouselType } from 'embla-carousel-svelte'
	import Autoplay from 'embla-carousel-autoplay'
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'

	export let blok: StoryblokComponent

	let emblaApi: any
	let options = { loop: true }
	let plugins = [Autoplay({ delay: 2000, stopOnInteraction: false })]
	let scrollSnaps: number[] = []
	let selectedIndex = 0

	function onInit(e: any) {
		emblaApi = e.detail
		emblaApi.on('select', onSelect)
		scrollSnaps = emblaApi.scrollSnapList()
	}

	function scrollTo(index: number) {
		emblaApi?.scrollTo(index)
	}

	function onSelect(e: EmblaCarouselType) {
		selectedIndex = e.selectedScrollSnap()
	}
</script>

<section class="py-12" use:storyblokEditable={blok}>
	<div class="mx-auto flex max-w-screen-2xl flex-col gap-5 px-4">
		{#each blok.title as { title, subTitle }}
			<SectionTitle {title} {subTitle} />
		{/each}
		<div
			class="overflow-hidden"
			use:emblaCarouselSvelte={{ options, plugins }}
			on:emblaInit={onInit}
		>
			<div class="flex items-center">
				{#each blok.img_carousel as { filename, alt, title }}
					<figure class="relative min-w-0 flex-[0_0_100%]">
						<img src={filename} {alt} />
						<figcaption class="absolute bottom-5 right-0 rounded-l-3xl bg-green-600/70 px-9 py-2">
							<p class="text-sm font-medium text-white">
								{title}
							</p>
						</figcaption>
					</figure>
				{/each}
			</div>
			<ul class="mt-2 flex items-center justify-center gap-2.5">
				{#each scrollSnaps as _, i}
					{@const active = i === selectedIndex}
					<li class="grid h-8 w-8 place-items-center">
						<button
							class="before:block before:h-2.5 before:w-2.5 before:rounded-full before:bg-gray-300 before:p-1"
							class:active
							on:click={() => scrollTo(i)}
						/>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="postcss">
	.active {
		@apply before:bg-green-600/70;
	}
</style>
