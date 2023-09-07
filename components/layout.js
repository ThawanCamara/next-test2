import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Thawan';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			
			<Profile home={home}/>
			<main>{children}</main>
			{!home && (
				<div className={styles.backToHome}>
					<Link href="/">&larr; Back to Home</Link>
				</div>
			)}
		</div>
	);
}

function Profile({home}) {
	// Configurations

	const imgSrc = "/images/profile.jpg";
	const imgAltText = "Mirage";
	const imgMaxSize = 144;
	const imgMinSize = 108;

	// End of Configurations
	
	const size = (home ? imgMaxSize : imgMinSize)
	const img =	(<Image 
					priority
					src={imgSrc}
					className={utilStyles.borderCircle}
					height={size}
					width={size}
					alt={imgAltText}
				/>);
	return (
		<header className={styles.header}>
			<SiteHead />
			{ home ? (
				<>
					{img}
					<h1 className={utilStyles.heading2X1}>{name}</h1>
				</>
			) : (
				<>
					<MakeLink href="/">
						{img}
					</MakeLink>
					<h2 className={utilStyles.headingLg}>
						<MakeLink href="/" className={utilStyles.colorInherit}>
							{name}
						</MakeLink>
					</h2>
				
				 </>
			) }
		</header>
	);
}

function SiteHead () {
	return (
	<Head>
		<link rel="icon" href="/favicon.jpeg" />
		<meta
			name="description"
			content="Learn how to build a personal website using Next.js"
			/>
		<meta
			property="og:image"
			content={`https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
			/>
		<meta name="og:title" content={siteTitle} />
		<meta name="twitter:card" content="summary_large_image" />
	</Head>);
}

function MakeLink({children, ...props}) {
	return (<Link {...props}>{children}</Link>);
}