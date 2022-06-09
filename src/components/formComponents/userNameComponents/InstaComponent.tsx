import { ChangeEvent } from 'react'
import { StyledFormField, StyledInputLabel, StyledTextInput } from '../../../styles/styledFormComponents';


interface Props {
  name: string;
  onUpdate: (e: ChangeEvent<HTMLInputElement>)=>void
}

const InstaComponent = ({ name, onUpdate }:Props) => {
  return (
    <StyledFormField>
    <StyledInputLabel>Instagram Link</StyledInputLabel>
    <StyledTextInput type='text' required value={name} id="creator_first_name" onChange={ onUpdate }></StyledTextInput>
  </StyledFormField>
  )
}

export default InstaComponent