import { apiPlugin, storyblokInit, useStoryblokApi, type ISbResult } from '@storyblok/svelte'
import Page from './layouts/Page.svelte'
import Footer from './layouts/Footer.svelte'
import Header from './layouts/Header.svelte'
import TrialForm from '$lib/components/TrialForm/TrialForm.svelte'
import Banner from './sections/Banner.svelte'
import FormInput from '$lib/components/FormInput/formInput.svelte'
import Title from '$lib/components/Title/Title.svelte'
import FormDropdown from '$lib/components/FormDropdown/FormDropdown.svelte'
/** @type {import('./$types').LayoutLoad} */
export async function load() {
	storyblokInit({
		accessToken: 'kqK25jMVNSiNcoqpaJDrNQtt',
		use: [apiPlugin],
		components: {
			page: Page,
			header: Header,
			footer: Footer,
			trialForm: TrialForm,
			formDropdown: FormDropdown,
			banner: Banner,
			formInput: FormInput,
			title: Title
		},
		apiOptions: {
			region: '',
			https: true
		}
	})
	const storyblokApi = await useStoryblokApi()

	const dataConfig: ISbResult = await storyblokApi.get('cdn/stories/config/', {
		version: 'draft',
		resolve_links: 'url'
	})

	// console.log('dataConfig', dataConfig.data.story.content);

	return {
		storyblokApi: storyblokApi,
		header: dataConfig.data.story.content.header_menu,
		footer: dataConfig.data.story.content.footer_list
	}
}
