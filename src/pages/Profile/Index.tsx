import {
  IonPage,
  IonContent,
  IonHeader,
  IonButton,
  IonAvatar,
  IonCol,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardContent,
  IonRow,
  IonText,
  IonIcon,
  useIonRouter
} from '@ionic/react'
import { useTranslation } from 'react-i18next';

import imgEmpty from '../../assets/imgs/default.png'
import imgBanner from '../../assets/imgs/back3.png'
import { useState } from 'react';
import { star } from 'ionicons/icons';

const Profile: React.FC = () => {
  const router = useIonRouter()
  const { t, i18n } = useTranslation()
  const [list, setList] = useState([])
  return (
    <IonPage>
      <IonHeader>
        <IonText className='block p-4 text-lg'>{t('base.label.my_listing')}</IonText>
      </IonHeader>
      <IonContent color='light'>
        {
          list.length === 0 ?
          <IonCol className='flex flex-col bg-gray-100 items-center justify-center h-full'>
            <IonAvatar class='w-fit h-fit'>
              <img src={imgEmpty} />
            </IonAvatar>
            <IonButton onClick={() => router.push('/sitter-wizard')} color='success'>{t('profilePage.become')}</IonButton>
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
                    <IonButton color='success' fill='outline' size='small'>{t('profilePage.manage_listing')}</IonButton>
                    <IonButton color='success' fill='outline' size='small'>{t('profilePage.edit_calendar')}</IonButton>
                  </IonRow>
                </IonRow>
              </IonCardHeader>
              <IonCardContent>
                <IonText>{t('base.label.services')}</IonText>
                <IonRow className='flex justify-between'>
                  <IonRow className='flex'>
                    <IonButton color='dark' fill='outline' size='small'>{t('homePage.boarding')}</IonButton>
                    <IonButton color='dark' fill='outline' size='small'>{t('homePage.dogdaycare')}</IonButton>
                  </IonRow>
                  <IonButton className='underline' color='dark' fill='clear' size='small'>{t('profilePage.view_details')}</IonButton>
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