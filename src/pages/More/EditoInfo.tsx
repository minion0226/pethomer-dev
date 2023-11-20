import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonRow, IonText, useIonRouter } from "@ionic/react"
import { calendarOutline, chevronBack } from "ionicons/icons"
import styled from "styled-components"

import avatar from '../../assets/imgs/avatar.png'
import { useTranslation } from "react-i18next"

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`
const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`

const EditInfo : React.FC = () => {
  const router = useIonRouter()
  const { t } = useTranslation()
  
  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <IonPage>
      { isIOS() && <StatusBar /> }

      <IonContent color='light'>
        <IonRow className="flex items-center gap-2 p-4">
          <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
          <IonText className="text-lg">{t('morePage.edit_profile')}</IonText>
        </IonRow>
        <IonRow className="flex justify-center my-4">
          <IonAvatar className="border-4 border-white w-28 h-28">
            <IonImg src={avatar} />
          </IonAvatar>
        </IonRow>

        <IonRow className="mx-4 mb-3">
          <IonText className="mb-2">{t('base.label.name')}</IonText>
          <CustomInput className="bg-white rounded-md" placeholder="John Doe"></CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-3">
          <IonText className="mb-2">{t('base.label.email')}</IonText>
          <CustomInput className="bg-white rounded-md" placeholder="john.doe@gmail.com"></CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-3">
          <IonText className="block w-full mb-2">{t('base.label.phone')}</IonText>
          <IonRow className="flex-nowrap gap-2 w-full">
            <IonInput className="bg-white rounded-md w-16 text-center" placeholder="+48"></IonInput>
            <CustomInput className="bg-white rounded-md flex-shrink" placeholder="293948282"></CustomInput>
          </IonRow>
        </IonRow>
        
        <IonRow className="mx-4 mb-3">
          <IonText className='block w-full mx-2'>{t('base.label.dob')}</IonText>
          <IonCol className='relative flex items-center px-0'>
            <CustomInput className='bg-white rounded-md' readonly placeholder='Select End Date' />
            <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
          </IonCol>
        </IonRow>

        <IonRow className="mx-4">
          <IonButton className="block w-full text-white bg-lime-500 rounded-lg" fill="clear">{t('base.button.save')}</IonButton>
        </IonRow>

      </IonContent>
    </IonPage>
  )
}

export default EditInfo;