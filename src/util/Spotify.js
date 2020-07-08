
let  accessToken;
const clientId = '6060675e2529473c8e52bccf7450dda1';
const redirectUri = "http://localhost:3000/";

const Spotify = {

getAccessToken = () => {
    if(accessToken){
        return accessToken;
    } 

       //check for token match 
    const accessTokenMatch  = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

       if (accessToken && expiresInMatch) {
           accessToken = accessToken[1];
           const expiresIn = Number(expiresInMatch[1]);
           //this clears the parameters, allowing us to grab a new access token when
           //it expires.
           window.setTimeout(() => accessToken = '', expiresIn * 1000);
           window.history.pushState('Access Token', null, '/');
           return accessToken;
       } else {
           const accessUrl = `https://accounts.spotify.com/authorize?client_id
           =${clientId}&response_type=token&scope=playlist-modify-public&r
           edirect_uri=${redirectUri}`;
           window.location = accessUrl;
       }
    

}


}
export default Spotify