import { setAuthenticatedUser } from '../../utils/auths';

const AuthsPage = () => {
    const main = document.querySelector('main');
    function registerUser(username, password) {
        // Define the URL
        const apiUrl = 'http://localhost:3000/auths/register';
      
        // Prepare the data to be sent in the request body
        const registerData = {
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
          body: JSON.stringify(registerData),
        })
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Assuming the response is JSON
          })
          .then(data => {
            // Process the data

            // /!\ SET USER /!\
            console.log("set user : " );
            setAuthenticatedUser(data);

            console.log('Registration successful:', data);
          })
          .catch(error => {
            console.error('Error during registration:', error);
          });
      }



    window.Register = async () => {
        const username = document.getElementById('usernameInput').value;
        const password = document.getElementById('passwordInput').value;
        console.log(username, password);
        registerUser(username,password)
    };

    // fetch

  
    const bloc1 = `
    <form>
    <input type="text" id="usernameInput" placeholder="Username">
    <input type="password" id="passwordInput" placeholder="Password">
    <button type="button" onclick="Register()">Register</button>
    </form>`;

    main.innerHTML =bloc1;
  };
  
  export default AuthsPage;
  