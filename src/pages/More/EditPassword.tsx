import { IonContent, IonInput, IonIcon, IonPage, IonRow, IonText, useIonRouter, IonButton } from "@ionic/react"
import { chevronBack, chevronDown } from "ionicons/icons";
import { useTranslation } from "react-i18next";
import styled from "styled-components"

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`


const EditPassword : React.FC = () => {
  const router = useIonRouter()
  const { t } = useTranslation()
  return (
    <IonPage>
      <IonContent color='light'>
        <IonRow className="flex items-center p-3 gap-2">
          <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
          <IonText className="text-lg font-semibold">Password Settings</IonText>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">{t('base.label.newpass')}</IonText>
          <CustomInput className="bg-white rounded-md relative flex items-center" placeholder={t('base.placeholder.newpass')}>
            <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
          </CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="text-lg my-3">{t('base.label.confirm_change')}</IonText>
          <IonText className="text-sm">{t('base.message.confirm_change')}</IonText>
          <IonButton size="small" fill="clear">{t('base.message.confirm_instruction')}</IonButton>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">{t('base.label.curpass')}</IonText>
          <CustomInput className="bg-white rounded-md flex items-center" placeholder={t('base.placeholder.curpass')}></CustomInput>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default EditPassword;