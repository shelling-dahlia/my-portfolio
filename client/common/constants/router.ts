interface IRouter {
    link: string;
    header: any;
}

type TRouters = 'home' | '404';

const config: Record<TRouters, IRouter> = {
    home: {
        link: '/',
        header: {
            title: '',
            canonical: '/',
            description: 'My Personal Portfolio',
            isIndexPage: true,
        },
    },
    '404': {
        link: '/404',
        header: {
            title: '',
            canonical: '/404',
            description: 'Page Not Found',
        },
    },
};

export default config;
