import { 
  IonPage, 
  IonImg, 
  IonRow,
  IonButton,
  IonCol,
  IonContent,
  IonText,
  IonIcon
} from '@ionic/react';
import styled from 'styled-components'
import { useState } from 'react'
import { useIonRouter } from '@ionic/react'
import { useTranslation } from 'react-i18next';

import AppInput from '../components/TextInput'

import LeftArrow from '../assets/imgs/VectorLeft.svg' 
import RightArrow from '../assets/imgs/VectorRight.svg' 
import Facebook from '../assets/imgs/Facebook.svg'
import Google from '../assets/imgs/Google.svg'

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

const Login: React.FC = () => {
  const router = useIonRouter();
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')

  const { t, i18n } = useTranslation()

  const handleSignup = () => {
    router.push('/register')
  }

  return (
    <IonPage>
      <IonContent>
        <IonCol className='flex flex-col justify-center h-full px-3'>
          <IonRow className='my-1'>
            <SignupBtn className='flex-1' onClick={handleSignup} fill='clear'>{t('base.button.signup')}</SignupBtn>
            <SigninBtn className='flex-1 active' fill='clear'>{t('base.button.login')}</SigninBtn>
          </IonRow>
          <AppInput label={t('base.label.email')} type='email' value={email} onChange={setEmail} />
          <AppInput label={t('base.label.password')} type='password' value={dob} onChange={setDob} />
          <IonRow className='mb-2'>
            <IonCol class='text-end'>
              <IonText class='text-sm text-gray-800 active:text-gray-300'>{t('base.label.forgot')}</IonText>
            </IonCol>
          </IonRow>
          <IonRow className='mb-2'>
            <IonCol className='p-3 text-center rounded-md bg-yellow-400 text-white active:opacity-60'>
              {t('base.button.login')}
            </IonCol>
          </IonRow>
          <IonRow className='justify-center my-3'>
            <IonImg src={LeftArrow}/>
            <IonText class='mx-2'>{t('base.label.or')}</IonText>
            <IonImg src={RightArrow}/>
          </IonRow>
          <IonRow className='mb-4'>
            <IonCol className='p-3 border border-gray-300 rounded-lg active:opacity-60 items-center flex justify-center'>
              <IonImg src={Facebook} className='absolute left-3'/>
              {t('base.button.loginfacebook')}
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='p-3 border border-gray-300 rounded-lg active:opacity-60 items-center flex justify-center'>
              <IonImg src={Google} className='absolute left-3' />
              {t('base.button.logingoogle')}
            </IonCol>
          </IonRow>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Login;