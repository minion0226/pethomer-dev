import {
  IonText,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption
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

const CountryCode = [
  '+1',
  '+380',
  '+44'
]


const AppPhoneInput = (props: Props) => {
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
    <div className="mb-2 mx-1">
      <IonText className="block mb-1">{props.label}</IonText>
      <IonRow className="px-2 w-full border-2 flex-nowrap border-gray-200 rounded-md">
        <IonSelect className="w-24 mr-1" justify="end">
          {
            CountryCode.map(code => {
              return <IonSelectOption value={code}>{code}</IonSelectOption>
            })
          }
        </IonSelect>
        <Input
          className="flex-grow"
          value={localValue}
          onIonChange={handleChange}
          type={props.type?props.type: 'text'}
          placeholder={props.label}
        />
      </IonRow>
    </div>
  );
}

export default AppPhoneInput;
