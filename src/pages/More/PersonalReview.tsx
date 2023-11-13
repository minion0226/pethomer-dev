import { IonHeader, IonIcon, IonPage, IonRow, IonText, useIonRouter } from "@ionic/react"
import { chevronBack } from "ionicons/icons";

const PersonalReview : React.FC = () => {
  const router = useIonRouter()
  return (
    <IonPage>
    <IonHeader>
      <IonRow className="flex items-center gap-2">
        <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
        <IonText>
          Personal Review
        </IonText>
      </IonRow>
    </IonHeader>
    </IonPage>
  )
}

export default PersonalReview;