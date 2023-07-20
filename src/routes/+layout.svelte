<script lang="ts">
	import '../app.css'
	import '@fontsource/montserrat/vietnamese-300.css'
	import '@fontsource/montserrat/vietnamese-400.css'
	import '@fontsource/montserrat/vietnamese-500.css'
	import '@fontsource/montserrat/vietnamese-600.css'
	import '@fontsource/montserrat/vietnamese-700.css'
	import '@fontsource/montserrat/vietnamese-800.css'
	import '@fontsource/montserrat/vietnamese-900.css'
	import Footer from './layouts/Footer.svelte'
	import Header from './layouts/Header.svelte'
	import { fade } from 'svelte/transition'
	import { TrialForm } from '$lib'
	import TimesIcon from '~icons/uil/times'
	import { showForm } from '$lib/stores'

	const showOnPx = 150
	let hidden = true

	function scrollContainer() {
		return document.documentElement || document.body
	}

	function handleOnScroll() {
		if (!scrollContainer()) {
			return
		}

		if (scrollContainer().scrollTop > showOnPx) {
			hidden = false
		} else {
			hidden = true
		}
	}

	function handleOpenForm() {
		$showForm = true
	}

	function handleCloseForm() {
		$showForm = false
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			handleCloseForm()
		}
	}
</script>

<svelte:window on:scroll={handleOnScroll} on:keydown={handleKeyDown} />

<div class="grid place-items-center">
	<div class="relative flex h-full min-h-screen w-full flex-col md:px-10 lg:p-0">
		{#if !hidden}
			<div class="fixed bottom-5 right-1 z-10 px-2.5 py-1" transition:fade>
				<button on:click={handleOpenForm}>
					<img
						src="https://ilo.edu.vn/themes/ilo/assets/landingpage/05aug/imgs/CTA.png"
						alt="Register button"
					/>
				</button>
			</div>
		{/if}
		<slot name="header">
			<Header />
		</slot>
		<div class="fixed right-0 top-20 z-40 flex max-w-xs flex-col gap-5 lg:mr-5" />
		<main class="flex-grow">
			<slot />
		</main>
		<slot name="footer">
			<Footer />
		</slot>
	</div>
</div>
{#if $showForm}
	<div class="fixed inset-0 z-50 grid lg:place-items-center">
		<div
			class="absolute inset-0 -z-10 bg-black/20 backdrop-blur-sm"
			on:keydown={() => {
				//
			}}
			on:click={handleCloseForm}
		/>
		<div class="w-full max-w-lg bg-white md:mx-auto lg:mx-0">
			<div class="flex items-center justify-end">
				<button class="p-3 active:translate-y-1" on:click={handleCloseForm}>
					<TimesIcon width={24} height={24} />
				</button>
			</div>
			<TrialForm />
		</div>
	</div>
{/if}
