import {
  IonText,
  IonRow,
  IonInput,
  IonCol
} from "@ionic/react"
import { useEffect, useState } from 'react'
import styled from "styled-components"

interface Props {
  label: string
  icon?: string
  value: string
  type?: string
  onChange: (val: string) => void
}

const Input = styled(IonInput)`
  
--padding-end: 10px;
--padding-start: 10px;
`

const AppDatePicker = (props: Props) => {
  const [localValue, setLocalValue] = useState<string>(props.value);

  const handleChange = (e: any) => {
    const newValue = e.target.value as string;
    setLocalValue(newValue);
    props.onChange(newValue);
  }

  useEffect(()=> {
    setLocalValue(props.value)
  }, [props.value])

  return (
    <IonRow className="mb-2">
      <IonCol>
        <IonRow>
          <IonText className="block mb-1">{props.label}</IonText>
          <Input
            className="px-2 w-full border-2 border-gray-200 rounded-md"
            value={localValue}
            onIonChange={handleChange}
            type={props.type?props.type: 'text' as any}
            placeholder={props.label}
          />
        </IonRow>
      </IonCol>
    </IonRow>
  );
}

export default AppDatePicker;
