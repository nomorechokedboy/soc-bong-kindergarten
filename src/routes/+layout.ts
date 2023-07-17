import { apiPlugin, storyblokInit, useStoryblokApi } from '@storyblok/svelte'
import Page from './layouts/Page.svelte'
import Footer from './layouts/Footer.svelte'
import Header from './layouts/Header.svelte'
import TrialForm from '$lib/components/TrialForm/TrialForm.svelte'
import Banner from './sections/Banner.svelte'
import FormInput from '$lib/components/FormInput/FormInput.svelte'
import Title from '$lib/components/Title/Title.svelte'
import FormDropdown from '$lib/components/FormDropdown/FormDropdown.svelte'
import Foundation from './sections/Foundation.svelte'
import SectionTitle from '$lib/components/SectionTitle/SectionTitle.svelte'
import DayAtOurSchool from './sections/DayAtOurSchool.svelte'
import Facilities from './sections/Facilities.svelte'
import WhyChooseUs from './sections/WhyChooseUs.svelte'
import FAQ from './sections/FAQ.svelte'
import { PUBLIC_ACCESS_TOKEN } from '$env/static/public'

export async function load() {
	storyblokInit({
		accessToken: PUBLIC_ACCESS_TOKEN,
		use: [apiPlugin],
		components: {
			page: Page,
			header: Header,
			footer: Footer,
			trialForm: TrialForm,
			formDropdown: FormDropdown,
			banner: Banner,
			formInput: FormInput,
			title: Title,
			foundation: Foundation,
			sectionTitle: SectionTitle,
			aDayAtOurSchool: DayAtOurSchool,
			facilities: Facilities,
			whyChooseUs: WhyChooseUs,
			FAQs: FAQ
		},
		apiOptions: {
			region: '',
			https: true
		}
	})
	const storyblokApi = useStoryblokApi()

	const dataConfig = await storyblokApi.get('cdn/stories/config/', {
		version: 'draft',
		resolve_links: 'url'
	})
	const data = {
		storyblokApi: storyblokApi,
		header: dataConfig.data.story.content.header_menu,
		footer: dataConfig.data.story.content.footer_list
	}

	return data
}
