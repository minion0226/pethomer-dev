import { 
  IonImg, 
  IonPage, 
  IonText, 
  IonRow,
  IonButton
} from '@ionic/react';
import styled from 'styled-components'
import { useState } from 'react'
import Step1 from '../assets/imgs/step1.png'
import Step2 from '../assets/imgs/step2.png'
import Step3 from '../assets/imgs/step3.png'

const ForgroundTop = styled.div`
  background: linear-gradient(180deg, #000 -50%, rgba(0, 0, 0, 0.00) 60%);
  height: 172px;
  z-index: 1;
`

const ForgroundBottom = styled.div`
  background: linear-gradient(0deg, #000 29.13%, rgba(0, 0, 0, 0.00) 100%);
`

const ForeGround = styled.div`
  background: rgba(0, 0, 0, 0.50);
`

const Walkthrough: React.FC = () => {

  const [step, setStep] = useState(0)

  const handleClick = () => {
    if(step >= 2) {
      console.log('need to push next page');
      setStep(0)
    } else {
      setStep(step + 1)
    }
  }

  return (
    <IonPage className='relative flex h-full'>
      <ForgroundTop className='top-0 left-0 w-full bg-gradient-to-t'></ForgroundTop>
      <ForeGround className='absolute w-full h-full z-10'></ForeGround>
      <IonImg className='absolute w-full top-0' src={step===0 ? Step1 : step===1 ? Step2 : Step3} />
      
      <IonRow className='flex flex-col justify-end items-center z-10 pb-3 relative'>
        <ForgroundBottom className='absolute bottom-0 left-0 w-full bg-gradient-to-b h-full'></ForgroundBottom>
        <IonText className='text-white text-2xl px-3 text-center block z-10'>Title</IonText>
        <IonText className='text-white text-base text-center block z-10'>description</IonText>
        <IonRow className='w-full flex justify-between items-center px-3 z-10'>
          <IonButton className='text-white uppercase' fill='clear' onClick={handleClick}>Skip</IonButton>
          <IonRow>
            <div className={`w-4 rounded-sm h-1 ${step >= 0? 'bg-lime-400':'bg-white'}`}></div>
            <div className={`w-4 rounded-sm h-1 ${step >= 1? 'bg-lime-400':'bg-white'} mx-1`}></div>
            <div className={`w-4 rounded-sm h-1 ${step >= 2? 'bg-lime-400':'bg-white'}`}></div>
          </IonRow>
        </IonRow>
      </IonRow>
    </IonPage>
  );
};

export default Walkthrough;