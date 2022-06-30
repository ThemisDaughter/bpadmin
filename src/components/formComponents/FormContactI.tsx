import { useContext } from 'react'
import CreatorContext from '../../context/FormContext/CreatorContext';
import {
  StyledFormField,
  StyledFormGrid,
  StyledFormHeading,
  StyledInputLabel,
  StyledTextArea,
  StyledTextInput,
  StyledErrorMessage
} from '../../styles/styledFormComponents'

const FormContactI = () => {
 
  const { contact, updateContact } = useContext(CreatorContext);

  return (
    <StyledFormGrid>
    <StyledFormHeading>Kontaktangaben</StyledFormHeading>
    <StyledFormField span="4">
        <StyledInputLabel>E-Mail</StyledInputLabel>
        <StyledTextInput type='email' value={contact.creator_email} id='creator_email' onChange={updateContact}></StyledTextInput>
        <StyledErrorMessage id='creator_email_error' />
      </StyledFormField>
    <StyledFormField span="2">
    <StyledInputLabel>Telefon</StyledInputLabel>
        <StyledTextInput type='text' value={contact.creator_phone} id='creator_phone' onChange={updateContact}></StyledTextInput>
        <StyledErrorMessage id='creator_phone_error' />
      </StyledFormField>

      <StyledFormField>
        <StyledInputLabel>Nachricht</StyledInputLabel>
        <StyledTextArea id='creator_message' defaultValue={contact.creator_message} onChange={ updateContact }></StyledTextArea>
        <StyledErrorMessage id='creator_message_error' />
      </StyledFormField> 
</StyledFormGrid>
  )
}

export default FormContactI