// Importing the 'fs' (file system), 'path', 'gray-matter', 'remark', and 'remark-html' libraries.
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Joining the current working directory with the 'posts' directory and assigning it to 'postsDirectory'.
const postsDirectory = path.join(process.cwd(), 'posts');

// Function to get and sort post data from markdown files.
export function getSortedPostsData() {
    // Get the file names under the 'posts' directory.
    const fileNames = fs.readdirSync(postsDirectory);
    // Map each file name to its corresponding post data.
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from the file name to get the post ID.
        const id = fileName.replace(/\.md$/, '');

        // Read the markdown file as a string.
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section.
        const matterResult = matter(fileContents);

        // Combine the data with the post ID.
        return {
            id,
            ...matterResult.data,
        };
    });
    // Sort posts by date in descending order.
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// Function to get all post IDs for generating dynamic routes.
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    // Return an array of objects containing the parameters for each post ID.
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });
}

// Async function to get post data for a specific ID.
export async function getPostData(id) {
    // Construct the full path to the markdown file.
    const fullPath = path.join(postsDirectory, `${id}.md`);
    // Read the markdown file as a string.
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section.
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string.
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the post ID and HTML content.
    return {
        id,
        contentHtml,
        ...matterResult.data,
    };
}
