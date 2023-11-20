import { IonContent, IonInput, IonIcon, IonPage, IonRow, IonText, useIonRouter, IonCol, IonButton, IonHeader } from "@ionic/react"
import { chevronBack, chevronDown } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import styled from "styled-components"

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`
const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`

const EditPayment : React.FC = () => {
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
        <IonRow className="flex items-center p-3 gap-2">
          <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
          <IonText className="text-lg font-semibold">{t('morePage.payment')}</IonText>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">Payment Card Details</IonText>
          <CustomInput className="bg-white rounded-md relative flex items-center" readonly placeholder="Poland">
            <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
          </CustomInput>
        </IonRow>

        <IonRow className="mx-4 text-sm text-gray-400">
          <IonText>{t('base.message.payment')}</IonText>
        </IonRow>

        <IonRow className="m-4">
          <IonText className="text-lg font-semibold">{t('morePage.payment')}</IonText>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">{t('base.label.holder_name')}</IonText>
          <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonCol className="pl-0">
            <IonText className="mb-2">{t('base.label.street')}</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
          <IonCol className="pr-0">
            <IonText className="mb-2">{t('base.label.apartment')}</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonCol className="pl-0">
            <IonText className="mb-2">{t('base.label.code')}</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
          <IonCol className="pr-0">
            <IonText className="mb-2">{t('base.label.city')}</IonText>
            <CustomInput className="bg-white rounded-md relative flex items-center" readonly placeholder="John Doe">
              <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
            </CustomInput>
          </IonCol>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonCol className="pl-0">
            <IonText className="mb-2">{t('base.label.state')}</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
          <IonCol className="pr-0">
            <IonText className="mb-2">{t('base.label.country')}</IonText>
            <CustomInput className="bg-white rounded-md relative flex items-center" readonly placeholder="John Doe">
              <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
            </CustomInput>
          </IonCol>
        </IonRow>

        <IonRow className="mx-4">
          <IonButton className="block w-full text-white bg-lime-500 rounded-lg" fill="clear">{t('base.button.save_detail')}</IonButton>
        </IonRow>

      </IonContent>
    </IonPage>
  )
}

export default EditPayment;