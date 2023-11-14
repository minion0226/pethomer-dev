import { IonCard, IonCardContent, IonCardTitle, IonCol, IonContent, IonHeader, IonIcon, IonPage, IonRippleEffect, IonRow, IonText, useIonRouter } from "@ionic/react"
import { chevronBack } from "ionicons/icons";

const PersonalReview : React.FC = () => {
  const router = useIonRouter()
  return (
    <IonPage>
    <IonHeader>
      <IonRow className="flex items-center p-3 gap-2">
        <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
        <IonText className="text-lg font-semibold">
          Personal Review
        </IonText>
      </IonRow>
      <IonRow className='flex text-center p-2'>
        <IonCol className='flex-1 py-3 mr-0 ion-activatable ripple-parent bg-amber-400 rounded-s-lg relative text-white'>
          <IonRippleEffect></IonRippleEffect>
          From Client
        </IonCol>
        <IonCol className='flex-1 py-3 ml-0 ion-activatable ripple-parent border rounded-s-none rounded-e-lg'>
          <IonRippleEffect></IonRippleEffect>
          From Petsitters
        </IonCol>
      </IonRow>
    </IonHeader>
    <IonContent color='light'>
      <IonCard>
        <IonCardTitle className="p-2 text-lg">Performance Metrics</IonCardTitle>
        <IonCardContent className="p-2 h-40 flex justify-center items-center">
          <IonText>Here goes chart graph</IonText>
        </IonCardContent>
      </IonCard>
    </IonContent>
    </IonPage>
  )
}

export default PersonalReview;