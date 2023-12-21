import React, { useState } from 'react';
import FacebookLoginButton from './FaceBookLogin';

const Login = () => {

  const [account, setAccount] = useState();
  const [accessToken, setAccessToken] = useState();

  // Handle successful login, 
  const handleLoginSuccess = (response) => {
    try {
      console.log('Login successful:', response);
      setAccount(response);
      console.log("account set");
      setAccessToken(response.accessToken)
    } catch (error) {
      console.log(error.message);
    }
    
  };

  // Handle login failure
  const handleLoginFailure = (response) => {
    console.error('Login failed:', response);
  };

    const getPosts = async (accessToken) => {
      console.log("inside get posts API")
      try {
        console.log("inside trycatch")
        // const response = await fetch(`https://graph.facebook.com/v18.0/me/posts?access_token=${accessToken}`);
        const response = await fetch(`https://graph.facebook.com/v18.0/17841405309211844?fields=business_discovery.username(bluebottle){followers_count,media_count}&access_token=${accessToken}`);
        console.log("received data")
        const data = await response.json();
        console.log("data converted to JSON")
        console.log('User posts:', data);
      } catch (error) {
        console.error('Error fetching user posts:', error.message);
      }    
    }

  return (
    <div>
      <h1>Facebook Login</h1>
      <FacebookLoginButton
        onLoginSuccess={handleLoginSuccess}
        onLoginFailure={handleLoginFailure}
      />
      {
        account ?  
                  <div>

                    <h1>Account : {account?.name}</h1>
                    <h1>User ID : {account?.userID}</h1>
                    <h1>email : {account?.email}</h1>
                    <h1 >Access Token : {account?.accessToken}</h1>
                  </div>
                   :
                  <p>User not Logged In</p>
      }

      <div className="posts">
        <button onClick={getPosts}>Fetch posts</button>
      </div>
      
    </div>
  );
};

export default Login;
