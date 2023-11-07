import Walkthrough from '../pages/Walkthrough';
import Language from '../pages/Language'
import Login from '../pages/Login';
import Register from '../pages/Register';

const routes = [
  {
    path: '/',
    component: Walkthrough,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
  {
    path: '/language',
    component: Language,
  },
]

export default routes;