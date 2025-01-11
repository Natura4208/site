import matter from 'gray-matter';

import type { BlogFeedItem } from '@docusaurus/plugin-content-blog';

export async function loadBlogPost(url: string): Promise<BlogFeedItem> {
    const content: string = await (await fetch(url)).text();
    const { data, content: postContent } = matter(content);

    return {
        ...data,
        link: `${window.location.href.split('/')}/${url}`,
        content: postContent,
    } as BlogFeedItem;
}

export async function loadLatestBlogPostPath(repo: string): Promise<[string, string]> {
    const rss = await (await fetch(`https://raw.githubusercontent.com/${repo}/refs/heads/gh-pages/blog/rss.xml`)).text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(rss.replaceAll(/<\?xml[^>]*\?>/g, '').replaceAll(/<generator>[^<]*<\/generator>/g, ''), 'application/xml');
    let latestName: string;
    let latestDate: Number = 0;
    
    doc.querySelector("channel").querySelectorAll("item").forEach(v => {
        const s: Number = new Date((v as any).querySelector("pubDate")?.textContent).getTime();
        if (s > latestDate) {
            latestDate = s;
            latestName = (v as any).querySelector("link")?.textContent;
        }
    });

    if (!latestName) throw new Error("No latest blog post found");
    const content = await (await fetch(`https://raw.githubusercontent.com/${repo}/refs/heads/gh-pages${latestName.match('\/blog\/(.*)')[0]}/index.html`)).text();
    return [content.match(/https:\/\/github\.com\/[a-zA-Z0-9\-]+\/[a-zA-Z0-9\-]+\/tree\/[a-zA-Z0-9\-]+\/[^\s"]+/g)[0].match('/blog/([^"]+)')[0], latestName];
}

export const postNameToUrl = (repo: string, url: string, includeBlog = true) => `https://raw.githubusercontent.com/${repo}/refs/heads/main${includeBlog ? "/blog/" : ""}${url}`;