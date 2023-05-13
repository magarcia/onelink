/**
 * @typedef {Object} SocialLink
 * @property {"facebook"|"twitter"|"instagram"|"linkedin"|"github"|"telegram"|"whatsapp"|"youtube"|"email"} id
 * @property {string} name
 * @property {string} placeholder
 * @property {string} icon
 */

/** @type SocialLink[] */
export const SOCIAL_NETWORKS = [
	{
		id: 'facebook',
		name: 'Facebook',
		placeholder: 'https://fb.com/username',
		icon: 'ph:facebook-logo-duotone'
	},
	{
		id: 'twitter',
		name: 'Twitter',
		placeholder: 'https://twitter.com/username',
		icon: 'ph:twitter-logo-duotone'
	},
	{
		id: 'instagram',
		name: 'Instagram',
		placeholder: 'https://instagram.com/username',
		icon: 'ph:instagram-logo-duotone'
	},
	{
		id: 'linkedin',
		name: 'LinkedIn',
		placeholder: 'https://linkedin.com/username',
		icon: 'ph:linkedin-logo-duotone'
	},
	{
		id: 'github',
		name: 'GitHub',
		placeholder: 'https://github.com/username',
		icon: 'ph:github-logo-duotone'
	},
	{
		id: 'telegram',
		name: 'Telegram',
		placeholder: 'https://t.me/username',
		icon: 'ph:telegram-logo-duotone'
	},
	{
		id: 'whatsapp',
		name: 'WhatsApp',
		placeholder: '+91 9876543210',
		icon: 'ph:whatsapp-logo-duotone'
	},
	{
		id: 'youtube',
		name: 'YouTube',
		placeholder: 'https://youtube.com/username',
		icon: 'ph:youtube-logo-duotone'
	},
	{
		id: 'email',
		name: 'Email',
		placeholder: 'username@email.com',
		icon: 'ph:envelope-duotone'
	}
];

export const DEMO_DATA = {
	name: 'John Snow',
	description: 'I’m John Snow, the king in the north. I know Nothing.',
	image: 'https://i.insider.com/56743fad72f2c12a008b6cc0',
	facebook: 'https://www.facebook.com/john_snow',
	twitter: 'https://twitter.com/john_snow',
	instagram: 'https://www.instagram.com/john_snow',
	email: 'mail@john_snow.cc',
	github: 'https://github.com/john_snow',
	telegram: 'https://t.me/john_snow',
	whatsapp: '+918888888888',
	youtube: 'https://youtube.com/@john_snow',
	linkedin: 'https://linkedin.com/john_snow',
	links: [
		{
			label: 'My Website',
			icon: 'ph:globe-duotone',
			url: 'https://example.com'
		},
		{
			label: 'Amazon wishlist',
			icon: 'ant-design:amazon-outlined',
			url: 'https://amazon.in'
		},
		{
			label: 'React JS course',
			icon: 'grommet-icons:reactjs',
			url: 'https://reactjs.org/'
		},
		{
			label: 'Donate for our cause',
			icon: 'iconoir:donate',
			url: 'https://who.int'
		},
		{
			label: 'Download my resume',
			icon: 'ph:file-pdf',
			url: 'https://google.com'
		}
	]
};
