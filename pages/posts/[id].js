// Importing the 'Layout' component from the '../../components/layout' file.
import Layout from '../../components/layout';

// Importing the 'getAllPostIds' and 'getPostData' functions from the '../../lib/posts' file.
import { getAllPostIds, getPostData } from '../../lib/posts';

// Importing the 'Head' component from 'next/head' for managing document head elements.
import Head from 'next/head';

// Importing the 'Date' component from the '../../components/date' file.
import Date from '../../components/date';

// Importing styles from the '../../styles/utils.module.css' file for additional styling.
import utilStyles from '../../styles/utils.module.css';

// Async function for getting static props for the Post component based on the params received.
export async function getStaticProps({ params }) {
    // Fetching post data based on the provided ID.
    const postData = await getPostData(params.id);

    // Returning an object with props containing the fetched post data.
    return {
        props: {
            postData,
        },
    };
}

// Async function for getting static paths for the Post component.
export async function getStaticPaths() {
    // Fetching all post IDs for generating static paths.
    const paths = getAllPostIds();

    // Returning an object with paths and specifying no fallback.
    return {
        paths,
        fallback: false,
    };
}

// Default export for the Post component, taking 'postData' as a prop.
export default function Post({ postData }) {
    return (
        // Rendering the Layout component.
        <Layout>
            {/* Head component for managing head elements, setting the title based on post data. */}
            <Head>
                <title>{postData.title}</title>
            </Head>
            {/* Article section containing post title, date, and content. */}
            <article>
                {/* Heading 1 for displaying the post title with a specified style class. */}
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                {/* Div for displaying the post date with a specified style class. */}
                <div className={utilStyles.lightText}>
                    {/* Using the Date component to format and display the post date. */}
                    <Date dateString={postData.date} />
                </div>
                {/* Div for displaying the post content as HTML, allowing dangerous HTML. */}
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}

