import AuthsPage from '../Pages/AuthsPage';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import NewPage from '../Pages/NewPage';
import PizzaPage from '../Pages/PizzaPage';




const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/auths': AuthsPage,
  '/login': LoginPage,
  '/pizza': PizzaPage
};

export default routes;
