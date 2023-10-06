declare module '$app/environment' {
	export const browser: boolean;
	export const dev: any;
}

declare module '*.svg' {
	const content: any;
	export default content;
}
