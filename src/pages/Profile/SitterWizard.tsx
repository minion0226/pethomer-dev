import { IonButton, IonCheckbox, IonCol, IonContent, IonDatetime, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonPage, IonRow, IonText, IonTextarea, useIonRouter } from "@ionic/react"
import { chevronBack, closeOutline, copyOutline } from "ionicons/icons"
import { useState } from "react"
import styled from "styled-components"

const Dash = styled.div`
  height: 5px;
  flex: 1;
`
const CustomInput = styled(IonInput)`
  --padding-start: 10px;
`

const titles = [
  'Description',
  'Services',
  'Preference',
  'Sitter House',
  'Skills',
  'Rules',
  'Location',
  'Pricing',
  'Availabilty',
  'Payout Details'
]

import stripe from '../../assets/imgs/stripe.png'

const SitterWizard : React.FC = () => {
  const router = useIonRouter()
  const [step, setStep] = useState(0)
  const [acctype, setAcctype] = useState(false)
  const [desc, setDesc] = useState(true)

  return (
    <IonPage>
      <IonHeader>
        <IonRow className="p-4 flex flex-row items-center gap-2">
          <IonIcon onClick={() => router.goBack()} icon={chevronBack} />
          <IonText className="text-lg font-bold">{titles[step]}</IonText>
        </IonRow>
        <IonRow className="flex flex-row gap-1 bg-gradient-to-r from-green-200 via-60% via-transparent to-transparent">
          {
            titles.map((title: string, index: number) => {
              return <Dash key={index} className={step>=index? 'bg-green-400': ''} />
            })
          }
        </IonRow>
      </IonHeader>
      <IonContent>
        <IonRow className="h-full">
          {
            step === 0 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">Fill in this simple form :-) </IonText>
              <IonRow className="mb-4">
                <IonText>Tell your clients more about you</IonText>
                <IonTextarea className="border-2 rounded-md px-3" placeholder="write here..." rows={5} />
              </IonRow>
              <IonRow>
                <IonText>My experience with pets</IonText>
                <IonTextarea className="border-2 rounded-md px-3" placeholder="write here..." rows={5} />
              </IonRow>
            </IonCol>
          }
          {
            step === 1 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">What services do you provide? </IonText>
              <IonRow className="bg-gray-200 rounded-md p-4 flex flex-col gap-3">
                <IonCheckbox value={'boarding'} labelPlacement="end" justify="start">boarding</IonCheckbox>
                <IonCheckbox value={'dogwalking'} labelPlacement="end" justify="start">dogwalking</IonCheckbox>
                <IonCheckbox value={'dropinvisit'} labelPlacement="end" justify="start">dropinvisit</IonCheckbox>
                <IonCheckbox value={'dogdaycare'} labelPlacement="end" justify="start">dogdaycare</IonCheckbox>
              </IonRow>
            </IonCol>
          }
          {
            step === 2 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">Sizes of pets you want to take care</IonText>
              <IonRow className="bg-gray-200 rounded-md p-4 flex flex-col gap-3">
                <IonCheckbox value={'small'} labelPlacement="end" justify="start">small</IonCheckbox>
                <IonCheckbox value={'medium'} labelPlacement="end" justify="start">medium</IonCheckbox>
                <IonCheckbox value={'large'} labelPlacement="end" justify="start">large</IonCheckbox>
                <IonCheckbox value={'giant'} labelPlacement="end" justify="start">giant</IonCheckbox>
              </IonRow>
            </IonCol>
          }
          {
            step === 3 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">Tell Us more about your place, where you'll be caring of your clients pets.</IonText>
              <IonRow className="bg-gray-200 rounded-md p-4 flex flex-col gap-3">
                <IonCheckbox value={'smoking'} labelPlacement="end" justify="start">Smoking free home</IonCheckbox>
                <IonCheckbox value={'single'} labelPlacement="end" justify="start">Single-family house</IonCheckbox>
                <IonCheckbox value={'garden'} labelPlacement="end" justify="start">Garden</IonCheckbox>
                <IonCheckbox value={'nochildren'} labelPlacement="end" justify="start">No children at home</IonCheckbox>
                <IonCheckbox value={'notherpets'} labelPlacement="end" justify="start">No other pets at home</IonCheckbox>
                <IonCheckbox value={'nocats'} labelPlacement="end" justify="start">No cats at home</IonCheckbox>
                <IonCheckbox value={'owndog'} labelPlacement="end" justify="start">The sitter has his own dog</IonCheckbox>
                <IonCheckbox value={'couch'} labelPlacement="end" justify="start">Pets allowed on the couch</IonCheckbox>
              </IonRow>
            </IonCol>
          }
          {
            step === 4 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">What are you skills in pet care?</IonText>
              <IonRow className="bg-gray-200 rounded-md p-4 flex flex-col gap-3">
                <IonCheckbox value={'smoking'} labelPlacement="end" justify="start">Over 3 years of experience in pet carring</IonCheckbox>
                <IonCheckbox value={'single'} labelPlacement="end" justify="start">Care for active dogs</IonCheckbox>
                <IonCheckbox value={'garden'} labelPlacement="end" justify="start">Care for senior dogs</IonCheckbox>
                <IonCheckbox value={'nochildren'} labelPlacement="end" justify="start">Care for puppies</IonCheckbox>
                <IonCheckbox value={'notherpets'} labelPlacement="end" justify="start">Skilled in first aid</IonCheckbox>
                <IonCheckbox value={'nocats'} labelPlacement="end" justify="start">No cats at home</IonCheckbox>
                <IonCheckbox value={'owndog'} labelPlacement="end" justify="start">Knows how to administer medications</IonCheckbox>
                <IonCheckbox value={'couch'} labelPlacement="end" justify="start">knows how to make injections</IonCheckbox>
              </IonRow>
            </IonCol>
          }
          {
            step === 5 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">Tell your customers what are the rules of your services.</IonText>
              <IonTextarea className="border-2 rounded-md px-3" placeholder="write here..." rows={5} />
            </IonCol>
          }
          {
            step === 6 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">Location</IonText>
              <IonText className="mb-2 block w-full">Address</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Address" />
              <IonText className="mb-2 block w-full">Apt, suite, building#</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Apt, suite, building#" />
            </IonCol>
          }
          {
            step === 7 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">How much do your services cost?</IonText>
              <IonText className="mb-2 block w-full">Boarding</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Choose your price" />
              <IonText className="mb-2 block w-full">Dog Walking</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Choose your price" />
              <IonText className="mb-2 block w-full">Drop in Visits</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Choose your price" />
              <IonText className="mb-2 block w-full">Dog Day Care</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Choose your price" />
              <IonText className="mb-2 block w-full">Mnoznik Ceny</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Choose your price" />
            </IonCol>
          }
          {
            step === 8 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">Let us know when you are available?</IonText>
              <IonDatetime presentation="date"></IonDatetime>
            </IonCol>
          }
          {
            step === 9 && <IonCol className="p-4">
              {
                desc && <IonRow className="flex flex-row justify-between my-2">
                  <IonText className="text-2xl font-bold">Two more thing</IonText>
                  <IonIcon onClick={() => setDesc(false)} icon={closeOutline} size="large" className="active:scale-95" />
                </IonRow>
              }
              {
                desc && <IonRow className="flex flex-col p-3 bg-gray-50 rounded-lg">
                  <IonText className="text-green-600 font-bold text-lg">1. IDENTITY VERIFICATION</IonText>
                  <IonText className="text-sm">Make a transfer of PLN 0.01 from your account to our account: </IonText>
                  <div className="p-2 rounded-md bg-green-50">
                    <IonRow>
                      <IonCol>
                        <IonText>Account no.</IonText>
                        <IonText>14 1870 1045 2078 1070 7913 0005</IonText>
                      </IonCol>
                      <IonButton fill="clear">
                        <IonIcon icon={copyOutline} />
                      </IonButton>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonText>Account no.</IonText>
                        <IonText>14 1870 1045 2078 1070 7913 0005</IonText>
                      </IonCol>
                      <IonButton fill="clear">
                        <IonIcon icon={copyOutline} />
                      </IonButton>
                    </IonRow>
                  </div>
                  <IonText className="text-green-600 font-bold text-lg">2. WITHDRAWAL ACCOUNT: </IonText>
                  <IonText className="text-sm">Now we will connect your profile to the payment platform which will conduct a short verification. Fill in the details of your personal account below. You will be able to edit it in the "Account Settings" -&gt; "Your Payouts" tab.</IonText>
                </IonRow>
              }
              
              
              <IonText className="text-2xl font-semibold mb-4 block w-full">Account Type</IonText>
              <IonText onClick={()=>setAcctype(true)} className={"p-4 text-lg flex justify-center items-center border-2 rounded-lg mb-2 " + (acctype ? 'border-green-400 shadow-md shadow-green-300': '')}>
                I'm a Individual
              </IonText>
              <IonText onClick={()=>setAcctype(false)} className={"p-4 text-lg flex justify-center items-center border-2 rounded-lg mb-2 " + (!acctype ? 'border-green-400 shadow-md shadow-green-300': '')}>
                I represent a company
              </IonText>
              <IonText className="mb-2 block w-full">Country</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="Address" />
              <IonText className="mb-2 block w-full">Bank account Number</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="0000 0000 0000 0000 0000 00" />

              <IonCol className="flex flex-col p-3 rounded-lg border-2 border-yellow-500 bg-yellow-50">
                <IonRow>
                  <IonCol>
                    <IonText>Stripe needs more information</IonText>
                  </IonCol>
                  <IonCol>
                    <IonImg src={stripe} />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonText>In order for you receive payments you need to add few more details to your stripe account to verify your account</IonText>
                </IonRow>
                <IonButton className="block w-full" color='success'>Get Verified</IonButton>
              </IonCol>

              <IonText className="text-center text-sm block w-full">By saving details, you agree to the</IonText>
              <IonText className="text-center text-md underline block w-full mb-4 active:scale-95">Stripe Connected Account Agreement</IonText>
              <IonButton className="block w-full" color='success'>Save</IonButton>
            </IonCol>
          }
        </IonRow>
      </IonContent>
      {
        step < 9 && <IonFooter>
        <IonRow className="w-full flex px-2 gap-2">
          {step!==0 && <IonButton onClick={()=>setStep(step - 1)} className="flex-1" color='success' fill="outline">Previous</IonButton>}
          <IonButton onClick={()=>setStep(step + 1)} className="flex-1" color='success'>Next</IonButton>
        </IonRow>
      </IonFooter>
      }
      
    </IonPage>
  )
}

export default SitterWizard