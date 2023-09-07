import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Date from '../components/date';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>Hi! I am <strong>Thawan Camara</strong>, aka <em>tdesouz</em> in 42's clusters. I'm an aspiring developer who is desperatedly looking for a paid job :D.</p>
				<p>I love games, storytelling and pixel art. No coffee, thank you!</p>
				<br />
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
				<br />
				<Link className={utilStyles.headingMd} href="/posts/first-post">See my first post</Link>
			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`posts/${id}`}>{title}</Link>
							<br />
							<small className={utilStyles.lightText}>
								{date}
							</small>
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return (
		{
			props: {
				allPostsData,
			},
		}
	);
}