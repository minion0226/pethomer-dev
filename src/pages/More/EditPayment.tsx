import { IonContent, IonInput, IonIcon, IonPage, IonRow, IonText, useIonRouter, IonCol, IonButton } from "@ionic/react"
import { chevronBack, chevronDown } from "ionicons/icons";
import styled from "styled-components"

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const EditPayment : React.FC = () => {
  const router = useIonRouter()
  return (
    <IonPage>
      <IonContent color='light'>
        <IonRow className="flex items-center p-3 gap-2">
          <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
          <IonText className="text-lg font-semibold">Payment Methods</IonText>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">Payment Card Details</IonText>
          <CustomInput className="bg-white rounded-md relative flex items-center" readonly placeholder="Poland">
            <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
          </CustomInput>
        </IonRow>

        <IonRow className="mx-4 text-sm text-gray-400">
          <IonText>I authorise Pethomer to send instructions to the financial institution that issued my card to take payments from my card account in accordance with the terms of my agreement with you.</IonText>
        </IonRow>

        <IonRow className="m-4">
          <IonText className="text-lg font-semibold">Payment methods</IonText>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">Card holder's Name</IonText>
          <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonCol className="pl-0">
            <IonText className="mb-2">Street Address</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
          <IonCol className="pr-0">
            <IonText className="mb-2">Apt # Optional</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonCol className="pl-0">
            <IonText className="mb-2">Postal Code</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
          <IonCol className="pr-0">
            <IonText className="mb-2">City</IonText>
            <CustomInput className="bg-white rounded-md relative flex items-center" readonly placeholder="John Doe">
              <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
            </CustomInput>
          </IonCol>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonCol className="pl-0">
            <IonText className="mb-2">Postal Code</IonText>
            <CustomInput className="bg-white rounded-md flex items-center" readonly placeholder="John Doe"></CustomInput>
          </IonCol>
          <IonCol className="pr-0">
            <IonText className="mb-2">City</IonText>
            <CustomInput className="bg-white rounded-md relative flex items-center" readonly placeholder="John Doe">
              <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
            </CustomInput>
          </IonCol>
        </IonRow>

        <IonRow className="mx-4">
          <IonButton className="block w-full text-white bg-lime-500 rounded-lg" fill="clear">Save Detail</IonButton>
        </IonRow>

      </IonContent>
    </IonPage>
  )
}

export default EditPayment;