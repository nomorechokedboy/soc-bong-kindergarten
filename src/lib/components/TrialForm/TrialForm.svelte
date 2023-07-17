<script lang="ts">
	import { Button } from '$lib'
	import { storyblokEditable } from '@storyblok/svelte'
	import FormInput from '../FormInput/FormInput.svelte'
	import FormDropdown from '../FormDropdown/FormDropdown.svelte'

	$: data = $$props.blok
</script>

{#if data}
	<div
		class="flex w-full flex-col items-center gap-8 bg-white px-9 py-5 lg:px-[60px] lg:py-10 {$$props.class}"
		id={$$props.id}
		use:storyblokEditable={data}
	>
		<h2 class="w-full text-center text-lg font-extrabold uppercase text-indigo-950 lg:text-2xl">
			{data.formHeader}
			<!-- <br /> -->
		</h2>
		<form action="" class="flex w-full flex-col gap-9">
			{#each data?.forms as blok}
				{#if blok.component == 'formInput'}
					<FormInput data={blok} class="w-full" />
				{/if}
			{/each}

			{#each data?.forms as blok}
				{#if blok.component == 'formDropdown'}
					<FormDropdown data={blok} />
				{/if}
			{/each}

			<div class="grid place-items-center">
				{#each data?.button as blok}
					<Button type={blok?.type} class="font-bold uppercase text-white"
						>{blok.name?.toUpperCase()}</Button
					>
				{/each}
			</div>
		</form>
	</div>
{/if}
