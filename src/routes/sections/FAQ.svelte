<script lang="ts">
	import QuestionAndAnswer from '$lib/components/QuestionAndAnswer/QuestionAndAnswer.svelte'
	import CaretDownIcon from '~icons/ion/caret-down-circle-outline'
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
	import SvelteMarkdown from 'svelte-markdown'
	import { slide } from 'svelte/transition'

	export let blok: StoryblokComponent
</script>

<section class="py-12" use:storyblokEditable={blok}>
	<div class="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 lg:flex-row">
		<div class="flex flex-1 flex-col gap-10 bg-blue-100 p-10">
			<h2 class="text-centesr text-2xl font-extrabold uppercase text-indigo-950">
				{blok.title}
			</h2>
			<div class="flex flex-col gap-5">
				{#if blok}
					{#each blok.QuestionandAnswer as { answers, question }}
						<QuestionAndAnswer let:click={handleQuestionClick}>
							<button class="mb-2 flex gap-5" on:click={handleQuestionClick}>
								<CaretDownIcon class="flex-shrink-0 flex-grow-0" width="28" height="28" />
								<span class="text-left text-base font-semibold text-neutral-700 lg:text-xl">
									{question}
								</span>
							</button>

							<div class="flex flex-col gap-1" slot="answer" transition:slide>
								<div class="pl-12 text-sm font-normal text-neutral-800">
									<SvelteMarkdown source={answers} />
								</div>
							</div>
						</QuestionAndAnswer>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</section>
