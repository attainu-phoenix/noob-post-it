import config from "../../config.js";

const HEADERS = {
  "Content-Type": "application/json"
};

function sendTweet() {
  let status = "your tweet text";
  let social = JSON.parse(localStorage.getItem("social"));

  fetch("http://localhost:4444/twitter/post", {
    method: "post",
    headers: HEADERS,
    body: JSON.stringify({
      consumer_key: config.consumerKey,
      consumer_secret: config.consumerSecret,
      access_token_key: social.twitterData.oauth_token,
      access_token_secret: social.twitterData.oauth_token_secret,
      status: status
    })
  })
    .then(data => data.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
}

function removeTweet() {
  let social = JSON.parse(localStorage.getItem("social"));
  let postId = "post if from actions";
  fetch(`http://localhost:4444/twitter/post/${postId}`, {
    method: "delete",
    headers: HEADERS,
    body: JSON.stringify({
      consumer_key: config.consumerKey,
      consumer_secret: config.consumerSecret,
      access_token_key: social.twitterData.oauth_token,
      access_token_secret: social.twitterData.oauth_token_secret
    })
  })
    .then(data => data.json())
    .then(result => {
      console.log(result);
    })
    .catch(err => console.log(err));
}

export { sendTweet, removeTweet };
