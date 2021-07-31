import * as React from 'react';
import Head from 'next/head';

import { capitalize } from '../common/helpers/string.helper';
export interface SeoHeadProps {
    title: string;
    description?: string;
    isIndexPage?: boolean;
    isFollowPage?: boolean;
    canonical: string;
    keyword?: string;
    imageUrl?: string;
}

const SeoHead: React.FunctionComponent<SeoHeadProps> = ({
    title = '',
    isIndexPage = false,
    isFollowPage = true,
    description = '',
    canonical = '',
    imageUrl = '/images/image.png',
}) => {
    const metaIndexPage = isIndexPage ? 'index' : 'noindex';
    const metaIsFollowPage = isFollowPage ? 'follow' : 'nofollow';
    const metaRobots = `${metaIndexPage},${metaIsFollowPage}`;
    const pageTitle = `${title}`;

    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />

            {/* common header */}
            <title>{capitalize(pageTitle)}</title>
            <meta name="description" content={description} />
            <meta name="robots" content={metaRobots} />
            <meta name="keywords" content="Lam Tam Nhu, portfolio, personal project" />
            <link href={'https://shelling.site' + canonical} rel="canonical" />
            {/* google header */}
            <meta property="og:type" content="article" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={imageUrl} />
            <meta property="fb:app_id" content={process.env.FB_APP_ID} />
            {/* twitter header */}
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageUrl} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
};

export default SeoHead;
