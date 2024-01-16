import { getAuthenticatedUser } from "../../utils/auths";



const PizzaPage = () => {
    const main = document.querySelector('main');


    function createPizza(title,content) {
      
      const authenticatedUser = getAuthenticatedUser();
      console.log("Auth user token : ");
      console.log(authenticatedUser.username);
      const apiUrl = 'http://localhost:3000/pizzas';
    
      // Prepare the data to be sent in the request body
      const pizzaData = {
        title,
        content
      };
    
      // Make a POST request to the API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: authenticatedUser.token,
          // Add any other headers as needed
        },
        body: JSON.stringify(pizzaData),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Assuming the response is JSON
        })
        .then(data => {
          // Process the data
          console.log('Post creation successful:', data);
        })
        .catch(error => {
          console.error('Error during post creation:', error);
        });
    }
   

    window.addPizza = async () => {
     
      const title = document.getElementById('title').value;
      const content = document.getElementById('content').value;
      createPizza(title,content);


      console.log(title,content);


  };
    

 






    const bloc1 = `<form>
    <input type="text" id="title">
    <input type="text" id="content">
    <input type="submit" onclick="addPizza()"> 
  </form>`


    main.innerHTML = bloc1;
  };
  
  export default PizzaPage;
  