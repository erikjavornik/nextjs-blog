// Importing the 'Head' component from 'next/head' for managing document head elements.
import Head from 'next/head';

// Importing the 'Layout' component and the 'siteTitle' constant from the '../components/layout' file.
import Layout, { siteTitle } from '../components/layout';

// Importing styles from the '../styles/utils.module.css' file for additional styling.
import utilStyles from '../styles/utils.module.css';

// Importing the 'getSortedPostsData' function from the '../lib/posts' file.
import { getSortedPostsData } from '../lib/posts';

// Importing the 'Link' component from 'next/link' for client-side navigation.
import Link from 'next/link';

// Importing the 'Date' component from the '../components/date' file.
import Date from '../components/date';

// Async function to fetch static props for the Home component.
export async function getStaticProps() {
  // Fetching all posts data and sorting it.
  const allPostsData = getSortedPostsData();
  
  // Returning an object with props containing the fetched posts data.
  return {
    props: {
      allPostsData,
    },
  };
}

// Default export for the Home component, taking 'allPostsData' as a prop.
export default function Home({ allPostsData }) {
  return (
    // Rendering the Layout component with the 'home' prop.
    <Layout home>
      {/* Head component for managing head elements, setting the title based on 'siteTitle'. */}
      <Head>
        <title>{siteTitle}</title>
      </Head>

      {/* Section with medium-sized heading and placeholder content. */}
      <section className={utilStyles.headingMd}>
        <p>Placeholder</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Section with medium-sized heading for the blog and a list of blog posts. */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* Mapping through each post in 'allPostsData' and rendering a list item for each. */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {/* Link component for navigating to individual blog posts. */}
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {/* Small text with the post date, using the Date component. */}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

