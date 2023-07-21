<script lang="ts">
	import { SectionTitle, Schedule } from '$lib'
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
	import SunIcon from '~icons/ph/sun'
	import CloudSunIcon from '~icons/bi/cloud-sun'

	export let blok: StoryblokComponent
</script>

<section class="bg-[#ebeff2] py-12" id="aDayAtOurSchool" use:storyblokEditable={blok}>
	<div class="mx-auto max-w-screen-2xl px-4">
		<div class="mb-7 flex flex-col gap-5">
			{#each blok.top as { title, subTitle }}
				<SectionTitle {title} {subTitle} />
			{/each}
			<div class="flex w-full items-center justify-center">
				<video controls>
					<track kind="captions" default />
					<source src={blok.video?.filename} type="video/mp4" />
				</video>
			</div>
		</div>
		<div class="flex flex-col gap-4 lg:flex-row">
			{#each blok.bottom as { data, title }}
				<Schedule {data} {title}>
					<CloudSunIcon width="72" height="70" slot="cloudSunIcon" />
					<SunIcon width="72" height="70" slot="sunIcon" />
				</Schedule>
			{/each}
		</div>
	</div>
</section>
