import {
  IonPage,
  IonContent,
  IonHeader,
  IonIcon,
  IonText,
  IonAvatar,
  IonCol,
  IonRow,
  IonList,
  IonItem
} from '@ionic/react'
import { useTranslation } from 'react-i18next';
import { notifications } from 'ionicons/icons';

import imgEmpty from '../../assets/imgs/notification_empty.png'
import { useState } from 'react';
import styled from 'styled-components';

const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`

const Notification: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [notificaiton, setNotification] = useState([])

  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <IonPage>
      {isIOS()?
        <StatusBar>
          <IonText class='block p-4 text-lg'>{t('base.label.notification')}</IonText>
        </StatusBar>
        :
        <IonHeader>
          <IonText class='block p-4 text-lg'>{t('base.label.notification')}</IonText>
        </IonHeader>
      }
      <IonContent color='light'>
        {
          notificaiton.length > 0 ? 
          <IonCol className='flex flex-col bg-gray-100 items-center justify-center h-full'>
            <IonAvatar class='w-fit h-fit'>
              <img src={imgEmpty} />
            </IonAvatar>
            <IonText>{t('notificationPage.noitems')}</IonText>
          </IonCol>
          :
          <IonCol className='py-0'>
            <IonList lines='none'>
              <IonItem className='relative flex flex-row justify-between py-4 border-b-2 active:scale-95 border-2 border-lime-400 rounded-md shadow-md'>
                <IonRow className='flex-1'>
                  <IonText className='text-lg'>Notification Title</IonText>
                  <IonText className='text-sm text-gray-400'>here are some text for notificationfor notificationfor notification.</IonText>
                </IonRow>
                <IonText className='flex h-full items-end' slot='end'>8:00 AM</IonText>
                <IonIcon color='success' className='absolute right-1 top-1' icon={notifications} />
              </IonItem>
              <IonItem className='relative flex flex-row justify-between py-4 border-b-2 active:scale-95'>
                <IonRow className='flex-1'>
                  <IonText className='text-lg'>Notification Title</IonText>
                  <IonText className='text-sm text-gray-400'>here are some text for notificationfor notificationfor notification.</IonText>
                </IonRow>
                <IonText className='flex h-full items-end' slot='end'>8:00 AM</IonText>
                {/* <IonIcon color='success' className='absolute right-1 top-1' icon={notifications} /> */}
              </IonItem>
              <IonItem className='relative flex flex-row justify-between py-4 border-b-2 active:scale-95'>
                <IonRow className='flex-1'>
                  <IonText className='text-lg'>Notification Title</IonText>
                  <IonText className='text-sm text-gray-400'>here are some text for notificationfor notificationfor notification.</IonText>
                </IonRow>
                <IonText className='flex h-full items-end' slot='end'>8:00 AM</IonText>
                {/* <IonIcon color='success' className='absolute right-1 top-1' icon={notifications} /> */}
              </IonItem>
              <IonItem className='relative flex flex-row justify-between py-4 border-b-2 active:scale-95'>
                <IonRow className='flex-1'>
                  <IonText className='text-lg'>Notification Title</IonText>
                  <IonText className='text-sm text-gray-400'>here are some text for notificationfor notificationfor notification.</IonText>
                </IonRow>
                <IonText className='flex h-full items-end' slot='end'>8:00 AM</IonText>
                {/* <IonIcon color='success' className='absolute right-1 top-1' icon={notifications} /> */}
              </IonItem>
            </IonList>
          </IonCol>
        }
      </IonContent>
    </IonPage>
  )
}

export default Notification;