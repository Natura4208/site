import { useEffect, useState, type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import type { BlogFeedItem } from "@docusaurus/plugin-content-blog";

import { loadBlogPost, loadLatestBlogPostPath, postNameToUrl } from '../lib/posts';

import styles from './index.module.css';
import BlogCard from '../components/BlogCard';

import { Buffer } from 'buffer';
import useServerData from '../lib/hooks/useServerData';
import OnlineMembersSection from '../components/OnlineMembersSection';
global.Buffer = Buffer;


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <p>
            {siteConfig.title}
          </p>
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
              Wiki
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const [post, setPost] = useState<BlogFeedItem | null>(null);
  
  const repo = "ChillBox-104/site";

  useEffect(() => {
    (async () => {
      const [latestPath, ref] = await loadLatestBlogPostPath(repo)
      let post = await loadBlogPost(postNameToUrl(repo, latestPath, false));
      post.link = ref
      
      setPost(post);
    })();
  }, []);

  return (
    <Layout
      title={`${siteConfig.title}`}
      description={`${siteConfig.tagline}`}>
      <HomepageHeader />
      <main>
        {post && 
          <>
            <BlogCard post={post} />
          </>
        }
        <div className='flex justify-center w-full'>
          <hr className='w-[95%] bg-[var(--custom-muted)]' />
        </div>

        <OnlineMembersSection />
      </main>
    </Layout>
  );
}
