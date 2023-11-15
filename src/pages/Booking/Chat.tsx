import { 
  IonAvatar,
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonHeader, 
  IonIcon, 
  IonImg,  
  IonAlert,  
  IonPage, 
  IonRow,
  IonText,
  IonTextarea,
  useIonRouter
} from "@ionic/react"
import styled from 'styled-components'

import { chevronBack, chevronDown, chevronForward, chevronUp, paperPlaneOutline, star } from "ionicons/icons"
import avatar from '../../assets/imgs/avatar.png'
import { useState } from "react"
import { useTranslation } from "react-i18next"

const CustomInput = styled(IonTextarea)`
  --padding-start: 10px;
`
const SendButton = styled(IonButton)`
  --padding-top: 10px;
  --padding-bottom: 10px;
`
const Chat : React.FC = () => {
  const router = useIonRouter()
  const { t, i18n } = useTranslation()
  const [detailView, setDetailView] = useState(false)
  const [stage, setStage] = useState(0)
  const handleChangeStage = () => {
    if(stage < 4) {
      setStage(stage + 1)
    } else {
      router.push('/pay')
    }
  }
  return(
    <IonPage>
      <IonHeader>
        <IonRow className="border-b-2">
          <IonCol className="flex flex-row items-center gap-2">
            <IonIcon onClick={() => router.goBack()} icon={chevronBack} />
            <IonAvatar>
              <IonImg src={avatar} />
            </IonAvatar>
            <IonText>Alexandara G.</IonText>
          </IonCol>
          <IonCol className="flex justify-end items-center">
            <IonButton onClick={()=>setDetailView(!detailView)} color='success' fill="outline">
              {t('profilePage.view_details')}
              <IonIcon icon={detailView?chevronUp:chevronDown} />
            </IonButton>
          </IonCol>
        </IonRow>
        <IonRow className="flex flex-row items-center gap-2 p-2">
          <IonText className={stage >= 1?'text-yellow-500': ''}>{t('base.button.requested')}</IonText>
          <IonIcon className={stage >= 1?'text-yellow-500': ''} icon={chevronForward} />
          <IonText className={stage >= 2?'text-yellow-500': ''}>{t('base.button.accepted')}</IonText>
          <IonIcon className={stage >= 3?'text-yellow-500': ''} icon={chevronForward} />
          <IonText className={stage >= 3?'text-yellow-500': ''}>{t('base.button.paid')}</IonText>
          <IonIcon className={stage >= 3?'text-yellow-500': ''} icon={chevronForward} />
          <IonText className={stage >= 4?'text-yellow-500': ''}>{t('base.button.reviewed')}</IonText>
        </IonRow>
      </IonHeader>
      <IonContent color='light relative'>
        {
          detailView && <IonCard className="p-2">
            <IonRow className="mb-4">
              <div className="flex flex-row items-center gap-2">
                <IonAvatar>
                  <IonImg src={avatar} />
                </IonAvatar>
                <IonCol>
                  <IonText>Alexandara G.</IonText>
                  <IonRow className="flex flex-row items-center">
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonIcon icon={star} />
                    <IonText>5.0 (7 opini)</IonText>
                  </IonRow>

                </IonCol>
              </div>
              <IonCol className="flex justify-end">
                <IonButton color='success' fill="outline" size="small">
                  {t('base.button.view_profile')}
                </IonButton>
              </IonCol>
            </IonRow>
            <IonRow className="border-b-2">
              <IonCol>
                <IonText className="block">{t('base.label.booking_start')}</IonText>
                <IonText className="block text-lg font-bold">Mon 19 oct 2023</IonText>
              </IonCol>
              <IonCol>
                <IonText className="block">{t('base.label.booking_end')}</IonText>
                <IonText className="block text-lg font-bold">Wed 22 oct 2023</IonText>
              </IonCol>
            </IonRow>
            <IonRow className="border-b-2">
              <IonCol>
                <IonText className="block">{t('base.label.services')}</IonText>
                <IonText className="block text-lg font-bold">Boarding</IonText>
              </IonCol>
              <IonCol>
                <IonText className="block">{('base.label.pet_size')}</IonText>
                <IonText className="block text-lg font-bold">Medium: 8-18 kg</IonText>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol>
                <IonText className="block">{t('base.label.total_price')}</IonText>
                <IonText className="block text-lg font-bold">PLN 15.00</IonText>
              </IonCol>
            </IonRow>
          </IonCard>
        }
        <IonRow className="absolute w-full bottom-2 flex items-end">
          <CustomInput className="border-2 border-gray-200 bg-white mx-2 rounded-md p-2 relative flex items-center" placeholder={t('base.placeholder.write_here')}>
          </CustomInput>
          <SendButton className="absolute right-3 block z-40" size="small" >
            <IonIcon icon={paperPlaneOutline} />
          </SendButton>
        </IonRow>
      </IonContent>
      {
        stage > 0 ?
        <IonFooter>
          <IonButton onClick={handleChangeStage} className="block w-full p-2" color='success'>
            { stage === 1 ? t('base.button.edit'):stage === 2 ? t('base.button.write_review') : t('base.button.pay') }
          </IonButton>
        </IonFooter>
        :
        <></>
      }
      <IonAlert
        isOpen={stage===0}
        header="Stay Safe"
        message={'Only accept payments via the Pethomer platform - this ensures transaction security. Accepting payments outside of Pethomer violates the Pethomer community rules and our Terms and Conditions and may result in account termination.'}
        buttons={[
          {
            text: 'OK',
            role: 'cancel',
            handler: () => {
              setStage(1)
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]}        
        inputs={[
          {
            type: 'checkbox',
            label: 'I understand pethomer policies',
            checked: false
          }
        ]}
      ></IonAlert>
    </IonPage>
  )
}

export default Chat