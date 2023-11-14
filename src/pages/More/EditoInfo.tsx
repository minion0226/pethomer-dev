import { IonAvatar, IonButton, IonCol, IonContent, IonIcon, IonImg, IonInput, IonPage, IonRow, IonText, useIonRouter } from "@ionic/react"
import { calendarOutline, chevronBack } from "ionicons/icons"
import styled from "styled-components"

import avatar from '../../assets/imgs/avatar.png'

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const EditInfo : React.FC = () => {
  const router = useIonRouter()
  return (
    <IonPage>
      <IonContent color='light'>
        <IonRow className="flex items-center gap-2 p-4">
          <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
          <IonText className="text-lg">Edit Profile</IonText>
        </IonRow>
        <IonRow className="flex justify-center my-4">
          <IonAvatar className="border-4 border-white w-28 h-28">
            <IonImg src={avatar} />
          </IonAvatar>
        </IonRow>

        <IonRow className="mx-4 mb-3">
          <IonText className="mb-2">Name</IonText>
          <CustomInput className="bg-white rounded-md" placeholder="John Doe"></CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-3">
          <IonText className="mb-2">Email Address</IonText>
          <CustomInput className="bg-white rounded-md" placeholder="john.doe@gmail.com"></CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-3">
          <IonText className="block w-full mb-2">Mobile Number</IonText>
          <IonRow className="flex-nowrap gap-2 w-full">
            <IonInput className="bg-white rounded-md w-16 text-center" placeholder="+48"></IonInput>
            <CustomInput className="bg-white rounded-md flex-shrink" placeholder="293948282"></CustomInput>
          </IonRow>
        </IonRow>
        
        <IonRow className="mx-4 mb-3">
          <IonText className='block w-full mx-2'>Date of Birth</IonText>
          <IonCol className='relative flex items-center px-0'>
            <CustomInput className='bg-white rounded-md' readonly placeholder='Select End Date' />
            <IonIcon className='absolute text-gray-400 right-3 z-10' icon={calendarOutline} />
          </IonCol>
        </IonRow>

        <IonRow className="mx-4">
          <IonButton className="block w-full text-white bg-lime-500 rounded-lg" fill="clear">Save</IonButton>
        </IonRow>

      </IonContent>
    </IonPage>
  )
}

export default EditInfo;