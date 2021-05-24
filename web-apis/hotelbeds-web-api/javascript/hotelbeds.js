const apiKey = '56c30ff55b02185c7bba0442288d59f9';
const secret = 'f261ee0eb8';

async function fetchData() {
    // get an access token from the server

    let signature = await generateSignature();

    // use the access token returned from the previous call to invoke a web api
    // that returns data relating to activities for a given location

    const response = await fetch('https://api.test.hotelbeds.com/activity-content-api/3.0/activities', {
        method: 'POST',
        mode: 'cors',        
        headers: {
            'Accept': 'application.json',
            'Accept-Encoding': 'gzip',
            'Api-key': `${apiKey}`,
            'X-Signature': `${signature}`
        }
    });

    let responseData = await response.json();
}

async function generateSignature()
{
    var seconds = new Date().getTime() / 1000;
    var signatureText = `${apiKey}${secret}${seconds}`;

    return sha256(signatureText);
}

async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder('utf-8').encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');

    return hashHex;
}
