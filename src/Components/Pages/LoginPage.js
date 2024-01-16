import { getAuthenticatedUser, setAuthenticatedUser } from '../../utils/auths';


const LoginPage = () => {
    const main = document.querySelector('main');

    // fetch
function loginUser(username, password) {
    // Define the URL
    const apiUrl = 'http://localhost:3000/auths/login';
  
    // Prepare the data to be sent in the request body
    const loginData = {
      username,
      password,
    };
  
    // Make a POST request to the API
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any other headers as needed
      },
      body: JSON.stringify(loginData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the response is JSON
      })
      .then(data => {
        // Process the data
        console.log("set user : " );
 
        
        setAuthenticatedUser(data);
        console.log('login successful:', data);
        
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });
  }
  



    window.Login = async () => {
        const username = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;
        console.log(username, password);
        loginUser(username, password);

    };


    const bloc1 = `

    
    <form>
    <input type="text" id="usernameInput" placeholder="Username">
    <input type="password" id="passwordInput" placeholder="Password">
    <button type="button" onclick="Login()">Login</button>
    </form>`;

    main.innerHTML = bloc1;
  };
  
  export default LoginPage;
  