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

import { checkmarkCircle, closeOutline, ellipseOutline, locationOutline } from 'ionicons/icons'
import { useState } from 'react'
import styled from 'styled-components'

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

const Home: React.FC = () => {
  const router = useIonRouter();
  
  const [sheetOpen, setSheetOpen] = useState(false)
  const handleFilter = (item: string) => {
    setSheetOpen(true)
  }

  const handleSearch = () => {
    setSheetOpen(false)
    router.push('/search')
  }

  return (
    <IonPage>
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
          <IonCol onClick={()=> handleFilter('boarding')} class='ion-activatable ripple-parent relative py-2 flex flex-col items-center border-amber-400 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={boardingImg} class='w-12 h-12 mb-2' />
            <IonLabel>Boarding</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-amber-400' icon={checkmarkCircle} />
          </IonCol>
          <IonCol class='ion-activatable ripple-parent relative py-2 flex flex-col items-center border-gray-200 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={careImg} class='w-12 h-12 mb-2' />
            <IonLabel>Dog Walking</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-gray-300' icon={ellipseOutline} />
          </IonCol>
        </IonRow>
        <IonRow class='px-3'>
          <IonCol class='ion-activatable ripple-parent relative py-2 flex flex-col items-center border-gray-200 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={visitImg} class='w-12 h-12 mb-2' />
            <IonLabel>Drop In Visits</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-gray-300' icon={ellipseOutline} />
          </IonCol>
          <IonCol class='ion-activatable ripple-parent relative py-2 flex flex-col items-center border-gray-200 border rounded-md m-3'>
            <IonRippleEffect></IonRippleEffect> 
            <IonImg src={walkingImg} class='w-12 h-12 mb-2' />
            <IonLabel>Dog Day Care</IonLabel>
            <IonIcon className='absolute block w-6 h-6 top-2 right-2 text-gray-300' icon={ellipseOutline} />
          </IonCol>
        </IonRow>
      </IonContent>
      <IonModal
        isOpen={sheetOpen} 
        onDidDismiss={()=>setSheetOpen(false)}
        initialBreakpoint={0.85}
        breakpoints={[0, 0.25, 0.5, 0.85]}>
        <IonContent>
          <IonRow className='p-3 flex justify-between items-center'>
            <IonText>Services</IonText>
            <IonButton size='small' fill='clear' color='dark' onClick={() => setSheetOpen(false)}>
              <IonIcon className='top-1 right-3' icon={closeOutline}></IonIcon>
            </IonButton>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={boardingImg} />
              <IonText>Boarding</IonText>
            </IonCol>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={walkingImg} />
              <IonText>Dog Walking</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={visitImg} />
              <IonText>Drop In Visits</IonText>
            </IonCol>
            <IonCol className='border border-gray-300 rounded-lg flex gap-2 items-center'>
              <IonImg className='w-12 h-12 p-1' src={careImg} />
              <IonText>Dog Day Care</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='relative mx-3 mb-3 gap-3'>
            <IonLabel>Please Select Location</IonLabel>
            <Input
              className="pl-16 w-full border-2 border-gray-200 rounded-md"
              placeholder='Search Location'>
              <IonIcon icon={locationOutline} slot='label' />
            </Input>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonLabel>Pet Weight</IonLabel>
            <Select class='border-2 border-gray-200 rounded-md px-2' placeholder='Choose Pet Weight' justify='space-between'>
              <IonSelectOption value='small'>small</IonSelectOption>
              <IonSelectOption value='medium'>medium</IonSelectOption>
              <IonSelectOption value='large'>large</IonSelectOption>
              <IonSelectOption value='giant'>giant</IonSelectOption>
            </Select>
          </IonRow>
          <IonRow className='mx-3 mb-3 gap-3'>
            <IonLabel>Date</IonLabel>
            <Input
              className="pl-16 w-full border-2 border-gray-200 rounded-md"
              placeholder='Search Location'>
              <IonIcon icon={locationOutline} slot='label' />
            </Input>
          </IonRow>
          <IonButton onClick={handleSearch} className='block mx-3' color='success'>Search</IonButton>
        </IonContent>
      </IonModal>
    </IonPage>
  )
}

export default Home