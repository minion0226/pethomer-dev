import { 
  IonPage, 
  IonText, 
  IonCol,
  IonButton
} from '@ionic/react';
import { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useIonRouter } from '@ionic/react'

const Container = styled(IonCol)`
  background: rgba(204, 204, 204, 0.10);
`
const Selection = styled(IonButton)`
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.10);
  background: #FFF;
  text-align: center;
  color: gray;

  &.active {
    border-radius: 10px;
    border: 2px solid #4EB848;
    background: #FFF;
    color: black;
    
    &:after {
      content: '';
      display: block;
      height: 9px;
      background: rgba(78, 184, 72, 0.30);
      filter: blur(7.5px);
    }

  }
`

const Language: React.FC = () => {
  const router = useIonRouter()

  const [item, setItem] = useState('en')

  const { t, i18n } = useTranslation();
  
  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang)
    setItem(lang)
  }

  const handleContinue = () => {
    router.push('/walkthrough')
  }

  return (
    <IonPage>
      <Container className='flex flex-col justify-center px-5'>
        <IonText className='text-xl mb-2'>{t('languagePage.Select')}</IonText>
        <Selection className={`w-full ${item === 'en'?'active': ''}`} fill='clear' onClick={() => handleClick('en')}>{t('languagePage.english')}</Selection>
        <Selection className={`w-full ${item === 'pl'?'active': ''}`} fill='clear' onClick={() => handleClick('pl')}>{t('languagePage.polish')}</Selection>
        <IonButton onClick={handleContinue} className='w-full mt-2 bg-yellow-400 text-white rounded-xl' fill='clear'>{t('base.button.continue')}</IonButton>
      </Container>
    </IonPage>
  );
};

export default Language;