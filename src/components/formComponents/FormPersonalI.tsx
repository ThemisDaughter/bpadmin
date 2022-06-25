import { useContext } from 'react';
import { StyledFormField, StyledFormGrid, StyledFormHeading, StyledInputLabel, StyledTextInput } from '../../styles/styledFormComponents';
import { format, subYears, addYears, subDays } from 'date-fns'

import CreatorContext from 'context/FormContext/CreatorContext';

const FormPersonalI = () => {

  const { personal, updatePersonal } = useContext(CreatorContext);

  const todayDate = new Date();
  const minDate = format(subYears(todayDate, 100), 'yyyy-MM-dd');
  const maxDate = format(subYears(todayDate, 12), 'yyyy-MM-dd');

  console.log(minDate, maxDate)

  return (
    <StyledFormGrid>
      <StyledFormHeading>Persönliche Informationen</StyledFormHeading>
      <StyledFormField span="4">
      </StyledFormField>
      <StyledFormField span="2">
        <StyledInputLabel>Vorname</StyledInputLabel>
        <StyledTextInput type='text' required value={personal.creator_first_name} id="creator_first_name" onChange={ updatePersonal }></StyledTextInput>
      </StyledFormField>
      <StyledFormField span="2">
        <StyledInputLabel>Nachname</StyledInputLabel>
        <StyledTextInput type='text' required value={personal.creator_last_name} id="creator_last_name" onChange={ updatePersonal }></StyledTextInput>
      </StyledFormField>
      <StyledFormField>
        <StyledInputLabel>Adresse</StyledInputLabel>
        <StyledTextInput type='text' value={personal.creator_address} id="creator_address" onChange={updatePersonal}></StyledTextInput>
      </StyledFormField>
      <StyledFormField span="1">
        <StyledInputLabel>Postleitzahl</StyledInputLabel>
        <StyledTextInput type='text' value={personal.creator_postcode} id="creator_postcode" onChange={updatePersonal}></StyledTextInput>
      </StyledFormField>
      <StyledFormField span="3">
        <StyledInputLabel>Wohnort</StyledInputLabel>
        <StyledTextInput type='text' value={personal.creator_city} id="creator_city" onChange={updatePersonal}></StyledTextInput>
      </StyledFormField>
      <StyledFormField span="1">
        <StyledInputLabel>Geburtstag</StyledInputLabel>
        <StyledTextInput max={ maxDate.toString() } min={minDate.toString()} type='date' value={personal.creator_birthday} id="creator_birthday" onChange={updatePersonal}></StyledTextInput>
      </StyledFormField>
    </StyledFormGrid>
  )
}

export default FormPersonalI