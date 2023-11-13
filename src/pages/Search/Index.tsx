import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonText,
  useIonRouter
} from '@ionic/react'

import { chevronBack, chevronDownOutline, funnelOutline, star, timeOutline } from 'ionicons/icons'
import defaultBack from '../../assets/imgs/back1.png'
import defaultAvatar from '../../assets/imgs/avatar.png'

const Search: React.FC = () => {
  const router =  useIonRouter()

  const handleViewDetail = () => {
    router.push('/detail')
  }

  return (
    <IonPage>
      <IonRow className='justify-between items-center'>
        <IonButton onClick={()=>router.goBack()} fill='clear'>
          <IonIcon icon={chevronBack} />
        </IonButton>
        <IonText>Search Results</IonText>
        <IonButton className='rounded-full' fill='clear'>
          <IonIcon icon={funnelOutline} />
        </IonButton>
      </IonRow>
      <IonRow className='mx-3 justify-between items-center'>
        <IonText>100 results</IonText>
        <IonRow className='flex flex-row flex-nowrap items-center'>
          <IonText className='whitespace-nowrap'>Sort by:</IonText>
          <IonButton fill='clear' className='px-0' size='small' color='medium'>
            <IonIcon icon={chevronDownOutline} />
          </IonButton>
        </IonRow>
      </IonRow>
      <IonContent>
        <IonRow>
          <IonCol className='relative mx-3 my-1 ion-activatable ripple-parent' onClick={handleViewDetail}>
            <IonRippleEffect></IonRippleEffect>
            <IonImg src={defaultBack} className='rounded-md overflow-hidden h-56 object-cover' />
            <IonAvatar className='absolute top-6 right-6 w-12 h-12 border-2 border-white rounded-full'>
              <IonImg src={defaultAvatar} />
            </IonAvatar>
            <IonText className='absolute z-10 text-white text-lg font-bold bottom-24 left-6'>User Name</IonText>
            <IonRow className='absolute z-10 text-white bottom-16 left-6 flex items-center'>
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-3' icon={star} color='yellow' />
              <IonText className='mr-2'>5.0</IonText>
              <IonText className='text-gray-300'>(7 opini)</IonText>
            </IonRow>
            <IonRow className='absolute z-10 text-white bottom-8 left-6 flex items-center'>
              <IonIcon className='text-2xl mr-2' icon={timeOutline} color='yellow' />
              <IonText>User Name</IonText>
            </IonRow>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='relative mx-3 my-1 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonImg src={defaultBack} className='rounded-md overflow-hidden h-56 object-cover' />
            <IonAvatar className='absolute top-6 right-6 w-12 h-12 border-2 border-white rounded-full'>
              <IonImg src={defaultAvatar} />
            </IonAvatar>
            <IonText className='absolute z-10 text-white text-lg font-bold bottom-24 left-6'>User Name</IonText>
            <IonRow className='absolute z-10 text-white bottom-16 left-6 flex items-center'>
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-3' icon={star} color='yellow' />
              <IonText className='mr-2'>5.0</IonText>
              <IonText className='text-gray-300'>(7 opini)</IonText>
            </IonRow>
            <IonRow className='absolute z-10 text-white bottom-8 left-6 flex items-center'>
              <IonIcon className='text-2xl mr-2' icon={timeOutline} color='yellow' />
              <IonText>User Name</IonText>
            </IonRow>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol className='relative mx-3 my-1 ion-activatable ripple-parent'>
            <IonRippleEffect></IonRippleEffect>
            <IonImg src={defaultBack} className='rounded-md overflow-hidden h-56 object-cover' />
            <IonAvatar className='absolute top-6 right-6 w-12 h-12 border-2 border-white rounded-full'>
              <IonImg src={defaultAvatar} />
            </IonAvatar>
            <IonText className='absolute z-10 text-white text-lg font-bold bottom-24 left-6'>User Name</IonText>
            <IonRow className='absolute z-10 text-white bottom-16 left-6 flex items-center'>
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-0.5' icon={star} color='yellow' />
              <IonIcon className='mr-3' icon={star} color='yellow' />
              <IonText className='mr-2'>5.0</IonText>
              <IonText className='text-gray-300'>(7 opini)</IonText>
            </IonRow>
            <IonRow className='absolute z-10 text-white bottom-8 left-6 flex items-center'>
              <IonIcon className='text-2xl mr-2' icon={timeOutline} color='yellow' />
              <IonText>User Name</IonText>
            </IonRow>
          </IonCol>
        </IonRow>
        <IonCol className='h-24 bg-gradient-to-b from-transparent to-gray-300 w-full fixed block p-0 z-20 bottom-0'></IonCol>
      </IonContent>
    </IonPage>
  )
}

export default Search