import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonTitle,
  IonAvatar,
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardContent,
  IonRow,
  IonText,
  IonIcon
} from '@ionic/react'
import { useTranslation } from 'react-i18next';

import imgEmpty from '../../assets/imgs/default.png'
import imgBanner from '../../assets/imgs/back3.png'
import { useState } from 'react';
import { star } from 'ionicons/icons';

const Profile: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [list, setList] = useState([])
  return (
    <IonPage>
      <IonHeader className='px-8 pt-8 text-start'>
        <IonText className='text-lg'>My Listing</IonText>
      </IonHeader>
      <IonContent>
        {
          list.length > 0 ?
          <IonCol className='flex flex-col bg-gray-100 items-center justify-center h-full'>
            <IonAvatar class='w-fit h-fit'>
              <img src={imgEmpty} />
            </IonAvatar>
            <IonButton color='success'>{t('profilePage.become')}</IonButton>
          </IonCol>
          :
          <IonCol>
            <IonCard>
              <IonImg className='h-48 w-full object-cover' src={imgBanner}/>
              <IonCardHeader className='py-1 px-2'>
                <IonRow>
                  <IonCol className='pl-0'>
                    <IonText className='text-lg'>Damian K</IonText>
                    <IonRow className='items-center'>
                      <IonIcon size='sm' icon={star} />
                      <IonIcon size='sm' icon={star} />
                      <IonIcon size='sm' icon={star} />
                      <IonIcon size='sm' icon={star} />
                      <IonIcon size='sm' icon={star} />
                      <IonText className='ml-1'>5.0</IonText>
                    </IonRow>
                  </IonCol>
                  <IonRow className='flex items-center'>
                    <IonButton color='success' fill='outline' size='small'>Manage Listing</IonButton>
                    <IonButton color='success' fill='outline' size='small'>Edit Calendar</IonButton>
                  </IonRow>
                </IonRow>
              </IonCardHeader>
              <IonCardContent>
                <IonText>Services</IonText>
                <IonRow className='flex justify-between'>
                  <IonRow className='flex'>
                    <IonButton color='dark' fill='outline' size='small'>Boarding</IonButton>
                    <IonButton color='dark' fill='outline' size='small'>Dog day care</IonButton>
                  </IonRow>
                  <IonButton className='underline' color='dark' fill='clear' size='small'>View Details</IonButton>
                </IonRow>
              </IonCardContent>
            </IonCard>
          </IonCol>
        }
      </IonContent>
    </IonPage>
  )
}

export default Profile;