import { ChangeEvent } from 'react';
import { StyledFormField, StyledInputLabel, StyledTextInput } from '../../../styles/styledFormComponents';


interface Props {
  name: string;
  onUpdate: (e: ChangeEvent<HTMLInputElement>)=>void
}

const LinkedinComponent = ({ name, onUpdate }: Props) => {
  return (
  <StyledFormField>
    <StyledInputLabel>Linkedin Profil</StyledInputLabel>
    <StyledTextInput type='text' required value={name} id="creator_first_name" onChange={ onUpdate }></StyledTextInput>
  </StyledFormField>
  )
}

export default LinkedinComponent;