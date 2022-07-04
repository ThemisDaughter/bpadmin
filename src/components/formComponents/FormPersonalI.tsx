import { useContext } from 'react';
import { StyledFormField, StyledFormGrid, StyledFormHeading, StyledInputLabel, StyledTextInput, StyledErrorMessage } from '../../styles/styledFormComponents';
import { format, subYears } from 'date-fns'

import { creatorPersonalValidator as validator } from 'helpers/formValidation/validators';
import removeErrorMessage from '../../helpers/formValidation/errorMessageHandlers';
import { validateField } from '../../helpers/formValidation/validate';
import CreatorContext from 'context/FormContext/CreatorContext';

const FormPersonalI = () => {

  const { personal, updatePersonal, setIsUserError } = useContext(CreatorContext);
  
  const todayDate = new Date();
  const minDate = format(subYears(todayDate, 100), 'yyyy-MM-dd');
  const maxDate = format(subYears(todayDate, 12), 'yyyy-MM-dd');
  
  const onBlur = (field: HTMLInputElement) => {
    if (!validateField(field, validator)) setIsUserError(true)
  }
  const onFocus = (field: HTMLInputElement) => {
    setIsUserError(false);
    removeErrorMessage(field);
  }
  
  return (
    <StyledFormGrid>
      <StyledFormHeading>Persönliche Informationen</StyledFormHeading>
      <StyledFormField span="4">
      </StyledFormField>
      <StyledFormField span="2">
        <StyledInputLabel>Vorname</StyledInputLabel>
        <StyledTextInput type='text' required value={personal.creator_first_name} id="creator_first_name" onChange={updatePersonal} onBlur={e => onBlur(e.target)} onFocus={e => onFocus(e.target)} />
        <StyledErrorMessage id="creator_first_name_error"></StyledErrorMessage>
      </StyledFormField>
      <StyledFormField span="2">
        <StyledInputLabel>Nachname</StyledInputLabel>
        <StyledTextInput type='text' required value={personal.creator_last_name} id="creator_last_name" onChange={updatePersonal} onBlur={e => onBlur(e.target)} onFocus={e => onFocus(e.target)} />
        <StyledErrorMessage id="creator_last_name_error"></StyledErrorMessage>
      </StyledFormField>
      <StyledFormField>
        <StyledInputLabel>Adresse</StyledInputLabel>
        <StyledTextInput type='text' value={personal.creator_address} id="creator_address" onChange={updatePersonal} onBlur={ e => onBlur(e.target) } onFocus={e => onFocus(e.target)}  />
        <StyledErrorMessage id="creator_address_error"></StyledErrorMessage>
      </StyledFormField>
      <StyledFormField span="1">
        <StyledInputLabel>Postleitzahl</StyledInputLabel>
        <StyledTextInput type='text' value={personal.creator_postcode} id="creator_postcode" onChange={updatePersonal} onBlur={e => onBlur(e.target)} onFocus={e => onFocus(e.target)} />
        <StyledErrorMessage id="creator_postcode_error"></StyledErrorMessage>
      </StyledFormField>
      <StyledFormField span="3">
        <StyledInputLabel>Wohnort</StyledInputLabel>
        <StyledTextInput type='text' value={personal.creator_city} id="creator_city" onChange={updatePersonal} onBlur={e => onBlur(e.target)} onFocus={e => onFocus(e.target)} />
        <StyledErrorMessage id="creator_city_error"></StyledErrorMessage>
      </StyledFormField>
      <StyledFormField span="1">
        <StyledInputLabel>Geburtstag</StyledInputLabel>
        <StyledTextInput max={maxDate.toString()} min={minDate.toString()} type='date' value={personal.creator_birthday} id="creator_birthday" onChange={updatePersonal}  />
        <StyledErrorMessage id="creator_birthday_error"></StyledErrorMessage>
      </StyledFormField>
    </StyledFormGrid>
  )
}

export default FormPersonalI