import { IonAvatar, IonButton, IonCol, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonRow, IonText, IonTextarea, useIonRouter } from "@ionic/react"
import { chevronBack, star } from "ionicons/icons"
import avatar from '../../assets/imgs/avatar.png'
import review from '../../assets/imgs/review.png'
import { useTranslation } from "react-i18next"
import styled from "styled-components"

const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`
const Review : React.FC = () => {
  const { t } = useTranslation()
  const router = useIonRouter()

  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <IonPage>
      {isIOS() ?
        <StatusBar>
          <IonRow className="p-3 flex items-center gap-2">
            <IonIcon onClick={()=>{ router.goBack() }} icon={chevronBack} />
            <IonText>{t('base.label.review_rating')}</IonText>
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
        </StatusBar>
        :
        <IonHeader>
          <IonRow className="p-3 flex items-center gap-2">
            <IonIcon onClick={()=>{ router.goBack() }} icon={chevronBack} />
            <IonText>{t('base.label.review_rating')}</IonText>
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
      }
      <IonContent color='light'>
        <IonCol className="flex flex-col h-full">
          <IonRow className="py-3 flex justify-center">
            <IonImg className="w-3/5" src={review} />
          </IonRow>
          <IonRow className="flex flex-col mx-3">
            <IonText className="text-lg px-2">
              {t('base.label.rate_what')}
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
            <IonText className="text-lg">{t('base.label.write_review')}</IonText>
            <IonTextarea className="bg-white rounded-md p-3" placeholder={t('base.placeholder.write_here')} rows={5}>
            </IonTextarea>
          </IonRow>
          <IonRow>
            <IonButton onClick={() => router.push('/tab/booking')} className="block w-full m-3">{t('base.button.submit')}</IonButton>
          </IonRow>
        </IonCol>
      </IonContent>
    </IonPage>
  )
}

export default Review;