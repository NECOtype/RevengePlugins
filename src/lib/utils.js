export function sluggit(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '_')
		.replace(/[^\w-]+/g, '')
		.replace(/--+/g, '-')
		.replace(/^-+/, '')
		.replace(/-+$/, '')
}