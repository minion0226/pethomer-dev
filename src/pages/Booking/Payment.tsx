import { 
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonInput, 
  IonModal, 
  IonPage, 
  IonRow, 
  IonText, 
  useIonRouter
} from "@ionic/react"

import ssl from '../../assets/imgs/icons/ssl.png'
import secure from '../../assets/imgs/icons/secure.png'
import stripe from '../../assets/imgs/icons/stripe.svg'

import visa from '../../assets/imgs/payment/visa.png'
import jcb from '../../assets/imgs/payment/jcb.png'
import america from '../../assets/imgs/payment/america.png'
import master from '../../assets/imgs/payment/master.png'

import success from '../../assets/imgs/payment.png'

import styled from 'styled-components'
import { calendarOutline } from "ionicons/icons"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`
const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`

const Payment : React.FC = () => {
  const router = useIonRouter()
  const { t, i18n } = useTranslation()

  const [open, setOpen] = useState(false)

  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return(
    <IonPage>
      {isIOS() ?
        <StatusBar>
          <IonText className="text-lg p-4 block">{t('base.label.payment')}</IonText>
        </StatusBar>
      :
        <IonHeader>
          <IonText className="text-lg p-4 block">{t('base.label.payment')}</IonText>
        </IonHeader>
      }
      <IonContent color='light'>
        <IonCard className="p-2 mb-2">
          <IonRow className="gap-2">
            <IonCol size="5">
              <IonText>{t('base.label.garantee')}</IonText>
            </IonCol>
            <IonImg src={stripe}/>
            <IonImg src={secure}/>
            <IonImg src={ssl}/>
          </IonRow>
          <IonRow className="gap-2">
            <IonImg className="py-1 px-2 border-2 border-gray-200 rounded-md" src={visa} />
            <IonImg className="py-1 px-2 border-2 border-gray-200 rounded-md" src={jcb} />
            <IonImg className="py-1 px-2 border-2 border-gray-200 rounded-md" src={america} />
            <IonImg className="py-1 px-2 border-2 border-gray-200 rounded-md" src={master} />
          </IonRow> 
        </IonCard>
        <IonRow className='mx-6 mb-2'>
          <IonText className='block w-full mx-2 mb-2'>{t('base.label.holder_name')}</IonText>
          <CustomInput className='bg-white rounded-md' placeholder={t('base.label.holder_name')} />
        </IonRow>
        <IonRow className='mx-6 mb-2'>
          <IonText className='block w-full mx-2 mb-2'>{t('base.label.card_number')}</IonText>
          <CustomInput className='bg-white rounded-md' placeholder={t('base.label.card_number')} />
        </IonRow>
        <IonRow className='mx-6 mb-4'>
          <IonCol className='pl-0'>
            <IonRow>
              <IonText className='block w-full mx-2 mb-2'>{t('base.label.date')}</IonText>
              <IonCol className='relative flex items-center p-0'>
                <CustomInput className='bg-white rounded-md' readonly placeholder={t('base.placeholder.date')} />
                <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
              </IonCol>
            </IonRow>
          </IonCol>
          <IonCol className='pr-0'>
            <IonRow>
              <IonText className='block w-full mx-2 mb-2'>CVV</IonText>
              <CustomInput className='bg-white rounded-md p-0' placeholder='***' />
            </IonRow>
          </IonCol>
        </IonRow>
        <IonRow className='flex items-center relative mx-6 mb-4'>
          <IonText className='absolute right-4 z-10'>PLN 15.00</IonText>
          <CustomInput className='bg-white rounded-md' readonly placeholder={t('base.label.total_price')} />
        </IonRow>
        <IonRow>
          <IonButton onClick={()=>setOpen(true)} className="block mx-6 w-full" color='success'>{t('base.button.pay_booking')}</IonButton>
        </IonRow>
      </IonContent>
      <IonModal isOpen={open}>
        <IonContent>
          <IonCol className="w-full h-full flex flex-col justify-center items-center">
            <IonImg src={success} />
            <IonText className="text-center text-2xl mb-4">{t('base.message.payment_success')}</IonText>
            <IonButton onClick={()=> { setOpen(false); router.push('/review') }} fill="outline" color="success">{t('base.button.done')}</IonButton>
          </IonCol>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default Payment;