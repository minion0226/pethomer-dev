import { IonButton, IonCheckbox, IonCol, IonContent, IonDatetime, IonFooter, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonPage, IonRow, IonText, IonTextarea, useIonRouter } from "@ionic/react"
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
const StatusBar = styled(IonHeader)`
  padding-top: constant(safe-area-inset-top); /* iOS 11.2+ */
  padding-top: env(safe-area-inset-top); /* iOS 11.2+ */
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
import { useTranslation } from "react-i18next"

const SitterWizard : React.FC = () => {
  const router = useIonRouter()
  const { t } = useTranslation()
  const [step, setStep] = useState(0)
  const [acctype, setAcctype] = useState(false)
  const [desc, setDesc] = useState(true)

  const isIOS = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test(userAgent);
  }

  return (
    <IonPage>
      {isIOS() ?
        <StatusBar>
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
        </StatusBar>
        :
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
      }
      <IonContent>
        <IonRow className="h-full">
          {
            step === 0 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_description')} </IonText>
              <IonRow className="mb-4">
                <IonText>{t('sitterWizard.tell_more')}</IonText>
                <IonTextarea className="border-2 rounded-md px-3" placeholder={t('base.placeholder.write_here')} rows={5} />
              </IonRow>
              <IonRow>
                <IonText>{t('sitterWizard.with_pets')}</IonText>
                <IonTextarea className="border-2 rounded-md px-3" placeholder={t('base.placeholder.write_here')} rows={5} />
              </IonRow>
            </IonCol>
          }
          {
            step === 1 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_services')}</IonText>
              <IonRow className="bg-gray-200 rounded-md flex flex-col justify-start overflow-hidden">
                <IonItem color='light' lines="none">
                  <IonCheckbox value={'boarding'} slot="start" />
                  <IonLabel>{t('homePage.boarding')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'dogwalking'} slot="start" />
                  <IonLabel>{t('homePage.dogwalking')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'dropinvisit'} slot="start" />
                  <IonLabel>{t('homePage.dropinvisits')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'dogdaycare'} slot="start" />
                  <IonLabel>{t('homePage.dogdaycare')}</IonLabel>
                </IonItem>
              </IonRow>
            </IonCol>
          }
          {
            step === 2 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_preference')}</IonText>
              <IonRow className="bg-gray-200 rounded-md flex flex-col justify-start overflow-hidden">
                <IonItem color='light' lines="none">
                  <IonCheckbox value={'small'} slot="start" />
                  <IonLabel>{t('base.label.weight_small')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'medium'} slot="start" />
                  <IonLabel>{t('base.label.weight_medium')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'large'} slot="start" />
                  <IonLabel>{t('base.label.weight_large')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'giant'} slot="start" />
                  <IonLabel>{t('base.label.weight_giant')}</IonLabel>
                </IonItem>
              </IonRow>
            </IonCol>
          }
          {
            step === 3 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_sitter')}</IonText>
              <IonRow className="bg-gray-200 rounded-md flex flex-col justify-start overflow-hidden">
                <IonItem color='light' lines="none">
                  <IonCheckbox value={'smoking'} slot="start" />
                  <IonLabel>{t('sitterWizard.smoking')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'single'} slot="start" />
                  <IonLabel>{t('sitterWizard.single')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'garden'} slot="start" />
                  <IonLabel>{t('sitterWizard.garden')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'nochildren'} slot="start" />
                  <IonLabel>{t('sitterWizard.no-children')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'notherpets'} slot="start" />
                  <IonLabel>{t('sitterWizard.no-pets')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'nocats'} slot="start" />
                  <IonLabel>{t('sitterWizard.no-cats')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'owndog'} slot="start" />
                  <IonLabel>{t('sitterWizard.own-dog')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'couch'} slot="start" />
                  <IonLabel>{t('sitterWizard.couch')}</IonLabel>
                </IonItem>
              </IonRow>
            </IonCol>
          }
          {
            step === 4 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_skills')}</IonText>
              <IonRow className="bg-gray-200 rounded-md flex flex-col justify-start overflow-hidden">
                <IonItem color='light' lines="none">
                  <IonCheckbox value={'smoking'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_carrying')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'single'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_active_dog')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'garden'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_senior_dog')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'nochildren'} slot="start" />
                  <IonLabel>{t("sitterWizard.skill_puppies")}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'notherpets'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_first_aid')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'nocats'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_no_cats')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'owndog'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_medic')}</IonLabel>
                </IonItem>

                <IonItem color='light' lines="none">
                  <IonCheckbox value={'couch'} slot="start" />
                  <IonLabel>{t('sitterWizard.skill_inject')}</IonLabel>
                </IonItem>

              </IonRow>
            </IonCol>
          }
          {
            step === 5 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_rules')}</IonText>
              <IonTextarea className="border-2 rounded-md px-3" placeholder={t('sitterWizard.price')} rows={5} />
            </IonCol>
          }
          {
            step === 6 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('base.label.location')}</IonText>
              <IonText className="mb-2 block w-full">{t('base.label.address')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('base.label.address')} />
              <IonText className="mb-2 block w-full">{t('base.label.apartment')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('base.label.apartment')} />
            </IonCol>
          }
          {
            step === 7 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_pricing')}</IonText>
              <IonText className="mb-2 block w-full">{t('homePage.boarding')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('sitterWizard.price')} />
              <IonText className="mb-2 block w-full">{t('homePage.dogwalking')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('sitterWizard.price')} />
              <IonText className="mb-2 block w-full">{t('homePage.dropinvisits')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('sitterWizard.price')} />
              <IonText className="mb-2 block w-full">{t('homePage.dogdaycare')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('sitterWizard.price')} />
              <IonText className="mb-2 block w-full">{t('homePage.mulitplier')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('sitterWizard.price')} />
            </IonCol>
          }
          {
            step === 8 && <IonCol className="p-4">
              <IonText className="text-2xl font-semibold text-green-500 mb-4 block w-full">{t('sitterWizard.question_avaliability')}</IonText>
              <IonDatetime presentation="date"></IonDatetime>
            </IonCol>
          }
          {
            step === 9 && <IonCol className="p-4">
              {
                desc && <IonRow className="flex flex-row justify-between my-2">
                  <IonText className="text-2xl font-bold">{t('sitterWizard.two_more')}</IonText>
                  <IonIcon onClick={() => setDesc(false)} icon={closeOutline} size="large" className="active:scale-95" />
                </IonRow>
              }
              {
                desc && <IonRow className="flex flex-col p-3 bg-gray-50 rounded-lg">
                  <IonText className="text-green-600 font-bold text-lg">1. {t('sitterWizard.identity')}</IonText>
                  <IonText className="text-sm">{t('sitterWizard.identity_desc')} </IonText>
                  <div className="p-2 rounded-md bg-green-50">
                    <IonRow>
                      <IonCol>
                        <IonText>{t('sitterWizard.acc_no')}.</IonText>
                        <IonText>14 1870 1045 2078 1070 7913 0005</IonText>
                      </IonCol>
                      <IonButton fill="clear">
                        <IonIcon icon={copyOutline} />
                      </IonButton>
                    </IonRow>
                    <IonRow>
                      <IonCol>
                        <IonText>{t('base.label.name')}</IonText>
                        <IonText>14 1870 1045 2078 1070 7913 0005</IonText>
                      </IonCol>
                      <IonButton fill="clear">
                        <IonIcon icon={copyOutline} />
                      </IonButton>
                    </IonRow>
                  </div>
                  <IonText className="text-green-600 font-bold text-lg">{t('sitterWizard.withdraw')}</IonText>
                  <IonText className="text-sm">{t('sitterWizard.withdraw_desc')}</IonText>
                </IonRow>
              }
              
              
              <IonText className="text-2xl font-semibold mb-4 block w-full">{t('sitterWizard.acc_type')}</IonText>
              <IonText onClick={()=>setAcctype(true)} className={"p-4 text-lg flex justify-center items-center border-2 rounded-lg mb-2 " + (acctype ? 'border-green-400 shadow-md shadow-green-300': '')}>
                {t('sitterWizard.individual')}
              </IonText>
              <IonText onClick={()=>setAcctype(false)} className={"p-4 text-lg flex justify-center items-center border-2 rounded-lg mb-2 " + (!acctype ? 'border-green-400 shadow-md shadow-green-300': '')}>
                {t('sitterWizard.company')}
              </IonText>
              <IonText className="mb-2 block w-full">{t('base.label.country')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder={t('base.label.country')} />
              <IonText className="mb-2 block w-full">{t('sitterWizard.bank_number')}</IonText>
              <CustomInput className="border-2 rounded-md px-3 mb-3" placeholder="0000 0000 0000 0000 0000 00" />

              <IonCol className="flex flex-col p-3 rounded-lg border-2 border-yellow-500 bg-yellow-50">
                <IonRow>
                  <IonCol>
                    <IonText>{t('sitterWizard.stripe')}</IonText>
                  </IonCol>
                  <IonCol>
                    <IonImg src={stripe} />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonText>{t('sitterWizard.stripe_desc')}</IonText>
                </IonRow>
                <IonButton className="block w-full" color='success'>{t('base.button.verified')}</IonButton>
              </IonCol>

              <IonText className="text-center text-sm block w-full">{t('sitterWizard.saving')}</IonText>
              <IonText className="text-center text-md underline block w-full mb-4 active:scale-95">{t('sitterWizard.trust')}</IonText>
              <IonButton className="block w-full" color='success'>{t('base.button.save')}</IonButton>
            </IonCol>
          }
        </IonRow>
      </IonContent>
      {
        step < 9 && <IonFooter className={isIOS()?'pb-4':''}>
        <IonRow className="w-full flex px-2 gap-2">
          {step!==0 && <IonButton onClick={()=>setStep(step - 1)} className="flex-1" color='success' fill="outline">{t('base.button.previous')}</IonButton>}
          <IonButton onClick={()=>setStep(step + 1)} className="flex-1" color='success'>Next</IonButton>
        </IonRow>
      </IonFooter>
      }
      
    </IonPage>
  )
}

export default SitterWizard