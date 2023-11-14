import {
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonHeader,
  IonIcon,
  IonImg,
  IonInput,
  IonModal,
  IonPage,
  IonRippleEffect,
  IonRow,
  IonText,
  useIonRouter
} from '@ionic/react'

import { calendarOutline, chevronBack, chevronDownOutline, closeOutline, funnelOutline, star, timeOutline } from 'ionicons/icons'
import defaultBack from '../../assets/imgs/back1.png'
import defaultAvatar from '../../assets/imgs/avatar.png'
import { useState } from 'react'
import styled from 'styled-components'

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const Search: React.FC = () => {
  const router =  useIonRouter()
  const [open, setOpen] = useState(false)

  const handleViewDetail = () => {
    router.push('/detail')
  }

  return (
    <IonPage>
      <IonHeader>
        <IonRow className='justify-between items-center'>
          <IonButton onClick={()=>router.goBack()} fill='clear'>
            <IonIcon icon={chevronBack} />
          </IonButton>
          <IonText>Search Results</IonText>
          <IonButton onClick={() => setOpen(true)} className='rounded-full' fill='clear'>
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
      </IonHeader>
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
      <IonModal
        isOpen={open}
        onDidDismiss={()=>setOpen(false)}
        initialBreakpoint={1}
        >
        <IonContent color='light'>
          <IonRow className='flex items-center justify-between m-4'>
            <IonText className='text-2xl'>Filter</IonText>
            <IonButton fill='clear' onClick={()=>setOpen(false)}>
              <IonIcon className='text-black' icon={closeOutline} />
            </IonButton>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Services</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Select Service type' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Key word</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' placeholder='Enter Key word' />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Date</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='DD/MM/YYYY' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={calendarOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Time Slot</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Select Time Slot' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Pet Weight</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Select Pet Weight' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Sitter House</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Choose sitter house' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Skills</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Select skills' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          
          <IonRow className='mx-3 px-2 flex flex-row flex-nowrap'>
            <IonButton color='success block w-full' fill='outline'>Reset</IonButton>
            <IonButton color='success block w-full'>Apply</IonButton>
          </IonRow>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default Search