import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$lib: '/src/lib'
		}
	},
	preprocess: vitePreprocess(),
	shadcn: {
		componentPath: './src/lib/components/ui'
	}
};
export default config;
