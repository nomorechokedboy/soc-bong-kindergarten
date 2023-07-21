<script lang="ts">
	import LocationIcon from '~icons/fa6-solid/location-dot'
	import PhoneIcon from '~icons/ph/phone-fill'
	import EmailIcon from '~icons/grommet-icons/mail'
	import FacebookIcon from '~icons/circum/facebook'
	import YoutubeIcon from '~icons/circum/youtube'
	import InstagramIcon from '~icons/circum/instagram'
	import { page } from '$app/stores'

	const contacts = [
		{ icon: PhoneIcon, contactContent: '090 695 4388', contactType: 'Hotline' },
		{ icon: EmailIcon, contactContent: 'info@ilo.edu.vn', contactType: 'Email' }
	]
	const mediaChannels = [
		{ href: 'https://www.facebook.com/iloacademy', icon: FacebookIcon },
		{ href: 'https://www.youtube.com/channel/UCWizKyF_gKVu7CNh2YPKPfQ', icon: YoutubeIcon },
		{ href: 'https://www.instagram.com/iloacademy/', icon: InstagramIcon }
	]
</script>

<footer class="flex flex-col bg-[#ebeff2] py-12 text-sm text-[#414b56]">
	<section class="mx-auto w-full max-w-screen-2xl px-4">
		<div class="flex flex-col justify-center lg:flex-row lg:gap-[150px]">
			<div class="grid place-items-center lg:place-items-start">
				<a href="/">
					{#each $page.data.footer as blok}
						{#if blok.component == 'logo' && blok.length !== 0}
							<img
								class="w-20 lg:w-auto"
								width="212"
								height="237"
								src={blok.logo?.filename}
								alt={blok.logo?.alt}
							/>
						{/if}
					{/each}
				</a>
			</div>
			<div class="flex flex-1 flex-col">
				<div class="flex flex-col gap-8 pb-5">
					<h2 class="text-center text-2xl font-semibold uppercase text-green-700 lg:text-left">
						HỆ THỐNG MẦM NON ilo academy
					</h2>
					{#if $page.data.footer && $page.data.footer?.length !== 0}
						<div class="flex flex-col gap-4">
							{#each $page.data.footer as blok}
								{#if blok.component == 'location'}
									<div class="flex gap-5">
										<LocationIcon
											class="flex-shrink-0 flex-grow-0 text-green-700"
											width="35"
											height="35"
										/>
										<div class="flex flex-col gap-1 text-left">
											<p class="font-semibold uppercase">
												{blok?.school_name}
											</p>
											<p class="font-light">
												{blok?.school_location}
											</p>
										</div>
									</div>
								{/if}
							{/each}
						</div>
					{/if}
				</div>
				<div
					class="flex flex-col gap-5 border-t border-[#afb2b4] pt-5 lg:flex-row lg:justify-between"
				>
					<div class="flex flex-col gap-1 md:flex-row md:gap-5">
						{#each contacts as { contactContent, contactType, icon }}
							{@const protocol = contactType === 'Hotline' ? 'tel' : 'mailto'}
							{@const href = `${protocol}:${contactContent}`}
							<div class="flex items-center gap-5 font-light lg:items-end">
								<svelte:component this={icon} class="text-green-700" width="32" height="32" />
								<p>
									{contactType}:
									<a class="font-normal" {href}>
										{contactContent}
									</a>
								</p>
							</div>
						{/each}
					</div>
					<div class="flex flex-col gap-2">
						<div class="flex items-center gap-1 lg:justify-end">
							{#each mediaChannels as { href, icon }}
								<a {href}>
									<svelte:component this={icon} class="text-green-700" width="28" height="28" />
								</a>
							{/each}
						</div>
						<p class=" font-light text-neutral-800">Copyright © 2020 ILO Vietnam</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</footer>
