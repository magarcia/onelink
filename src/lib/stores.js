import { writable } from 'svelte/store';

/**
 * @typedef {Object} Link
 * @property {string} label - Label
 * @property {string} icon - Icon
 * @property {string} url - URL
 */

/**
 * @typedef {Object} Profile
 * @property {string} name - Name
 * @property {string} description - Description
 * @property {string} image - Image
 * @property {string} facebook - Facebook
 * @property {string} twitter - Twitter
 * @property {string} instagram - Instagram
 * @property {string} github - Github
 * @property {string} telegram - Telegram
 * @property {string} linkedin - LinkedIn
 * @property {string} email - Email
 * @property {string} whatsapp - Whatsapp
 * @property {string} youtube - Youtube
 * @property {Link[]} links - Links
 * @property {string} [theme] - Theme
 */

/**
 * @type {import('svelte/store').Writable<Profile>}
 */
export const profile = writable({
	name: '',
	description: '',
	image: '',
	facebook: '',
	twitter: '',
	instagram: '',
	github: '',
	telegram: '',
	linkedin: '',
	email: '',
	whatsapp: '',
	youtube: '',
	links: [],
	theme: 'simple'
});
