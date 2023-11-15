import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRippleEffect, IonRow, IonText, useIonRouter } from "@ionic/react"
import { chevronBack } from "ionicons/icons";
import { useTranslation } from "react-i18next";

const PersonalReview : React.FC = () => {
  const router = useIonRouter()
  const{ t } =useTranslation()
  return (
    <IonPage>
    <IonHeader>
      <IonRow className="flex items-center p-3 gap-2">
        <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
        <IonText className="text-lg font-semibold">
          {t('morePage.personal_review')}
        </IonText>
      </IonRow>
      <IonRow className='flex text-center p-2'>
        <IonCol className='flex-1 py-3 mr-0 ion-activatable ripple-parent bg-amber-400 rounded-s-lg relative text-white'>
          <IonRippleEffect></IonRippleEffect>
          {t('morePage.from_client')}
        </IonCol>
        <IonCol className='flex-1 py-3 ml-0 ion-activatable ripple-parent border rounded-s-none rounded-e-lg'>
          <IonRippleEffect></IonRippleEffect>
          {t('morePage.from_petsitters')}
        </IonCol>
      </IonRow>
    </IonHeader>
    <IonContent color='light'>
      <IonCard>
        <IonCardTitle className="p-2 text-lg">{t('morePage.performance')}</IonCardTitle>
        <IonCardContent className="p-2 h-40 flex justify-center items-center">
          <IonText>Here goes chart graph</IonText>
        </IonCardContent>
      </IonCard>
    </IonContent>
    </IonPage>
  )
}

export default PersonalReview;