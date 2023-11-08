import {
  IonApp,
  setupIonicReact
} from '@ionic/react';
import AppRouter from './router'

import { Provider } from 'react-redux'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import store from './store'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import './theme/main.css';

setupIonicReact();

const App: React.FC = () => (
  <Provider store={store}>
    <IonApp>
      <I18nextProvider i18n={i18n}>
        <AppRouter />
      </I18nextProvider>
    </IonApp>
  </Provider>
);

export default App;
