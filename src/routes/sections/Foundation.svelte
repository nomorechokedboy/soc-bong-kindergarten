<script lang="ts">
	import { SectionTitle } from '$lib'
	import type { SubTitleProps } from '$lib/components/SectionTitle/SectionTitle.svelte'
	import { storyblokEditable, StoryblokComponent } from '@storyblok/svelte'
	export let blok: StoryblokComponent

	// const subTitles: SubTitleProps[] = [
	// 	{ content: 'VỚI CHÚNG TÔI, MỖI ĐỨA TRẺ LÀ MỘT THIÊN TÀI', props: { class: 'font-bold' } },
	// 	{
	// 		content:
	// 			'Kết hợp giữa tinh hoa giáo dục Phần Lan cùng nền tảng Giáo dục Thông minh 5.0, ILO Academy mang đến cho con một môi trường hoàn thiện để phát triển toàn diện'
	// 	}
	// ]
</script>

<section
	class="flex flex-col gap-2.5 bg-white px-4 py-12"
	id="foundation"
	use:storyblokEditable={blok}
>
	{#each blok.sectionTitle as { title, subTitle }}
		<SectionTitle {title} {subTitle} />
	{/each}
	<figure class="mt-5 grid place-items-center">
		<img src={blok.image?.filename} alt={blok.image?.alt} />
	</figure>
</section>
