import {
  IonPage,
  IonContent,
  IonRow,
  IonList,
  IonItem,
  IonRippleEffect,
  IonAvatar,
  IonButtons,
  IonButton,
  IonCol,
  IonIcon,
  IonPopover,
  IonText,
  IonTitle,
  IonModal,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonLabel,
  IonInput,
  useIonRouter
} from '@ionic/react'
import { useTranslation } from 'react-i18next'
import { calendarOutline, closeOutline, filterOutline, search } from 'ionicons/icons'
import styled from 'styled-components'
import { useState } from 'react'

import imgAvater from '../../assets/imgs/default.png'

const FilterModal = styled(IonModal)`
  --ion-background-color: transparent;
  & .ion-page {
    display: flex;
    justify-content: center;
    
  }
`
const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const Dot = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  background-color: red;
  position: absolute;
`

const Booking: React.FC = () => {
  const router = useIonRouter()
  const { t, i18n } = useTranslation()

  const [filterOpen, setFilterOpen] = useState(false)

  const routeChat = () => {
    router.push('/chat')
  }

  return (
    <IonPage>
      <IonRow className='p-1 px-3 justify-between items-center'>
        <IonText className='text-2xl'>{t('base.label.chat')}</IonText>
        <IonButtons>
          <IonButton onClick={()=>setFilterOpen(true)} className='rounded-full text-black bg-slate-200 w-9 h-9'>
            <IonIcon className='text-base' icon={search} />
          </IonButton>
          <IonButton id='filter-trigger' className='rounded-full text-black bg-slate-200 w-9 h-9'>
            <IonIcon className='text-base' icon={filterOutline} />
          </IonButton>
          <IonPopover trigger="filter-trigger" triggerAction="click">
            <IonRow className='flex flex-col p-2 gap-2'>
              <IonTitle className='relative p-2 text-sm text-start ion-activatable ripple-parent'>
                <IonRippleEffect></IonRippleEffect>
                {t('base.label.last_transitioned')}
              </IonTitle>
              <IonTitle className='relative p-2 text-sm text-start ion-activatable ripple-parent'>
                <IonRippleEffect></IonRippleEffect>
                {t('base.label.status')}
              </IonTitle>
              <IonTitle className='relative p-2 text-sm text-start ion-activatable ripple-parent'>
                <IonRippleEffect></IonRippleEffect>
                {t('base.label.dos')}
              </IonTitle>
              <IonTitle className='relative p-2 text-sm text-start ion-activatable ripple-parent'>
                <IonRippleEffect></IonRippleEffect>
                {t('base.label.doe')}
              </IonTitle>
            </IonRow>
          </IonPopover>
        </IonButtons>
      </IonRow>

      <IonRow className='flex text-center p-1 px-3'>
        <IonCol className='flex-1 py-3 mr-0 ion-activatable ripple-parent bg-amber-400 rounded-s-lg relative text-white'>
          <IonRippleEffect></IonRippleEffect>
          {t('base.button.requests')}
          <Dot className='rounded-full -top-0.5 -left-0.5' />
        </IonCol>
        <IonCol className='flex-1 py-3 ml-0 ion-activatable ripple-parent border rounded-s-none rounded-e-lg'>
          <IonRippleEffect></IonRippleEffect>
          {t('base.button.sales')}
        </IonCol>
      </IonRow>

      <IonContent color='light'>
        <IonList lines='full'>
          {/* requested */}
          <IonItem onClick={routeChat} button detail={false}>
            <IonAvatar className='w-12 h-12 my-3'>
              <img src={imgAvater}/>
            </IonAvatar>
            <IonRow className='flex flex-col text-start ml-2 my-3'>
              <IonText className='text-base font-bold'>Name</IonText>
              <IonText className='text-sm text-gray-400'>location</IonText>
            </IonRow>
            <IonText class='p-2 text-sm border-amber-400 text-amber-400 border rounded-lg relative my-3' slot='end'>
              {t('base.button.requested')}
              <Dot className='rounded-full -top-0.5 -right-0.5' />
            </IonText>
          </IonItem>

          {/* paid */}
          <IonItem button detail={false}>
            <IonAvatar className='w-12 h-12 my-3'>
              <img src={imgAvater}/>
            </IonAvatar>
            <IonRow className='flex flex-col text-start ml-2 my-3'>
              <IonText className='text-base font-bold'>Name</IonText>
              <IonText className='text-sm text-gray-400'>location</IonText>
            </IonRow>
            <IonText class='p-2 text-sm border-green-400 text-green-400 border rounded-lg relative my-3' slot='end'>
              {t('base.button.paid')}
            </IonText>
          </IonItem>

          {/* rejected */}
          <IonItem button detail={false}>
            <IonAvatar className='w-12 h-12 my-3'>
              <img src={imgAvater}/>
            </IonAvatar>
            <IonRow className='flex flex-col text-start ml-2 my-3'>
              <IonText className='text-base font-bold'>Name</IonText>
              <IonText className='text-sm text-gray-400'>location</IonText>
            </IonRow>
            <IonText class='p-2 text-sm border-red-500 text-red-500 border rounded-lg relative' my-3 slot='end'>
              {t('base.button.rejected')}
            </IonText>
          </IonItem>

          {/* waiting */}
          <IonItem button detail={false}>
            <IonAvatar className='w-12 h-12 my-3'>
              <img src={imgAvater}/>
            </IonAvatar>
            <IonRow className='flex flex-col text-start ml-2 my-3'>
              <IonText className='text-base font-bold'>Name</IonText>
              <IonText className='text-sm text-gray-400'>location</IonText>
            </IonRow>
            <IonText class='p-2 text-sm border-amber-400 text-amber-400 border rounded-lg relative my-3' slot='end'>
              {t('base.button.waiting')}
            </IonText>
          </IonItem>
        </IonList>
      </IonContent>

      <FilterModal isOpen={filterOpen} className='flex flex-row h-full items-center justify-center w-fit-content'>
        <IonCard className='relative bg-white'>
          <IonIcon className='absolute top-3 right-3 z-10' onClick={()=>setFilterOpen(false)} icon={closeOutline} size='large' />
          <IonCardHeader className='flex flex-row mx-3 items-center justify-start'>
            <IonText className='text-lg'>Filter</IonText>
          </IonCardHeader>
          <IonCardContent>
            <IonRow className='mb-2'>
              <IonLabel className='mb-3'>Statue</IonLabel>
              <IonRow className='w-full flex flex-row gap-1'>
                <IonText className='py-1 px-2 border-2 border-yellow-400 text-yellow-400 rounded-full text-sm active:scale-95'>Paid</IonText>
                <IonText className='py-1 px-2 border-2 border-yellow-400 text-yellow-400 rounded-full text-sm active:scale-95'>Completed</IonText>
                <IonText className='py-1 px-2 border-2 border-yellow-400 text-yellow-400 rounded-full text-sm active:scale-95'>Accepted</IonText>
                <IonText className='py-1 px-2 border-2 border-yellow-400 text-yellow-400 rounded-full text-sm active:scale-95'>Rejected</IonText>
              </IonRow>
            </IonRow>
            <IonRow>
              <IonText className='block w-full mx-2 mb-2'>Date of the service</IonText>
              <IonCol className='relative flex items-center p-0 border-2 border-gray-200 rounded-md'>
                <CustomInput className='bg-white rounded-md' readonly placeholder='DD/MM/YYYY from-to' />
                <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonButton className='block' onClick={()=>setFilterOpen(false)} fill='outline' color='success'>Cancel</IonButton>
              </IonCol>
              <IonCol>
                <IonButton className='block' onClick={()=>setFilterOpen(false)} color='success'>Accept</IonButton>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>
      </FilterModal>
    </IonPage>
  )
}

export default Booking