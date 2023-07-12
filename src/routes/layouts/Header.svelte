<script lang="ts">
	import { slide } from 'svelte/transition'
	import { Button } from '$lib'
	import { page } from '$app/stores'
	function handleToggleNav() {
		opened = !opened
	}
	// const headerNavs: { content: string; href: string }[] = [
	// 	{ content: 'Nền Tảng Giáo Dục', href: '#foundation' },
	// 	{ content: 'Một ngày tuyệt vời tại ILO', href: '#aDayAtOurSchool' },
	// 	{ content: 'Vì sao chọn ILO', href: '#why' }
	// ]
	let opened = false
	let innerWidth = 0
	$: isDesktop = innerWidth > 1023
	$: {
		if (isDesktop) {
			opened = true
		}
	}
</script>

<svelte:window bind:innerWidth />
<header>
	<div
		class="grid grid-cols-2 items-center gap-3.5 px-4 py-2.5 lg:mx-auto lg:max-w-screen-2xl lg:grid-cols-7"
	>
		<div>
			{#each $page.data.header as blok}
				{#if blok.component == 'logo' && blok.length !== 0}
					<img class="max-h-[100px] lg:max-h-none" src={blok.logo?.filename} alt={blok.logo?.alt} />
				{/if}
			{/each}
		</div>
		<div class="flex justify-end lg:hidden">
			<button class="h-[34px] w-[34px] bg-red-500" on:click={handleToggleNav} />
		</div>
		<div class="col-span-full lg:col-span-6">
			{#if opened}
				{#if $page.data.header && $page.data.header?.length !== 0}
					<ul
						class="flex flex-col items-center text-black lg:flex-row lg:justify-end"
						transition:slide
					>
						{#each $page.data.header as blok, i}
							{#if blok.component == 'menu_link'}
								<li class="w-full py-2 text-center hover:text-[#4aadb5] lg:w-auto lg:px-7">
									<a href={'#' + blok.link?.anchor}>
										{blok?.name}
									</a>
								</li>
							{/if}
							{#if i == $page.data.header.length - 1}
								<li class="flex w-full items-center justify-center lg:w-auto">
									<Button class="font-bold text-white" fullWidth>Đăng ký tư vấn</Button>
								</li>
							{/if}
						{/each}
					</ul>
				{/if}
			{/if}
		</div>
	</div>
</header>
