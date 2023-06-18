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
</script>

<div class="grid place-items-center">
	<div class="relative flex h-full min-h-screen w-full max-w-screen-2xl flex-col md:px-10 lg:p-0">
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
