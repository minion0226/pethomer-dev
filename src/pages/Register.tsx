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
            <SignupBtn className='flex-1 active' fill='clear'>Sign Up</SignupBtn>
            <SigninBtn className='flex-1' onClick={handleSignup} fill='clear'>Log In</SigninBtn>
          </IonRow>
          <AppInput label='Email Address' type='email' value={email} onChange={setEmail} />
          <AppInput label='First Name' value={first} onChange={setFirst} />
          <AppInput label='Last Name' value={last} onChange={setLast} />
          <AppInput label='Date of Birth(only for petsitters)' value={dob} onChange={setDob} />
          <AppPhoneInput label='Phone Number' value={dob} onChange={setDob} />
          <AppInput label='Password' type='password' value={dob} onChange={setDob} />
          <IonRow className='mb-2'>
            <IonCol class='text-center'>
              <IonText class='text-xs text-gray-400'>by signing up you accept the <span className='text-black underline active:opacity-60'>terms and conditions</span></IonText>
            </IonCol>
          </IonRow>
          <IonRow className='mb-2'>
            <IonCol className='p-3 text-center rounded-md bg-yellow-400 text-white active:opacity-60'>
              Sign Up
            </IonCol>
          </IonRow>
          <IonRow className='justify-center my-3'>
            <IonImg src={LeftArrow}/>
            <IonText class='mx-2'>Or</IonText>
            <IonImg src={RightArrow}/>
          </IonRow>
          <IonRow className='mb-4'>
            <IonCol className='p-3 border border-gray-300 rounded-lg active:opacity-60 flex items-center justify-center'>
              <IonImg src={Facebook} className='absolute left-3'/>
              Login with Facebook
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='p-3 border border-gray-300 rounded-lg active:opacity-60 flex items-center justify-center'>
              <IonImg src={Google} className='absolute left-3'/>
              Login with Google
            </IonCol>
          </IonRow>
        </IonCol>
      </IonContent>
    </IonPage>
  );
};

export default Register;