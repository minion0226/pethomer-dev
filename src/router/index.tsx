import { IonReactRouter } from '@ionic/react-router';
import { 
  IonIcon,
  IonLabel,
  IonRippleEffect,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { homeOutline, calendarOutline, notificationsOutline, personOutline, ellipsisHorizontalOutline } from 'ionicons/icons'

import { routes, tab_routes } from './routes';
import styled from 'styled-components';

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: red;
  position: absolute;
  top: 0.25rem;
  right: 1.25rem;
`

const AppRouter: React.FC = () => {
  const { t, i18n } = useTranslation()
  return(
    <IonReactRouter>
      <IonRouterOutlet>

        {/* <Route path='/' exact> */}
        { routes.map((item, index) => <Route key={index} path={item.path} exact={item.exact} component={item.component} />)}
        {/* </Route> */}

        <Route path='/tab'>
          <IonTabs>
            <IonRouterOutlet>
              {tab_routes.map((item, index) => <Route key={index} path={item.path} component={item.component} />)}
            </IonRouterOutlet>

            <IonTabBar slot='bottom' className='py-2 rounded-t-xl'>
              <IonTabButton className='ion-activatable ripple-parent rounded-md relative' tab='explorer' href='/tab/home'>
                <IonRippleEffect></IonRippleEffect>
                <IonIcon className='text-2xl' icon={homeOutline} />
                <IonLabel>Explorer</IonLabel>
              </IonTabButton>
              <IonTabButton className='ion-activatable ripple-parent rounded-md relative' tab='booking' href='/tab/booking'>
                <IonRippleEffect></IonRippleEffect>
                <IonIcon className='text-2xl' icon={calendarOutline} />
                <IonLabel>Booking</IonLabel>
              </IonTabButton>
              <IonTabButton className='ion-activatable ripple-parent rounded-md relative' tab='notification' href='/tab/notification'>
                <IonRippleEffect></IonRippleEffect>
                <IonIcon className='text-2xl' icon={notificationsOutline} />
                <IonLabel>Notification</IonLabel>
                <Dot className='rounded-full' />
              </IonTabButton>
              <IonTabButton className='ion-activatable ripple-parent rounded-md relative' tab='profile' href='/tab/profile'>
                <IonRippleEffect></IonRippleEffect>
                <IonIcon className='text-2xl' icon={personOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
              <IonTabButton className='ion-activatable ripple-parent rounded-md relative' tab='more' href='/tab/more'>
                <IonRippleEffect></IonRippleEffect>
                <IonIcon className='text-2xl' icon={ellipsisHorizontalOutline} />
                <IonLabel>More</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </Route>
        
        {/* <Route render={() => <Redirect to="/" />} /> */}
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default AppRouter;
