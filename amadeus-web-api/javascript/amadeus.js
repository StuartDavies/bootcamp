async function fetchData() 
{
    // get an access token from the server

    let accessToken = await getAccessToken();

    // use the access token returned from the previous call to invoke a web api
    // that returns data relating to activities for a given location
    
    const response = await fetch('https://test.api.amadeus.com/v1//shopping/activities?latitude=41.397158&longitude=2.160873', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    });

    let responseData = await response.json();

    // we'll build a list inside our data div, and create a list entry 
    // with the name of each activity returned from the web api

    let dataDiv = document.querySelector('#data');    
    let ul = document.createElement('ul');
    dataDiv.appendChild(ul);

    responseData.data.forEach(activity => {
        var li = document.createElement('li');
        ul.appendChild(li);
        li.innerText = activity.name;
    });
}

async function getAccessToken()
{
    const response = await fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: 'grant_type=client_credentials&client_id=NNMUqrWJUOiEKYdIDzjKyBBMDfa5kXc0&client_secret=pbPaHJSAOT5z7SAU'
    });

    let responseData = await response.json();
    return responseData.access_token;
}