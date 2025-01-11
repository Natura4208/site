import ReactMarkdown from 'react-markdown';
import type { BlogFeedItem } from "@docusaurus/plugin-content-blog";
import { MDXProvider } from '@mdx-js/react';
import remarkGfm from 'remark-gfm';
import remarkRemoveComments from 'remark-remove-comments'; 
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import styles from './styles.module.css';


export type BlogCardProps = {
    post:  BlogFeedItem
};

export default function BlogCard({ post }: BlogCardProps) {
    console.log(post.image);
    return (
        <div className='flex flex-col items-center my-7 gap-3'>
            <div className='flex items-start text-left w-[90vw]'>
                <p className={'text-left mb-0 font-semibold ' + styles.muted}>Latest Blog Post:</p>
            </div>
            
            <a href={`${post.link}`} className={'flex flex-row gap-5 items-left w-[90vw] max-h-[30vh] ' + styles.normaliseColor}>
                {post.image && (
                    <img
                        alt={post.title}
                        className="rounded-xl max-h-[30vh] max-w-[40vw]"
                        src={post.image as any}
                    />
                )}
                <div>
                    <p className="font-bold tracking-wide text-2xl mb-3">
                        {post.title || "No title"}
                    </p>
                    
                    <div className='text-ellipsis'>
                        <MDXProvider>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkMath, remarkRemoveComments]}
                                rehypePlugins={[rehypeKatex, rehypeRaw]}
                                className={styles.noGap} 
                            >
                                {post.content}
                            </ReactMarkdown>
                        </MDXProvider>
                    </div>
                </div>
            </a>
        </div>
    )
};