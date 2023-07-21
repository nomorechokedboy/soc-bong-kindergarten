<script>
	import { onMount, onDestroy } from 'svelte'
	import { browser } from '$app/environment'
	import NavigateIcon from '~icons/mdi/directions-fork'

	export let x
	export let y
	export let zoom
	export let locationText
	export let address
	let mapElement
	let map
	let showHint = false

	function handleMarkerClick() {
		showHint = !showHint
	}

	function handleHideHint() {
		showHint = false
	}

	onMount(async () => {
		if (browser) {
			const leaflet = await import('leaflet')

			map = leaflet.map(mapElement).setView([x, y], zoom).on('click', handleHideHint)

			leaflet
				.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
					attribution:
						'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				})
				.addTo(map)

			leaflet
				.marker([x, y])
				.addTo(map)
				.on('click', handleMarkerClick)
				.bindPopup(locationText)
				.openPopup()
		}
	})

	onDestroy(async () => {
		if (map) {
			map.remove()
		}
	})
</script>

<main class="relative h-full">
	<div class="absolute inset-0 z-0" bind:this={mapElement} />
	{#if showHint}
		<div class="absolute right-3 top-3">
			<div class="flex max-w-xs bg-white p-3 text-xs">
				<div class="flex flex-1 flex-col gap-2">
					<div class="flex flex-col gap-1">
						<h3 class="text-sm font-bold">{locationText}</h3>
						<p class="text-neutral-700">
							{address}
						</p>
					</div>
					<a
						class="text-green-500 hover:underline"
						target="_blank"
						href="https://www.google.com/maps/place/{address}">Xem bản đồ lớn hơn</a
					>
				</div>
				<div class="flex w-1/4 flex-col gap-1">
					<a href="https://www.google.com/maps/dir/{address}" target="_blank">
						<NavigateIcon
							class="mx-auto -scale-x-100 text-green-500"
							width={24}
							height={24}
							hFlip
						/>
						<p class="mt-1 text-center text-green-500 hover:underline">Chỉ đường</p>
					</a>
				</div>
			</div>
		</div>
	{/if}
</main>

<style>
	@import 'leaflet/dist/leaflet.css';
	main {
		max-height: 100vh;
		min-height: 800px;
	}
</style>
