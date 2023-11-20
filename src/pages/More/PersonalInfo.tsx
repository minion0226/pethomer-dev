import { IonAvatar, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonList, IonPage, IonRow, IonText, useIonRouter } from "@ionic/react"
import { chevronBack, mailOutline, callOutline, giftOutline, pencilOutline } from "ionicons/icons";
import imgAvatar from '../../assets/imgs/avatar.png'
import { useTranslation } from "react-i18next";
import styled from "styled-components"

const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
`

const PersonalInfo : React.FC = () => {
  const{ t } = useTranslation()
  const router = useIonRouter()
  
  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <IonPage>
      { isIOS() ?
        <StatusBar>
          <IonGrid className='responsive mb-6' dir='column'>
            <IonRow className="flex flex-row flex-nowrap items-center gap-2 py-14 px-4 text-white bg-green-600">
              <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
              <IonText className="text-2xl w-full font-semibold">
                {t('morePage.personal_info')}
              </IonText>
              <IonIcon onClick={() => router.push('/edit-info')} icon={pencilOutline} />
            </IonRow>
            <IonRow className='absolute bottom-0 pl-5 flex items-end'>
              <IonAvatar class='-top-3 w-20 h-20 border-4 mr-3 rounded-full border-white flex justify-center items-center'>
                <img src={imgAvatar} />
              </IonAvatar>
              <IonText className='text-lg font-semibold'>
                John Doe
              </IonText>
            </IonRow>
          </IonGrid>
        </StatusBar>
        :
        <IonHeader className="mb-3">
          <IonGrid className='responsive mb-6' dir='column'>
            <IonRow className="flex flex-row flex-nowrap items-center gap-2 py-14 px-4 text-white bg-green-600">
              <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
              <IonText className="text-2xl w-full font-semibold">
                {t('morePage.personal_info')}
              </IonText>
              <IonIcon onClick={() => router.push('/edit-info')} icon={pencilOutline} />
            </IonRow>
            <IonRow className='absolute bottom-0 pl-5 flex items-end'>
              <IonAvatar class='-top-3 w-20 h-20 border-4 mr-3 rounded-full border-white flex justify-center items-center'>
                <img src={imgAvatar} />
              </IonAvatar>
              <IonText className='text-lg font-semibold'>
                John Doe
              </IonText>
            </IonRow>
          </IonGrid>
        </IonHeader>
      }
      <IonContent color='light'>
        <IonList>
          <IonItem className="p-3 border-b-2" lines="none">
            <IonIcon icon={mailOutline} color="success" slot="start" />
            <IonRow className="flex flex-col">
              <IonText className="text-lg">{t('base.label.email')}</IonText>
              <IonText className="text-gray-500">test@test.com</IonText>
            </IonRow>
          </IonItem>
          <IonItem className="p-3 border-b-2" lines="none">
            <IonIcon icon={callOutline} color="success" slot="start" />
            <IonRow className="flex flex-col">
              <IonText className="text-lg">{t('base.label.phone')}</IonText>
              <IonText className="text-gray-500">+4899403922</IonText>
            </IonRow>
          </IonItem>
          <IonItem className="p-3" lines="none">
            <IonIcon icon={giftOutline} color="success" slot="start" />
            <IonRow className="flex flex-col">
              <IonText className="text-lg">{t('base.label.dob')}</IonText>
              <IonText className="text-gray-500">1997.02.26</IonText>
            </IonRow>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default PersonalInfo;