import { IonContent, IonInput, IonIcon, IonPage, IonRow, IonText, useIonRouter, IonButton } from "@ionic/react"
import { chevronBack, chevronDown } from "ionicons/icons";
import styled from "styled-components"

const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`


const EditPassword : React.FC = () => {
  const router = useIonRouter()
  return (
    <IonPage>
      <IonContent color='light'>
        <IonRow className="flex items-center p-3 gap-2">
          <IonIcon onClick={()=> router.goBack()} icon={chevronBack} />
          <IonText className="text-lg font-semibold">Password Settings</IonText>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">New Password</IonText>
          <CustomInput className="bg-white rounded-md relative flex items-center" placeholder="Password">
            <IonIcon className="absolute block right-3 text-gray-400 z-10" icon={chevronDown} />
          </CustomInput>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="text-lg my-3">Confirm your changes</IonText>
          <IonText className="text-sm">To change your password, please enter your current password.Forgot your password or don't have one?</IonText>
          <IonButton size="small" fill="clear">Send reset instructions.</IonButton>
        </IonRow>

        <IonRow className="mx-4 mb-2">
          <IonText className="mb-2">Current Password</IonText>
          <CustomInput className="bg-white rounded-md flex items-center" placeholder="Enter your current Password..."></CustomInput>
        </IonRow>
      </IonContent>
    </IonPage>
  )
}

export default EditPassword;