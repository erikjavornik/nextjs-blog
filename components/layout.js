// Importing the Head component from the 'next/head' library for managing document head elements.
import Head from 'next/head';

// Importing the Image component from the 'next/image' library for optimizing images in the application.
import Image from 'next/image';

// Importing styles from the local 'layout.module.css' file for styling the layout component.
import styles from './layout.module.css';

// Importing utility styles from the '../styles/utils.module.css' file for additional styling.
import utilStyles from '../styles/utils.module.css';

// Importing the Link component from the 'next/link' library for client-side navigation.
import Link from 'next/link';

// Defining a constant variable 'name' with the value 'Erik Javornik'.
const name = 'Erik Javornik';

// Exporting a constant variable 'siteTitle' with the value 'Next.js Sample Website'.
export const siteTitle = 'Next.js Sample Website';

// Defining the Layout component that takes 'children' and 'home' as props.
export default function Layout({ children, home }) {
  // Returning JSX for the layout component.
  return (
    <div className={styles.container}>
      {/* Head component for managing head elements such as metadata, title, and links. */}
      <Head>
        {/* Link tag for specifying the favicon for the website. */}
        <link rel="icon" href="/favicon.ico" />

        {/* Meta tags for description, og:image, og:title, and twitter card content. */}
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      {/* Header section containing profile image and name, conditionally rendered based on the 'home' prop. */}
      <header className={styles.header}>
        {home ? (
          // Displayed on the home page.
          <>
            {/* Profile image with priority loading and circular border. */}
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            {/* Heading 1 for displaying the name. */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          // Displayed on pages other than the home page.
          <>
            {/* Link to navigate back to the home page. */}
            <Link href="/">
              {/* Profile image with priority loading and circular border. */}
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            {/* Heading 2 with a link to the home page. */}
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>

      {/* Main content section. */}
      <main>{children}</main>

      {/* Back to home link, displayed only if the page is not the home page. */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}

