const HEADERS = {
    "X-Parse-Application-Id": "postit",
    "Content-Type": "application/json"
};

 function twitterPostUpdateId(store,action) {
    if(action.twitterPostId){
        let objectId = action.postId;
    let twitterPostId=action.twitterPostId;
    let url = `http://localhost:1337/parse/classes/UserPosts/${objectId}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify({
            postedOnTwitter : true,
            postIdTwitter : twitterPostId
        })
    })
    .then(data => data.json())
    .then(result => {
       console.log(result);
    })
    .catch(err => console.log(err));
    }
    
}

function twitterPostDeleteId(store,action) {
    if(!action.postId){
    console.log('No Post id');
    }
    else{
     let objectId = action.postId;
        
    let url = `http://localhost:1337/parse/classes/UserPosts/${objectId}`;

    fetch(url, {
        method: "put",
        headers: HEADERS,
        body: JSON.stringify({
            postedOnTwitter : false,
            postIdTwitter : ''
        })
    })
    .then(data => data.json())
    .then(result => {
       console.log(result);
       store.dispatch({
           type : 'FETCH_ONE_POST',
           data : objectId
       })
    })
    .catch(err => console.log(err));
    }
    
}

export {twitterPostDeleteId,twitterPostUpdateId};