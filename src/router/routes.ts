import Walkthrough from '../pages/Walkthrough';
import Language from '../pages/Language'
import Login from '../pages/Login';
import Register from '../pages/Register';

const routes = [
  {
    path: '/',
    component: Language,
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
    path: '/walkthrough',
    component: Walkthrough,
  },
]

export default routes;