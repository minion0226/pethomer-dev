import { 
  IonPage, 
  IonImg, 
  IonRow,
  IonButton,
  IonCol,
  IonContent,
  IonText
} from '@ionic/react'
import styled from 'styled-components'
import { useState } from 'react'
import { useIonRouter } from '@ionic/react'

import AppInput from '../components/TextInput'
import AppPhoneInput from '../components/PhoneInput'

import LeftArrow from '../assets/imgs/VectorLeft.svg' 
import RightArrow from '../assets/imgs/VectorRight.svg' 
import Facebook from '../assets/imgs/Facebook.svg'
import Google from '../assets/imgs/Google.svg'
import { t } from 'i18next'

const SignupBtn = styled(IonButton)`

  border: solid 1px lightgray;
  border-radius: 10px 0 0 10px;
  margin-right: 0px;
  color: black;

  &.active {
    border: 1px solid #4EB848;
    background: #4EB848;
    color: white;
  }
`

const SigninBtn = styled(IonButton)`

  border: solid 1px lightgray;
  border-radius: 0 10px 10px 0;
  margin-left: 0px;
  color: black;

  &.active {
    border: 1px solid #4EB848;
    background: #4EB848;
    color: white;
  }
`
const Register: React.FC = () => {
  const router = useIonRouter()
  const [tab, setTab] = useState(false)
  const [email, setEmail] = useState('')
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [dob, setDob] = useState('')

  const handleSignup = () => {
    if(router.canGoBack())
      router.goBack()
    else
      router.push('/login')
  }
  return (
    <IonPage>
      <IonContent>
        <IonCol className='flex flex-col justify-center px-3'>
          <IonRow className='my-1'>
            <SignupBtn className='flex-1 active' fill='clear'>{t('base.button.signup')}</SignupBtn>
            <SigninBtn className='flex-1' onClick={handleSignup} fill='clear'>{t('base.button.login')}</SigninBtn>
          </IonRow>
          <AppInput label={t('base.label.email')} type='email' value={email} onChange={setEmail} />
          <AppInput label={t('base.label.firstname')} value={first} onChange={setFirst} />
          <AppInput label={t('base.label.lastname')} value={last} onChange={setLast} />
          <AppInput label={t('base.label.dob')} value={dob} onChange={setDob} />
          <AppPhoneInput label={t('base.label.phone')} value={dob} onChange={setDob} />
          <AppInput label={t('base.label.password')} type='password' value={dob} onChange={setDob} />
          <IonRow className='mb-2'>
            <IonCol class='text-center'>
              <IonText class='text-xs text-gray-400'>{t('base.label.terms').split('_')[0]} <span className='text-black underline active:opacity-60'>{t('base.label.terms').split('_')[1]}</span></IonText>
            </IonCol>
          </IonRow>
          <IonRow className='mb-2'>
            <IonCol className='p-3 text-center rounded-md bg-yellow-400 text-white active:opacity-60'>
              {t('base.button.signup')}
            </IonCol>
          </IonRow>
          <IonRow className='justify-center my-3'>
            <IonImg src={LeftArrow}/>
            <IonText class='mx-2'>{t('base.label.or')}</IonText>
            <IonImg src={RightArrow}/>
          </IonRow>
          <IonRow className='mb-4'>
            <IonCol className='p-3 border border-gray-300 rounded-lg active:opacity-60 flex items-center justify-center'>
              <IonImg src={Facebook} className='absolute left-3'/>
              {t('base.button.loginfacebook')}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='p-3 border border-gray-300 rounded-lg active:opacity-60 flex items-center justify-center'>
              <IonImg src={Google} className='absolute left-3'/>
              {t('base.button.logingoogle')}
            </IonCol>
          </IonRow>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Register;