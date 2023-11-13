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

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const Payment : React.FC = () => {
  const router = useIonRouter()

  const [open, setOpen] = useState(false)

  return(
    <IonPage>
      <IonHeader>
        <IonText className="text-lg p-4 block">Payment</IonText>
      </IonHeader>
      <IonContent color='light'>
        <IonCard className="p-2 mb-2">
          <IonRow className="gap-2">
            <IonCol size="5">
              <IonText>Guaranteed Safe & Secure Checkout</IonText>
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
          <IonText className='block w-full mx-2 mb-2'>Card Holder Name</IonText>
          <CustomInput className='bg-white rounded-md' placeholder='Card Holder Name' />
        </IonRow>
        <IonRow className='mx-6 mb-2'>
          <IonText className='block w-full mx-2 mb-2'>Card Number</IonText>
          <CustomInput className='bg-white rounded-md' placeholder='Card Number' />
        </IonRow>
        <IonRow className='mx-6 mb-4'>
          <IonCol className='pl-0'>
            <IonRow>
              <IonText className='block w-full mx-2 mb-2'>Date</IonText>
              <IonCol className='relative flex items-center p-0'>
                <CustomInput className='bg-white rounded-md' readonly placeholder='DD/MM/YYYY' />
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
          <CustomInput className='bg-white rounded-md' readonly placeholder='Total Price' />
        </IonRow>
        <IonRow>
          <IonButton onClick={()=>setOpen(true)} className="block mx-6 w-full" color='success'>Pay for the Booking</IonButton>
        </IonRow>
      </IonContent>
      <IonModal isOpen={open}>
        <IonContent>
          <IonCol className="w-full h-full flex flex-col justify-center items-center">
            <IonImg src={success} />
            <IonText className="text-center text-2xl mb-4">Your Payment has been successful</IonText>
            <IonButton onClick={()=> { setOpen(false); router.push('/review') }} fill="outline" color="success">Done</IonButton>
          </IonCol>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default Payment;