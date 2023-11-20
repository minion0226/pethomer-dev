import {
  IonPage,
  IonRow,
  IonImg,
  IonCol,
  IonLabel,
  IonContent,
  IonRippleEffect,
  IonIcon,
  IonModal,
  IonText,
  IonButton,
  IonInput,
  IonSelect,
  IonSelectOption,
  useIonRouter,
  IonHeader,
} from '@ionic/react'

import Logo from '../../assets/imgs/logo.png'
import Mask from '../../assets/imgs/mask.png'

import maskImg1 from '../../assets/imgs/mask00.png'
import maskImg2 from '../../assets/imgs/mask01.png'
import maskImg3 from '../../assets/imgs/mask02.png'
import maskImg4 from '../../assets/imgs/mask03.png'
import maskImg5 from '../../assets/imgs/mask04.png'
import maskImg6 from '../../assets/imgs/mask05.png'
import maskImg7 from '../../assets/imgs/mask06.png'

import boardingImg from '../../assets/imgs/icons/boarding.png'
import careImg from '../../assets/imgs/icons/care.png'
import visitImg from '../../assets/imgs/icons/visit.png'
import walkingImg from '../../assets/imgs/icons/walking.png'

import { calendarOutline, checkmarkCircle, closeOutline, ellipseOutline, locationOutline } from 'ionicons/icons'
import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const Input = styled(IonInput)`  
--padding-end: 10px;
--padding-start: 10px;
`
const Select = styled(IonSelect)`  
  --padding-end: 10px;
  --padding-start: 10px;

  & .select-wrapper .native-wrapper {
    width: 100%;
  }
`

const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`


const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const router = useIonRouter();
  
  const [sheetOpen, setSheetOpen] = useState(false)
  const handleFilter = (item: string) => {
    setSheetOpen(true)
  }

  const handleSearch = () => {
    setSheetOpen(false)
    router.push('/search')
  }

  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <IonPage>
      {isIOS()&&<StatusBar />}
      <IonContent color='light'>
        <IonRow class='flex justify-center'>
          <IonImg src={Logo} />
        </IonRow>
        <IonRow class='flex justify-center relative -top-4'>
          <IonImg src={Mask} class='w-full' />
          <IonImg className='absolute' src={maskImg1} style={{ top: '4%', left: '15%'}} />
          <IonImg className='absolute' src={maskImg2} style={{ top: '4%', right: '16%'}} />
          <IonImg className='absolute' src={maskImg3} style={{ top: '4%', right: '16%'}} />
          <IonImg className='absolute' src={maskImg4} style={{ top: '32%', left: '10%'}} />
          <IonImg className='absolute' src={maskImg5} style={{ bottom: '40%', right: '3%'}} />
          <IonImg className='absolute' src={maskImg6} style={{ bottom: '16%', right: '18%'}} />
          <IonImg className='absolute' src={maskImg7} style={{ bottom: '3%', left: '27%'}} />
        </IonRow>
        <IonRow class='px-3'>
          <IonCol onClick={()=> handleFilter('boarding')} class='ion-activatable ripple-parent relative py-2 flex flex-col items-center border-amber-400 bg-white border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={boardingImg} class='w-12 h-12 mb-2' />
            <IonLabel className='text-center px-1'>{t('homePage.boarding')}</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-amber-400' icon={checkmarkCircle} />
          </IonCol>
          <IonCol class='ion-activatable ripple-parent relative py-2 flex flex-col items-center bg-white border-gray-200 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={careImg} class='w-12 h-12 mb-2' />
            <IonLabel className='text-center px-1'>{t('homePage.dogwalking')}</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-gray-300' icon={ellipseOutline} />
          </IonCol>
        </IonRow>
        <IonRow class='px-3'>
          <IonCol class='ion-activatable ripple-parent relative py-2 flex flex-col items-center bg-white border-gray-200 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={visitImg} class='w-12 h-12 mb-2' />
            <IonLabel className='text-center px-1'>{t('homePage.dropinvisits')}</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-gray-300' icon={ellipseOutline} />
          </IonCol>
          <IonCol class='ion-activatable ripple-parent relative py-2 flex flex-col items-center bg-white border-gray-200 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={walkingImg} class='w-12 h-12 mb-2' />
            <IonLabel className='text-center px-1'>{t('homePage.dogdaycare')}</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-gray-300' icon={ellipseOutline} />
          </IonCol>
        </IonRow>
      </IonContent>
      <IonModal
        isOpen={sheetOpen} 
        onDidDismiss={()=>setSheetOpen(false)}
        // initialBreakpoint={0.85}
        breakpoints={[0, 0.25, 0.5, 0.85]}>
        <IonContent>
          <IonRow className='p-3 flex justify-between items-center'>
            <IonText>{t('base.label.services')}</IonText>
            <IonButton size='small' fill='clear' color='dark' onClick={() => setSheetOpen(false)}>
              <IonIcon className='top-1 right-3' icon={closeOutline}></IonIcon>
            </IonButton>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={boardingImg} />
              <IonText>{t('homePage.boarding')}</IonText>
            </IonCol>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={walkingImg} />
              <IonText>{t('homePage.dogwalking')}</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={visitImg} />
              <IonText>{t('homePage.dropinvisits')}</IonText>
            </IonCol>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={careImg} />
              <IonText>{t('homePage.dogdaycare')}</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='relative mx-3 mb-3 gap-3'>
            <IonLabel>{t('base.label.select_location')}</IonLabel>
            <Input
              className="pl-16 w-full border-2 border-gray-200 rounded-md"
              placeholder={t('base.placeholder.search_location')}>
              <IonIcon icon={locationOutline} slot='label' />
            </Input>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonLabel>{t('base.label.pet_weight')}</IonLabel>
            <Select class='border-2 border-gray-200 rounded-md px-2' placeholder={t('base.placeholder.choose_weight')} justify='space-between'>
              <IonSelectOption value='small'>{t('base.label.weight_small')}</IonSelectOption>
              <IonSelectOption value='medium'>{t('base.label.weight_medium')}</IonSelectOption>
              <IonSelectOption value='large'>{t('base.label.weight_large')}</IonSelectOption>
              <IonSelectOption value='giant'>{t('base.label.weight_giant')}</IonSelectOption>
            </Select>
          </IonRow>
          <IonRow className='mx-3 mb-3'>
            <IonText className='block w-full mx-2 mb-2'>{t('base.label.date')}</IonText>
            <IonCol className='relative flex items-center p-0 border-2 border-gray-200 rounded-md'>
              <Input className='bg-white rounded-md' readonly placeholder={t('base.placeholder.date_range')} />
              <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
            </IonCol>
          </IonRow>
          <IonButton onClick={handleSearch} className='block mx-3' color='success'>{t('base.button.search')}</IonButton>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default Home