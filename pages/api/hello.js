// Defining an Express.js route handler as a default export.
export default function handler(req, res) {
    // Setting the HTTP status code of the response to 200 (OK).
    res.status(200).json({ text: 'Hello' });
}

