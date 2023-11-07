import { IonReactRouter } from '@ionic/react-router';
import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router-dom';

import routeConfig from './routes';

const AppRouter: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      {routeConfig.map((route, index) => (
        <Route
          key={index}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
    </IonRouterOutlet>
  </IonReactRouter>
);

export default AppRouter;
