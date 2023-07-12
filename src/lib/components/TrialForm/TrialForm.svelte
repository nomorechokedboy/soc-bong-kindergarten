<script lang="ts">
	import { Button } from '$lib'
	import { StoryblokComponent, storyblokEditable } from '@storyblok/svelte'
	import FormInput from '../FormInput/FormInput.svelte'
	import FormDropdown from '../FormDropdown/FormDropdown.svelte'
	// import {storyblokEditable, type StoryblokComponent} from '@storyblok/svelte';
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

<!-- <input class="px-2.5 py-1" type="text" placeholder="Họ và tên Phụ Huynh" />
		<input class="px-2.5 py-1" type="number" placeholder="Số điện thoại" />
		<select name="cars" id="cars">
			{#each data.dropdown_menu as name, i}
				<option value="{i}">{name}</option>
			{/each}
		</select>	
		<select name="cars" id="cars">
			{#each data.dropdown_menu as name, number}
				<option value="{number}">{name}</option>
			{/each}
		</select>
		<select name="cars" id="cars">
			<option value="volvo">Volvo</option>
			<option value="saab">Saab</option>
			<option value="opel">Opel</option>
			<option value="audi">Audi</option>
		</select> -->
