import {
  IonPage,
  IonContent,
  IonText,
  IonRow,
  IonImg,
  IonButton,
  IonIcon,
  IonAvatar,
  IonCard,
  IonCardTitle,
  IonCardContent,
  IonCol,
  IonRippleEffect,
  useIonRouter,
  IonModal,
  IonInput,
  IonTextarea
} from '@ionic/react'

import boardingImg from '../../assets/imgs/icons/boarding.png'
import careImg from '../../assets/imgs/icons/care.png'
import visitImg from '../../assets/imgs/icons/visit.png'
import walkingImg from '../../assets/imgs/icons/walking.png'

import banner from '../../assets/imgs/banner.png'
import avatar01 from '../../assets/imgs/icons/avatar01.png'
import { calendarOutline, checkmarkCircleOutline, chevronBack, chevronDownOutline, closeOutline, imageOutline, star } from 'ionicons/icons';
import { useState } from 'react'
import styled from 'styled-components'

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const Detail : React.FC = () => {
  const router = useIonRouter()
  const [open, setOpen] = useState(false)
  
  return (
    <IonPage>
      <IonRow className='relative h-64'>
        <IonImg src={banner} className='h-60 w-full object-cover' />
        <IonButton onClick={()=>router.goBack()} size='small' fill='clear' className='absolute top-12 left-4 text-white'>
          <IonIcon icon={chevronBack} />
        </IonButton>
        <IonCol onClick={()=>router.push('/gallery')} className='absolute ion-activatable ripple-parent bottom-6 right-6 rounded-lg bg-lime-500 text-white flex items-center z-20' color='success' size='default'>
          <IonRippleEffect></IonRippleEffect>
          <IonIcon size='large' icon={imageOutline} />
        </IonCol>
        <IonRow className='absolute -bottom-16 w-full flex justify-center z-10'>
          <IonAvatar className='w-32 h-32 border-4 border-white'>
            <IonImg src={banner} />
          </IonAvatar> 
        </IonRow>
      </IonRow>
      <IonRow className='w-full h-24 z-20 text-black flex justify-center items-end'>
        <IonText className='text-2xl font-semibold'>Alexandra G</IonText>
      </IonRow>
      <IonContent color='light'>
        <IonCard>
          <IonCardTitle className='px-4 pt-3 text-lg'>About Me</IonCardTitle>
          <IonCardContent className='pt-2'>
            Cześć​,​ Jestem Ola​,​ a psy są moją pasją. Interesuję się psią psychologią i rozumiem psy​,​ dzięki czemu potrafię trafnie odpowiadać na ich potrzeby. Wiem​,​ że oddanie swojego zwierzaka pod opiekę w obce ręce to duże wyzwanie. Ja i Bantey (mój cavalier) zapewnimy komfort​,​ spokój i przestrzeń każdemu pieskowi lub innemu ulubieńcowi​,​ który się u nas pojawi.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardTitle className='px-4 pt-3 text-lg'>My Experience</IonCardTitle>
          <IonCardContent className='pt-2'>
            Cześć​,​ Jestem Ola​,​ a psy są moją pasją. Interesuję się psią psychologią i rozumiem psy​,​ dzięki czemu potrafię trafnie odpowiadać na ich potrzeby. Wiem​,​ że oddanie swojego zwierzaka pod opiekę w obce ręce to duże wyzwanie. Ja i Bantey (mój cavalier) zapewnimy komfort​,​ spokój i przestrzeń każdemu pieskowi lub innemu ulubieńcowi​,​ który się u nas pojawi.
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardTitle className='px-4 pt-3 text-lg'>Services</IonCardTitle>
          <IonCardContent className='pt-2'>
            <IonRow>
              <IonCol className='flex flex-row gap-2 items-center'>
                <IonImg className='w-8 h-8' src={boardingImg} />
                <IonText>Boarding</IonText>
              </IonCol>
              <IonCol className='flex flex-row gap-2 items-center'>
                <IonImg className='w-8 h-8' src={walkingImg} />
                <IonText>Dog Walking</IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className='flex flex-row gap-2 items-center'>
                <IonImg className='w-8 h-8' src={visitImg} />
                <IonText>Dog In Visits</IonText>
              </IonCol>
              <IonCol className='flex flex-row gap-2 items-center'>
                <IonImg className='w-8 h-8' src={careImg} />
                <IonText>Dog Day Care</IonText>
              </IonCol>
            </IonRow>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardTitle className='px-4 pt-3 text-lg'>Pet Size preference</IonCardTitle>
          <IonCardContent>
            <IonCol className='flex flex-row items-center gap-2'>
              <IonIcon color='success' icon={checkmarkCircleOutline}/>
              <IonText>Small: up to 7 kg</IonText>
            </IonCol>
            <IonCol className='flex flex-row items-center gap-2'>
              <IonIcon color='success' icon={checkmarkCircleOutline}/>
              <IonText>Giant: over 35 kg</IonText>
            </IonCol>
          </IonCardContent>
        </IonCard>
        
        <IonCard>
          <IonCardTitle className='px-4 pt-3 text-lg'>Benefits</IonCardTitle>
          <IonCardContent>
            <IonCol className='flex flex-row items-center gap-2'>
              <IonIcon color='success' icon={checkmarkCircleOutline}/>
              <IonText>Small: up to 7 kg</IonText>
            </IonCol>
            <IonCol className='flex flex-row items-center gap-2'>
              <IonIcon color='success' icon={checkmarkCircleOutline}/>
              <IonText>Giant: over 35 kg</IonText>
            </IonCol>
          </IonCardContent>
        </IonCard>
        
        <IonCard>
          <IonCardTitle className='px-4 pt-3 text-lg'>Skills</IonCardTitle>
          <IonCardContent>
            <IonCol className='flex flex-row items-center gap-2'>
              <IonIcon color='success' icon={checkmarkCircleOutline}/>
              <IonText>Small: up to 7 kg</IonText>
            </IonCol>
            <IonCol className='flex flex-row items-center gap-2'>
              <IonIcon color='success' icon={checkmarkCircleOutline}/>
              <IonText>Giant: over 35 kg</IonText>
            </IonCol>
          </IonCardContent>
        </IonCard>

        <IonText className='px-4'>Location</IonText>
        <IonCard>
          <IonCardContent>
            Here goes google Map view.
            {/* <CapacitorGoogleMaps ref={mapRef}>

            </CapacitorGoogleMaps> */}
          </IonCardContent>
        </IonCard>

        <IonText className='px-4'>Reviews (1)</IonText>
        <IonRow className='overflow-x-scroll flex-nowrap mx-4'>
          <IonCard className='w-4/5 flex-shrink-0'>
            <IonRow className='p-4'>
              <IonImg className='w-12 h-12 rounded-full border-2 border-gray-400' src={avatar01} />
              <IonCol>
                <IonText>Magda</IonText>
                <IonRow className='flex flex-row gap-1'>
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                </IonRow>
              </IonCol>
              <IonText>
                Serdecznie polecam Olę! Pierwszy raz skorzystałam z serwisu Pethomer i jestem bardzo zadowolona, że trafiłam na takiego świetnego opiekuna jak Ola. Codzienne relacje zdjęciowo-filmowe z pobytu pieska, opis jak się miewa, kontakt w razie wątpliwości – super! Widać, że opieką :)
              </IonText>
            </IonRow>
          </IonCard>

          <IonCard className='w-4/5 flex-shrink-0'>
            <IonRow className='p-4'>
              <IonImg className='w-12 h-12 rounded-full border-2 border-gray-400' src={avatar01} />
              <IonCol>
                <IonText>Magda</IonText>
                <IonRow className='flex flex-row gap-1'>
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                  <IonIcon icon={star} />
                </IonRow>
              </IonCol>
              <IonText>
                Serdecznie polecam Olę! Pierwszy raz skorzystałam z serwisu Pethomer i jestem bardzo zadowolona, że trafiłam na takiego świetnego opiekuna jak Ola. Codzienne relacje zdjęciowo-filmowe z pobytu pieska, opis jak się miewa, kontakt w razie wątpliwości – super! Widać, że opieką :)
              </IonText>
            </IonRow>
          </IonCard>
        </IonRow>

      </IonContent>
      <IonRow>
        <IonButton onClick={()=>setOpen(true)} className='block w-full p-2' color='success'>Request Book</IonButton>
      </IonRow>
      <IonModal
        isOpen={open}
        onDidDismiss={()=>setOpen(false)}
        initialBreakpoint={1}
        >
        <IonContent color='light'>
          <IonRow className='flex items-center justify-between m-4'>
            <IonText className='text-2xl'>Request to book</IonText>
            <IonButton size='small' fill='clear' onClick={()=>setOpen(false)}>
              <IonIcon icon={closeOutline} />
            </IonButton>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>What service do you need?</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Select Service' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>What size is your dog?</IonText>
            <IonCol className='relative flex items-center'>
              <CustomInput className='bg-white rounded-md' readonly placeholder='Select Dog Size' />
              <IonIcon className='absolute text-gray-400 right-4 z-10' icon={chevronDownOutline} />
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonCol>
              <IonRow>
                <IonText className='block w-full mx-2'>Start Date</IonText>
                <IonCol className='relative flex items-center px-0'>
                  <CustomInput className='bg-white rounded-md' readonly placeholder='Select Dog Size' />
                  <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol>
              <IonRow>
                <IonText className='block w-full mx-2'>End Date</IonText>
                <IonCol className='relative flex items-center px-0'>
                  <CustomInput className='bg-white rounded-md' readonly placeholder='Select Dog Size' />
                  <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-2'>
            <IonText className='block w-full mx-2'>Message</IonText>
            <IonTextarea className='bg-white mx-2 rounded-md p-2' rows={4} placeholder='write here...'></IonTextarea>
          </IonRow>
          <IonRow className='mx-3 px-2'>
            <IonButton color='success block w-full'>Request to book</IonButton>
          </IonRow>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default Detail;