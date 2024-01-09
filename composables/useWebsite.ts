export const useWebsiteStore = defineStore('websiteStore', {
    state: () => ({
      menuItems: [
        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Blog',
            link: '/blog'
        },
        {
            name: 'Contact Us',
            link: '/contact-us'
        }
      ],
      description: ''
    }),
  })
  