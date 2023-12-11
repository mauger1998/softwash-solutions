import { defineConfig } from 'astro/config'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
import { sanityIntegration } from '@sanity/astro'

// https://astro.build/config
export default defineConfig({
	vite: {
		resolve: {
			alias: {
				'@/': `${path.resolve(__dirname, 'src')}/`
			}
		},
		css: {
			preprocessorOptions: {
				scss: {
					// path to your scss variables
					additionalData: `@import "@/styles/variables.scss";`
				}
			}
		}
	},
	image: {
		remotePatterns: [
			{
				protocol: 'https'
			}
		]
	},
	integrations: [
		sanityIntegration({
			projectId: 'n6d3pe8z',
			dataset: 'production',
			apiVersion: '2023-02-08',
			useCdn: false
		})
	]
})
