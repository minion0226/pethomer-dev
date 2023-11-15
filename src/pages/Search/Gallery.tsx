import { 
  IonButton,
  IonCard,
  IonCol,
  IonContent, 
  IonHeader, 
  IonIcon, 
  IonImg, 
  IonPage,
  IonRow,
  IonText,
  useIonRouter,
  IonModal,
  IonCardHeader,
  IonCardContent
} from "@ionic/react"
import { chevronBack, chevronForward, closeOutline } from "ionicons/icons"
import { useState } from "react"
import styled from "styled-components"

import gallery1 from '../../assets/imgs/gallery/image1.png'
import gallery2 from '../../assets/imgs/gallery/image2.png'
import gallery3 from '../../assets/imgs/gallery/image3.png'
import gallery4 from '../../assets/imgs/gallery/image4.png'
import gallery5 from '../../assets/imgs/gallery/image5.png'
import gallery6 from '../../assets/imgs/gallery/image6.png'
import gallery7 from '../../assets/imgs/gallery/image7.png'
import { useTranslation } from "react-i18next"

const FilterModal = styled(IonModal)`
  --ion-background-color: transparent;
  & .ion-page {
    display: flex;
    justify-content: center;
    
  }
`

const Gallery: React.FC = () => {
  const router = useIonRouter()
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [selectedOne, setSelectedOne] = useState()

  const handleClick = (image: any) => {
    setSelectedOne(image)
    setOpen(true)
  }

  return(
    <IonPage>
      <IonHeader className="flex items-center">
        <IonButton onClick={()=>router.goBack()} fill="clear" color="dark">
          <IonIcon icon={chevronBack} />
        </IonButton>
        <IonText className="text-2xl">{t('base.label.gallery')}</IonText>
      </IonHeader>
      <IonContent>
        <IonRow className="px-2">
          <IonCol size="12" className="pb-0.5">
            <IonImg onClick={()=>handleClick(gallery2)} src={gallery2} className="active:opacity-70" />
          </IonCol>
          <IonCol size="6" className="pt-0.5 pr-0.5">
            <IonRow className="gap-1">
              <IonImg onClick={()=>handleClick(gallery4)} src={gallery4} className="active:opacity-70" />
              <IonImg onClick={()=>handleClick(gallery5)} src={gallery5} className="active:opacity-70" />
              <IonImg onClick={()=>handleClick(gallery7)} src={gallery7} className="active:opacity-70" />
            </IonRow>
          </IonCol>
          <IonCol size="6" className="pt-0.5 pl-0.5">
            <IonRow className="gap-1">
              <IonImg onClick={()=>handleClick(gallery3)} src={gallery3} className="active:opacity-70" />
              <IonImg onClick={()=>handleClick(gallery6)} src={gallery6} className="active:opacity-70" />
              <IonImg onClick={()=>handleClick(gallery1)} src={gallery1} className="active:opacity-70" />
            </IonRow>
          </IonCol>
        </IonRow>
      </IonContent>
      <FilterModal isOpen={open} onDidDismiss={()=>setOpen(false)} className="bg-transparent">
        <IonIcon onClick={()=>setOpen(false)} className="absolute right-6 top-12 text-white z-10" size="large" icon={closeOutline} />
        <IonCard className="flex flex-col justify-center items-center m-0 w-full h-full bg-transparent">
          <IonRow className="flex flex-row flex-nowrap items-center justify-center">
            <IonIcon className="text-white" icon={chevronBack} size="large" />
            <IonCardContent className="px-1 w-8/12">
              <IonCardHeader className="block w-full pb-1">
                <IonText className="text-white text-lg"><span className="text-green-400">02</span>/01</IonText>
              </IonCardHeader>
              <IonImg className="h-96 object-cover rounded-md overflow-hidden" src={selectedOne} />
            </IonCardContent>
            <IonIcon className="text-white" icon={chevronForward} size="large" />
          </IonRow>
        </IonCard>
      </FilterModal>
    </IonPage>
  )
}

export default Gallery