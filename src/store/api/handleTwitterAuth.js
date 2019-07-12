const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};


function connectTwitter(store,action) {

    let owner = action.data.owner;

    let url = `http://localhost:1337/parse/classes/SocialAccounts/${owner}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify({
            isTwitterConnected:true,
            twitterData:action.data.twitterData
        })
    })
    .then(data => data.json())
    .then(json => {
        console.log(json);
    })
    .catch(err => console.log(err));
}


export {connectTwitter};