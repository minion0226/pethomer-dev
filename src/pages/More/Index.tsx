import {
  IonPage,
  IonContent,
  IonHeader,
  IonText,
  IonRow,
  IonAvatar,
  IonGrid,
  IonList,
  IonIcon,
  IonRippleEffect
} from '@ionic/react'
import imgAvatar from '../../assets/imgs/avatar.png'
import { chevronForwardOutline, logOutOutline } from 'ionicons/icons'
import { useIonRouter } from '@ionic/react'
import { useTranslation } from 'react-i18next'

const More: React.FC = () => {
  const router = useIonRouter()
  const { t, i18n } = useTranslation()
  return (
    <IonPage>
      <IonHeader>
        <IonGrid className='responsive mb-6 p-0 pb-2' dir='column'>
          <IonRow>
            <IonText className='py-14 px-4 bg-green-600 text-white text-2xl w-full font-bold'>
              {t('base.label.more')}
            </IonText>
          </IonRow>
          <IonRow className='absolute bottom-0 pl-5 flex items-end'>
            <IonAvatar class='-top-3 w-20 h-20 border-4 mr-3 rounded-full border-white flex justify-center items-center'>
              <img src={imgAvatar} />
            </IonAvatar>
            <IonText className='text-lg font-bold'>
              John Doe
            </IonText>
          </IonRow>
        </IonGrid>
      </IonHeader>
      <IonContent>
        <IonList lines='full'>
          <IonRow onClick={()=> router.push('/view-info')} className='relative flex justify-between p-5 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonText>{t('morePage.personal_info')}</IonText>
            <IonIcon icon={chevronForwardOutline} className='text-lg'></IonIcon>
          </IonRow>
          <IonRow onClick={()=> router.push('/view-review')} className='relative flex justify-between p-5 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonText>{t('morePage.reviews')}</IonText>
            <IonIcon icon={chevronForwardOutline} className='text-lg'></IonIcon>
          </IonRow>
          <IonRow className='relative flex justify-between p-5 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonText>{t('morePage.payout_details')}</IonText>
            <IonIcon icon={chevronForwardOutline} className='text-lg'></IonIcon>
          </IonRow>
          <IonRow onClick={()=> router.push('/edit-payment')} className='relative flex justify-between p-5 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonText>{t('morePage.payment_method')}</IonText>
            <IonIcon icon={chevronForwardOutline} className='text-lg'></IonIcon>
          </IonRow>
          <IonRow onClick={()=> router.push('/edit-password')} className='relative flex justify-between p-5 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonText>{t('morePage.reset_password')}</IonText>
            <IonIcon icon={chevronForwardOutline} className='text-lg'></IonIcon>
          </IonRow>
          <IonRow onClick={()=> router.push('/')} className='relative flex justify-between p-5 ion-activatable ripple-parent text-red-400'>
            <IonRippleEffect></IonRippleEffect>
            <IonText>{t('morePage.logout')}</IonText>
            <IonIcon icon={logOutOutline} className='text-lg'></IonIcon>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default More