import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTextarea, useIonRouter } from "@ionic/react"
import { chevronBack, star } from "ionicons/icons"
import avatar from '../../assets/imgs/avatar.png'
import review from '../../assets/imgs/review.png'

const Review : React.FC = () => {
  const router = useIonRouter()

  return (
    <IonPage>
      <IonHeader>
        <IonRow className="p-3 flex items-center gap-2">
          <IonIcon onClick={()=>{ router.goBack() }} icon={chevronBack} />
          <IonText>Review & Rating</IonText>
        </IonRow>
        <IonRow className="p-2 flex gap-2 items-center">
          <IonAvatar>
            <IonImg src={avatar} />
          </IonAvatar>
          <IonCol>
            <IonText className="block text-lg font-semibold">Jenny Wilson</IonText>
            <IonText className="text-gray-400">Enquiry - 19 oct 2023</IonText>
          </IonCol>
        </IonRow>
      </IonHeader>
      <IonContent color='light'>
        <IonCol className="flex flex-col h-full">
          <IonRow className="py-3 flex justify-center">
            <IonImg className="w-3/5" src={review} />
          </IonRow>
          <IonRow className="flex flex-col mx-3">
            <IonText className="text-lg px-2">
              How much do you rate them?
            </IonText>
            <IonRow className="flex justify-center gap-3 p-6 rounded-md bg-white w-full">
              <IonIcon className="text-yellow-500" icon={star} size="large" />
              <IonIcon className="text-gray-300" icon={star} size="large" />
              <IonIcon className="text-gray-300" icon={star} size="large" />
              <IonIcon className="text-gray-300" icon={star} size="large" />
              <IonIcon className="text-gray-300" icon={star} size="large" />
            </IonRow>
          </IonRow>
          <IonRow className="flex flex-col mx-3">
            <IonText className="text-lg">Write your review</IonText>
            <IonTextarea className="bg-white rounded-md p-3" placeholder="Write here..." rows={5}>
            </IonTextarea>
          </IonRow>
          <IonRow>
            <IonButton onClick={() => router.push('/tab/booking')} className="block w-full m-3">Submit</IonButton>
          </IonRow>
        </IonCol>
      </IonContent>
    </IonPage>
  )
}

export default Review;