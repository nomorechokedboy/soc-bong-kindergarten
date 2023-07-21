<script lang="ts">
	import LeafletMap from '../LeafletMap.svelte'
	import { storyblokEditable, type StoryblokComponent } from '@storyblok/svelte'
	import AgencyLocation from './AgencyLocation.svelte'

	export let blok: StoryblokComponent
	let currentLocation = {
		x: 11.16667,
		y: 106.66667,
		zoom: 13,
		locationText: '',
		address: ''
	}
	$: if (blok) {
		currentLocation.x = blok.agencies[0].longitude
		currentLocation.y = blok.agencies[0].latitude
		currentLocation.zoom = blok.agencies[0].zoom ?? 13
		currentLocation.locationText = blok.agencies[0].name
		currentLocation.address = blok.agencies[0].address
	}

	function setCurrentLocation(address: string, name: string, zoom: number, x: number, y: number) {
		currentLocation = { address, zoom, x, y, locationText: name }
	}
</script>

<section class="py-12" use:storyblokEditable={blok}>
	{#if blok}
		<div class="mx-auto flex max-w-screen-2xl flex-col-reverse px-4 md:flex-row">
			<div class="flex-1">
				{#key currentLocation}
					<LeafletMap {...currentLocation} />
				{/key}
			</div>
			<div class="flex flex-1 flex-col gap-5 bg-[#f4fdf4] p-5 lg:gap-8 lg:p-10">
				<h2 class="text-lg font-extrabold text-[#00b14f] lg:text-[42px]">{blok.title}</h2>
				<div class="flex flex-col">
					{#each blok.agencies as { address, phone, name, zoom, longitude, latitude }}
						<div>
							<AgencyLocation
								{address}
								{phone}
								{name}
								on:click={() => setCurrentLocation(address, name, zoom, longitude, latitude)}
							/>
							<hr class="my-3 h-px border-0 bg-neutral-200 lg:my-6" />
						</div>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>
