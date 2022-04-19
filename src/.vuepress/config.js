module.exports = {
    // site config
    lang: 'en-US',
    title: 'Tureco',
    description: 'Something about Tureco',

    // theme and its config
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo.png',
        search: true,
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            {
                text: 'Group 1',
                link: '/group1/',
            },
            {
                text: 'Group 2',
                link: '/group2/',
            },
            {
                text: 'Learn More',
                children: [
                    {
                        text: 'Group 1',
                        link: '/group1/',
                    },
                    {
                        text: 'Group 2',
                        link: '/group2/',
                    },
                ]
            },
        ],
        sidebar: {
            '/': [
                {
                    text: 'group 1',
                    children: [
                        '/group1/',
                    ],
                },
                {
                    text: 'group 2',
                    children: [
                        '/group2/',
                    ],
                },
            ],
            '/group1/': [
                {
                    text: 'group 1',
                    children: [
                        '/',
                    ],
                },
            ],
        },
    },
    plugins: [[
        '@vuepress/plugin-search',
        {
            locales: {
                '/': {
                    placeholder: 'Search',
                },
            },
        },
    ],
    ],
}