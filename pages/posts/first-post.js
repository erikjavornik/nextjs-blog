// Importing the 'Link' component from the 'next/link' library for client-side navigation.
import Link from "next/link";

// Importing the 'Head' component from 'next/head' for managing document head elements.
import Head from "next/head";

// Importing the 'Script' component from 'next/script' for loading third-party scripts.
import Script from "next/script";

// Importing the 'Layout' component from the '../../components/layout' file.
import Layout from "../../components/layout";

// Default export for the FirstPost component.
export default function FirstPost() {
    return (
        // Rendering the Layout component.
        <Layout>
            {/* Head component for managing head elements, setting the title of the page. */}
            <Head>
                <title>First Post</title>
            </Head>

            {/* Commented out Script component for loading third-party JavaScript (e.g., Facebook SDK). */}
            {/* 
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />
            */}

            {/* Heading 1 for displaying the title of the post. */}
            <h1>First Post</h1>

            {/* Heading 2 with a Link component for navigating back to the home page. */}
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    );
}
