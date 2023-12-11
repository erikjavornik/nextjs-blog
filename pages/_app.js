// Importing the global styles from the '../styles/global.css' file.
import '../styles/global.css';

// Default export for the App component, which is the main component of the Next.js application.
export default function App({ Component, pageProps }) {
    // Rendering the component passed as 'Component' prop with the additional 'pageProps' as props.
    return <Component {...pageProps} />;
}

