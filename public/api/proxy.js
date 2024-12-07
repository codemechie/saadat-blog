// api/proxy.js
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Content-Type');
    
    // Forward the request to the target URL
    const targetUrl = req.query.url; // Get the target URL from query parameters
    
    fetch(targetUrl)
        .then(response => response.text())
        .then(data => {
            res.status(200).send(data);
        })
        .catch(error => {
            res.status(500).send('Error fetching data');
        });
}