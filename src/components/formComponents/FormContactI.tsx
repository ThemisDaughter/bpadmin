import { useContext } from 'react'
import CreatorContext from '../../context/FormContext/CreatorContext';
import {
  StyledFormField,
  StyledFormGrid,
  StyledFormHeading,
  StyledInputLabel,
  StyledTextArea,
  StyledTextInput
} from '../../styles/styledFormComponents'

const FormContactI = () => {
 
  const { contact, updateContact } = useContext(CreatorContext);
  // const [textarea, setTextarea] = useState<HTMLElement | null>(null);

  // useEffect(() => {
  //   setTextarea(document.getElementById('creator_message'));
  //   console.log('useeffect running')
  //   textarea && textarea.addEventListener('change', (e) => {
  //     console.log('changelistener added, event is ', e)
  //     updateContact(e)
  //   })
  //   if (textarea) {
  //     return textarea.removeEventListener('change', (e) => updateContact(e))
  //   }
  // }, [])

  return (
    <StyledFormGrid>
    <StyledFormHeading>Kontaktangaben</StyledFormHeading>
    <StyledFormField span="4">
        <StyledInputLabel>E-Mail</StyledInputLabel>
        <StyledTextInput type='email' value={contact.creator_email} id='creator_email' onChange={updateContact}></StyledTextInput>
      </StyledFormField>
    <StyledFormField span="2">
    <StyledInputLabel>Telefon</StyledInputLabel>
        <StyledTextInput type='text' value={contact.creator_phone} id='creator_phone' onChange={updateContact}></StyledTextInput>
      </StyledFormField>

      <StyledFormField>
        <StyledInputLabel>Nachricht</StyledInputLabel>
        <StyledTextArea id='creator_message' defaultValue={contact.creator_message} onChange={ updateContact }></StyledTextArea>
      </StyledFormField> 
</StyledFormGrid>
  )
}

export default FormContactI