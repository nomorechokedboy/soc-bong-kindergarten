import { sveltekit } from '@sveltejs/kit/vite'
import Icons from 'unplugin-icons/vite'
import { defineConfig } from 'vitest/config'
import basicSsl from '@vitejs/plugin-basic-ssl'
export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: 'svelte' }), basicSsl()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		https: true
	},
	preview: {
		port: 4173,
		strictPort: false
	}
})
